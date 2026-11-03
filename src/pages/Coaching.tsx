import { Link } from 'react-router-dom'
import { Stat } from '../components/ui'

const QUIZ_URL = '/five-pillars' // standalone quiz page (not part of the React app), so plain <a> links

const painPoints = [
  { title: 'Practice harder at the wrong thing.', text: "You polish excerpts for months while the real gap is that the people who hire don't know your name." },
  { title: 'Say yes to everything and still feel behind.', text: "A full calendar doesn't mean a sustainable career, especially when one canceled season could empty it." },
  { title: 'Wait to be discovered.', text: 'You assume good playing will speak for itself, and watch less-prepared players get the call.' },
  { title: 'Lose touch with the people who matter.', text: 'You move, graduate, or get busy, and relationships that could have carried your career quietly fade.' },
  { title: "Measure yourself against someone else's scoreboard.", text: "Their titles, their big-name gigs, their income, until you're convinced you're failing even when you're not." },
]

const pillars = [
  { num: '01', name: 'Outreach', sub: 'Making the first move', text: 'Getting your name in front of the people who hire.' },
  { num: '02', name: 'Reputation', sub: 'The work behind the work', text: 'Being the player people want to spend eight hours with in the pit.' },
  { num: '03', name: 'Network', sub: 'Relationships that compound', text: 'Relationships that keep paying off for years.' },
  { num: '04', name: 'Income Architecture', sub: 'Designing the portfolio', text: 'Income that holds up when one stream slows down.' },
  { num: '05', name: 'Mindset', sub: 'The inner game', text: 'Defining success on your own terms and moving through rejection.' },
]

const transformations = [
  { title: 'You stop guessing.', text: 'You know which one or two things will move your career this season, and you can let the rest wait.' },
  { title: 'You become the musician contractors want to hire again and again.', text: "You show up prepared, you're easy to work with, and you stay on their radar between gigs." },
  { title: 'Your relationships work for you.', text: 'You stay connected through moves, career changes, and busy seasons.' },
  { title: 'Your income stops feeling fragile.', text: 'You know your numbers and have more than one way to earn.' },
  { title: 'You measure success by your own definition.', text: "You can celebrate a colleague's win without doubting your own path." },
]

function Bullet({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <li className={`flex items-start gap-2.5 py-2.5 border-b text-[15px] ${dark ? 'border-white/10 text-white/90' : 'border-light-gray text-text-gray'}`}>
      <span className={`w-1 h-1 rounded-full flex-shrink-0 mt-[9px] ${dark ? 'bg-white/60' : 'bg-black/50'}`} />
      <span>{children}</span>
    </li>
  )
}

