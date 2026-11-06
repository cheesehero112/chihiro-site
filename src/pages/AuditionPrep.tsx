import { Link } from 'react-router-dom'

const offers = [
  {
    tag: 'Start here',
    name: 'Audition Readiness Review',
    items: ['Video assessment', 'Repertoire plan'],
  },
  {
    tag: 'Focused preparation',
    name: 'Interlochen Sprint',
    items: ['Four lessons', 'One mock audition', 'One recording review', 'Video introduction coaching'],
  },
  {
    tag: '12 weeks',
    name: '12-week Audition Intensive',
    items: ['Eight lessons', 'Two mock auditions', 'Four video reviews', 'A repertoire plan', 'Recording day coaching'],
  },
]

const EMAIL = 'chihiro@chihiroshibayama.com'

const emailChecklist = [
  "Student's name and age",
  'In person (Longmont, CO) or online',
  "Which option you're interested in, or \"not sure yet\"",
  "Which schools or programs you're auditioning for, and their deadlines",
  'Links to your videos, if you have them (YouTube, Google Drive, Dropbox, etc.)',
  'How you heard about me',
]

export default function AuditionPrep() {
  return (
    <div className="pt-[80px]">

      {/* HERO */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(90vh-80px)] border-b border-light-gray">
        <div className="flex flex-col justify-center px-6 lg:px-16 py-16 lg:py-24 md:border-r border-light-gray order-2 md:order-1">
          <p className="eyebrow mb-5">Audition prep</p>
          <h1 className="font-serif font-normal leading-tight text-black mb-8" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)' }}>
            Preparing for Juilliard, Interlochen, or a <em className="text-accent">top conservatory?</em>
          </h1>
          <p className="text-[17px] text-text-gray font-light leading-relaxed max-w-xl mb-10">
            I attended Interlochen Arts Academy and earned my bachelor's and master's degrees at Juilliard. Now I work with a small number of serious students on repertoire, recordings, mock auditions, and the nerves that come with all of it. I'll give you an honest assessment and a clear plan to bring your best playing to the audition.
          </p>
          <a href="#request" className="btn-primary self-start">Request an Audition Readiness Review</a>
        </div>

        <div className="relative bg-off-white overflow-hidden min-h-[85vw] md:min-h-0 order-1 md:order-2">
          <img
            src="/images/timpani-rehearsal.webp"
            alt="Timpani and mallets set up on an orchestra stage"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
      </section>

      {/* OFFERS */}
      <section className="px-6 lg:px-16 py-16 lg:py-24 border-b border-light-gray">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow mb-5">Ways to work together</p>
          <h2 className="section-title mb-6">
            Start with an <em>Audition Readiness Review.</em>
          </h2>
          <p className="text-[17px] text-text-gray font-light leading-relaxed max-w-2xl mb-14">
            Send me your videos, and I'll tell you what is strong, what needs work, and what to do next.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-light-gray border border-light-gray">
            {offers.map(({ tag, name, items }, i) => {
              const dark = i === 0
              return (
                <div key={name} className={`${dark ? 'bg-black' : 'bg-white'} p-8 flex flex-col`}>
                  <span className={`text-[12px] tracking-[0.2em] uppercase block mb-4 ${dark ? 'text-white/80' : 'text-text-gray'}`}>{tag}</span>
                  <h3 className={`font-serif text-[22px] mb-6 ${dark ? 'text-white' : 'text-black'}`}>{name}</h3>
                  <ul className="list-none flex flex-col">
                    {items.map(item => (
                      <li key={item} className={`flex items-start gap-2.5 py-2 border-b text-[15px] ${dark ? 'border-white/10 text-white/90' : 'border-light-gray text-black'}`}>
                        <span className={`w-1 h-1 rounded-full flex-shrink-0 mt-[9px] ${dark ? 'bg-white/50' : 'bg-accent'}`} />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="border border-t-0 border-light-gray bg-off-white px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-[16px] text-black">
              Not sure which fits? Start with the review, and we'll decide together.<br />
              <a href="#request" className="text-accent-dark no-underline border-b border-accent/30 hover:border-accent transition-colors">Email me for current rates.</a>
            </p>
            <a href="#request" className="btn-primary text-center">Request an Audition Readiness Review</a>
          </div>
          <p className="text-[15px] text-text-gray italic mt-4 max-w-3xl">
            This program is independent and is not affiliated with The Juilliard School or Interlochen Center for the Arts. No program can guarantee admission.
          </p>
        </div>
      </section>

      {/* AUDITION VIDEO LAB WAITLIST */}
      <section className="bg-black px-6 lg:px-16 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-white/70 mb-5">
              <span className="block w-8 h-px bg-white/50 flex-shrink-0" />
              Online group · Waitlist
            </p>
            <h2 className="font-serif font-normal text-white leading-tight mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Audition <em className="text-accent">Video Lab.</em>
            </h2>
            <p className="text-[17px] text-white/85 font-light leading-relaxed max-w-xl">
              A six-week online group program with live sessions, replays, and personal video feedback. Limited to 8 students.
            </p>
          </div>
          <div className="lg:pl-10">
            <p className="text-[16px] text-white/85 font-light leading-relaxed mb-6">
              To join the waitlist, email me with the student's name and age.
            </p>
            <a
              href={`mailto:${EMAIL}?subject=Audition%20Video%20Lab%20waitlist`}
              className="inline-block text-[13px] tracking-[0.18em] uppercase border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all no-underline"
            >
              Join the waitlist →
            </a>
            <p className="text-[14px] text-white/70 font-light mt-4">{EMAIL}</p>
          </div>
        </div>
      </section>

      {/* JAPANESE */}
      <section lang="ja" className="bg-off-white px-6 lg:px-16 py-16 lg:py-24 border-b border-light-gray">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-5">日本語でのサポート</p>
          <p className="text-[17px] text-black font-normal leading-loose mb-6">
            海外の音楽学校を目指す打楽器奏者の皆さんへ。私は16歳で単身渡米し、インターロッケン芸術高校を経て、ジュリアード音楽院で学士号と修士号を取得しました。曲選び、録画審査の準備、模擬オーディション、英語での自己紹介動画まで、日本語でサポートします。時差があっても、録画へのフィードバックで受講できます。
          </p>
          <p className="text-[15px] text-text-gray font-normal leading-relaxed mb-6">
            ※本プログラムは各学校とは提携しておらず、合格を保証するものではありません。
          </p>
          <Link to="/ja" className="text-link">日本語ページはこちら →</Link>
        </div>
      </section>

      {/* REQUEST BY EMAIL */}
      <section id="request" className="px-6 lg:px-16 py-16 lg:py-24 scroll-mt-[80px]">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-5">Get started</p>
          <h2 className="section-title mb-4">Request an <em>Audition Readiness Review.</em></h2>
          <p className="text-[17px] text-text-gray font-light leading-relaxed mb-8">
            Email me at <a href={`mailto:${EMAIL}?subject=Audition%20Readiness%20Review`} className="text-accent-dark no-underline border-b border-accent/30 hover:border-accent transition-colors">{EMAIL}</a> and include:
          </p>
          <ul className="list-none flex flex-col border-t border-light-gray mb-10">
            {emailChecklist.map(item => (
              <li key={item} className="flex items-start gap-2.5 py-3 border-b border-light-gray text-[16px] text-black">
                <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-[10px]" />{item}
              </li>
            ))}
          </ul>
          <p className="text-[15px] text-text-gray font-light leading-relaxed">
            I typically respond within 1–2 business days.
          </p>
        </div>
      </section>
    </div>
  )
}
