import { Link } from 'react-router-dom'
import { PageHeader } from '../components/ui'

const pillars = [
  { num: '01', name: 'Outreach', sub: 'Making the first move', text: 'Getting your name in front of the people who hire, and following up until it lands.' },
  { num: '02', name: 'Reputation', sub: 'The work behind the work', text: 'Being the player people want in the pit for eight hours: prepared, reliable, and kind.' },
  { num: '03', name: 'Network', sub: 'Relationships that compound', text: 'Staying in touch, showing up, and building relationships with peers who grow alongside you.' },
  { num: '04', name: 'Income Architecture', sub: 'Designing the portfolio', text: 'Knowing your numbers and building income streams that hold up when one slows down.' },
  { num: '05', name: 'Mindset', sub: 'The inner game', text: 'Defining success on your own terms and moving forward through rejection and comparison.' },
]

export default function Coaching() {
  return (
    <>
      <PageHeader
        eyebrow="Career coaching for musicians"
        title={<>Create your <em className="text-accent">own path.</em></>}
        subtitle="Conservatory teaches you to play. It rarely teaches you how freelance careers actually get built. After 20+ years freelancing on Broadway, at the Met, and with orchestras, I help musicians build careers that last."
      />

      {/* THE 5 PILLARS */}
      <section className="bg-off-white px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow mb-5">The framework</p>
          <h2 className="section-title mb-14">
            The 5 Pillars of a<br /><em>sustainable music career.</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-light-gray border border-light-gray">
            {pillars.map(({ num, name, sub, text }) => (
              <div key={num} className="bg-off-white px-7 py-9 relative">
                {/* decorative watermark number, drawn with CSS so it isn't read as text */}
                <span aria-hidden="true" data-num={num} className="absolute top-5 right-5 font-serif text-[48px] text-black/5 leading-none before:content-[attr(data-num)]" />
                <p className="text-[12px] tracking-[0.18em] uppercase text-accent-dark font-normal mb-2 pr-12">{sub}</p>
                <h3 className="font-serif text-[20px] text-black mb-3">{name}</h3>
                <p className="text-[15px] text-text-gray font-light leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section className="px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow mb-5">Where to start</p>
          <h2 className="section-title mb-14">
            Take the quiz,<br /><em>then go deeper together.</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-light-gray border border-light-gray">

            {/* Quiz */}
            <div className="bg-black p-8 lg:p-10 flex flex-col">
              <span className="text-[12px] tracking-[0.2em] uppercase text-white/85 mb-4">Step 1 · Free</span>
              <h3 className="font-serif text-[26px] text-white mb-4">The 5 Pillars Career Check</h3>
              <p className="text-[15px] text-white/85 font-light leading-relaxed mb-6">
                50 yes/no questions, about 10 minutes. Get an instant map of where your career is strong and where it's stuck.
              </p>
              <ul className="list-none flex flex-col mb-8">
                {['Your score on all five pillars', 'Your strongest and focus pillar', 'Three concrete next steps based on your answers', 'A one-page PDF to keep'].map(item => (
                  <li key={item} className="flex items-start gap-2.5 py-2 border-b border-white/10 text-[14px] text-white/90">
                    <span className="w-1 h-1 rounded-full bg-white/50 flex-shrink-0 mt-[6px]" />{item}
                  </li>
                ))}
              </ul>
              {/* Plain link: the quiz is a standalone page, not part of the React app */}
              <a href="/five-pillars" className="mt-auto inline-block self-start bg-accent text-black text-[13px] tracking-[0.15em] uppercase px-6 py-3 no-underline hover:opacity-90">
                Take the quiz
              </a>
            </div>

            {/* Group debrief */}
            <div className="bg-white p-8 lg:p-10 flex flex-col">
              <span className="text-[12px] tracking-[0.2em] uppercase text-mid-gray mb-4">Step 2 · Live on Zoom</span>
              <h3 className="font-serif text-[26px] text-black mb-4">5 Pillars Group Debrief</h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif text-[34px] text-black leading-none">$25</span>
                <span className="text-[14px] text-mid-gray">founding price</span>
              </div>
              <p className="text-[13px] text-mid-gray italic mb-6">Regularly $50 · 90 minutes · 10 people max</p>
              <ul className="list-none flex flex-col mb-8">
                {['What your pentagon shape is telling you', 'Why your focus pillar matters most right now', 'Turning your next steps into a plan you follow', 'Hear how other musicians tackle the same challenges'].map(item => (
                  <li key={item} className="flex items-start gap-2.5 py-2 border-b border-light-gray text-[14px] text-text-gray">
                    <span className="w-1 h-1 rounded-full bg-black/40 flex-shrink-0 mt-[6px]" />{item}
                  </li>
                ))}
              </ul>
              <p className="mt-auto text-[14px] text-text-gray font-light leading-relaxed">
                To join the waitlist, take the quiz and tap <strong className="font-medium text-black">“Notify me”</strong> on your results page. You'll be the first to hear the date.
              </p>
            </div>
          </div>

          <p className="text-[16px] text-text-gray font-light leading-relaxed mt-10 max-w-2xl">
            Prefer to work one-on-one? <Link to="/contact" className="text-black border-b border-black/40 no-underline hover:border-black">Get in touch</Link> about a private session to go through your results together.
          </p>
        </div>
      </section>
    </>
  )
}