export default function Coaching() {
  return (
    <div className="pt-[80px]">

      {/* HERO */}
      <section className="px-6 lg:px-16 py-16 lg:py-24 border-b border-light-gray">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow mb-5">Career coaching for musicians</p>
          <h1 className="font-serif font-normal leading-tight text-black mb-6" style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)' }}>
            Create your <em className="text-accent">own path.</em>
          </h1>
          <p className="font-serif text-black leading-snug max-w-2xl mb-5" style={{ fontSize: 'clamp(1.3rem, 2.4vw, 1.75rem)' }}>
            You trained for years to play at the highest level. Nobody trained you to build the career.
          </p>
          <p className="text-[17px] text-text-gray font-light leading-relaxed max-w-xl mb-10">
            The 5 Pillars Career Check is a free, 10-minute assessment for freelance musicians. Find out exactly where your career is strong, where it's stuck, and what to do next.
          </p>
          <a href={QUIZ_URL} className="btn-primary">Take the free quiz</a>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-off-white px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow mb-5">The problem</p>
          <h2 className="section-title mb-6">
            Talent gets you in the room.<br /><em>It doesn't keep the phone ringing.</em>
          </h2>
          <p className="text-[17px] text-text-gray font-light leading-relaxed max-w-2xl mb-12">
            Most freelance musicians aren't short on talent or work ethic. They're short on a clear picture of their own career. Without one, it's easy to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-light-gray border border-light-gray">
            {painPoints.map(({ title, text }) => (
              <div key={title} className="bg-off-white px-8 py-9">
                <h3 className="font-serif text-[20px] text-black leading-snug mb-3">{title}</h3>
                <p className="text-[15px] text-text-gray font-light leading-relaxed">{text}</p>
              </div>
            ))}
            <div className="bg-black px-8 py-9 flex flex-col justify-center">
              <p className="font-serif text-[22px] text-white leading-snug mb-3">None of this is a talent problem.</p>
              <p className="text-[15px] text-white/85 font-light leading-relaxed">
                It's a blind spot. And you can't fix what you can't see.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE QUIZ + 5 PILLARS */}
      <section className="px-6 lg:px-16 py-16 lg:py-24 border-b border-light-gray">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow mb-5">The 5 Pillars Career Check</p>
          <h2 className="section-title mb-6">
            See your whole career<br /><em>in 10 minutes.</em>
          </h2>
          <p className="text-[17px] text-text-gray font-light leading-relaxed max-w-2xl mb-12">
            The quiz looks at the five areas that, in my experience, decide whether a freelance career grows or stalls.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-light-gray border border-light-gray mb-14">
            {pillars.map(({ num, name, sub, text }) => (
              <div key={num} className="bg-white px-7 py-9 relative">
                {/* decorative watermark number, drawn with CSS so it isn't read as text */}
                <span aria-hidden="true" data-num={num} className="absolute top-5 right-5 font-serif text-[48px] text-black/5 leading-none before:content-[attr(data-num)]" />
                <p className="text-[12px] tracking-[0.18em] uppercase text-accent-dark font-normal mb-2 pr-12">{sub}</p>
                <h3 className="font-serif text-[20px] text-black mb-3">{name}</h3>
                <p className="text-[15px] text-text-gray font-light leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h3 className="font-serif text-[24px] text-black mb-4">Answer 50 honest yes/no questions. Right away, you get:</h3>
              <ul className="list-none flex flex-col">
                <Bullet>A visual map of your career across all five pillars</Bullet>
                <Bullet>Your strongest pillar and your focus pillar</Bullet>
                <Bullet>Three concrete next steps chosen from your own answers</Bullet>
                <Bullet>A one-page PDF to keep and come back to</Bullet>
              </ul>
            </div>
            <div className="lg:pt-12">
              <p className="font-serif italic text-[22px] text-black leading-snug mb-6">It's free, and it always will be.</p>
              <a href={QUIZ_URL} className="btn-primary">Take the free quiz</a>
            </div>
          </div>
        </div>
      </section>

      {/* DEBRIEF */}
      <section className="bg-off-white px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="eyebrow mb-5">Go deeper together</p>
            <h2 className="section-title mb-6">
              Clarity is the start.<br /><em>A plan is what changes things.</em>
            </h2>
            <p className="text-[17px] text-text-gray font-light leading-relaxed mb-5">
              Your results show <em>where</em> to focus. The 5 Pillars Group Debrief is where we work out <em>how</em>.
            </p>
            <p className="text-[17px] text-text-gray font-light leading-relaxed">
              In a small group on Zoom, I'll walk through what your pentagon shape means, why your focus pillar matters most right now, and how to turn your next steps into habits you'll actually keep. You'll also hear how other musicians are handling the same challenges, because you're far less alone in this than it feels.
            </p>
          </div>

          <div className="bg-white border border-light-gray p-8 lg:p-10 flex flex-col self-start">
            <span className="text-[12px] tracking-[0.2em] uppercase text-mid-gray mb-4">Live on Zoom · 10 people max</span>
            <h3 className="font-serif text-[26px] text-black mb-4">5 Pillars Group Debrief</h3>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-serif text-[38px] text-black leading-none">$25</span>
              <span className="text-[14px] text-mid-gray">founding price</span>
            </div>
            <p className="text-[14px] text-mid-gray italic mb-6">Regularly $50 · 90 minutes</p>
            <ul className="list-none flex flex-col mb-8">
              <Bullet>What your pentagon shape is telling you</Bullet>
              <Bullet>Why your focus pillar matters most right now</Bullet>
              <Bullet>Turning your next steps into a plan you follow</Bullet>
              <Bullet>How other musicians tackle the same challenges</Bullet>
            </ul>
            <p className="text-[15px] text-text-gray font-light leading-relaxed mb-6">
              To join the waitlist, take the quiz and tap <strong className="font-medium text-black">“Notify me”</strong> on your results page.
            </p>
            <a href={QUIZ_URL} className="btn-outline text-center">Take the quiz to join</a>
            <p className="text-[15px] text-text-gray font-light leading-relaxed mt-6">
              Prefer one-on-one? <Link to="/contact" className="text-black border-b border-black/40 no-underline hover:border-black">Get in touch</Link> about a private session to go through your results together.
            </p>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="bg-black px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <p className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-white/75 mb-5">
            <span className="block w-8 h-px bg-white/60" aria-hidden="true" />What clarity makes possible
          </p>
          <h2 className="section-title text-white mb-14">
            What changes when<br /><em className="text-accent">you can see clearly.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {transformations.map(({ title, text }) => (
              <div key={title} className="bg-black px-8 py-9">
                <h3 className="font-serif text-[20px] text-white leading-snug mb-3">{title}</h3>
                <p className="text-[15px] text-white/80 font-light leading-relaxed">{text}</p>
              </div>
            ))}
            <div className="bg-black px-8 py-9 flex items-center">
              <p className="font-serif italic text-[20px] text-white/90 leading-snug">
                The goal isn't to become someone else's version of successful. It's a career you designed on purpose, and one you can sustain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ME */}
      <section className="px-6 lg:px-16 py-16 lg:py-24 border-b border-light-gray">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
          <div>
            <p className="eyebrow mb-5">Why learn this from me</p>
            <h2 className="section-title mb-10">
              Lessons learned<br /><em>the hard way.</em>
            </h2>
            <div className="flex flex-wrap gap-8 pt-8 border-t border-light-gray">
              <Stat num="25+" label="Years performing" />
              <Stat num="20+" label="Years teaching" />
              <Stat num="Juilliard" label="B.M. & M.M." />
            </div>
          </div>
          <div className="flex flex-col gap-5 text-[17px] text-text-gray font-light leading-relaxed">
            <p>
              I'm a Juilliard-trained percussionist with more than 25 years of performing, including Broadway, the Metropolitan Opera, and the Colorado Symphony. None of that came from waiting.
            </p>
            <p>
              My first Broadway shows came from cold-calling players after a concert until one of them, Billy Miller, offered me five performances of <em>The Addams Family</em>. After I moved from New York to Colorado, contractors kept calling, because a reputation built on preparation and kindness travels further than any audition tape. And when the pandemic stopped performing overnight, I found a way to keep moving, including taking a bilingual job far outside music.
            </p>
            <p className="font-serif italic text-[22px] text-black leading-snug">
              The 5 Pillars are the lessons I learned the hard way, organized so you don't have to.
            </p>
            <Link to="/bio" className="text-link self-start">Full biography →</Link>
          </div>
        </div>
      </section>

      {/* FIT */}
      <section className="px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-light-gray border border-light-gray">
          <div className="bg-white p-8 lg:p-10">
            <h2 className="font-serif text-[26px] text-black mb-5">This is for you if…</h2>
            <ul className="list-none flex flex-col">
              <Bullet>You're a conservatory student, a recent grad, or a working freelancer</Bullet>
              <Bullet>You're doing "everything right" but your career feels stuck or unpredictable</Bullet>
              <Bullet>You want honest, practical guidance from someone who has done the work</Bullet>
            </ul>
          </div>
          <div className="bg-white p-8 lg:p-10">
            <h2 className="font-serif text-[26px] text-black mb-5">It's probably not for you if…</h2>
            <ul className="list-none flex flex-col">
              <Bullet>You're looking for a shortcut that skips the work</Bullet>
              <Bullet>You'd rather not take an honest look at where you are right now</Bullet>
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-off-white px-6 lg:px-16 py-16 lg:py-20 border-t border-light-gray text-center">
        <h2 className="section-title mb-8">
          Ten minutes. Five pillars.<br /><em>One clear next step.</em>
        </h2>
        <a href={QUIZ_URL} className="btn-primary">Take the free quiz</a>
      </section>
    </div>
  )
}
