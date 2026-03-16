import { Link } from 'react-router-dom'
import { performances, credentials, whyReasons } from '../data'
import { blogPosts } from '../data/blog'
import { Stat } from '../components/ui'

const HEADSHOT = '/images/headshot.jpg'

export default function Home() {
  const recentPosts = blogPosts.slice(0, 3)
  const tickerItems = [...credentials, ...credentials]

  return (
    <div className="pt-[72px]">

      {/* HERO */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-72px)]">
        <div className="flex flex-col justify-center px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-light-gray order-2 lg:order-1">
          <p className="eyebrow mb-7">Percussionist · Educator · Longmont, CO</p>
          <h1 className="font-serif font-normal leading-[1.05] text-black mb-8" style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)' }}>
            Chihiro<br />Shiba<em className="text-accent">yama.</em>
          </h1>
          <p className="text-[15px] text-text-gray font-light leading-relaxed max-w-md mb-12">
            Juilliard-trained percussionist. Broadway veteran. Now offering world-class private percussion lessons in Longmont, Colorado — and online worldwide.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <Link to="/teaching" className="btn-primary">Study with me</Link>
            <Link to="/bio" className="text-[11px] tracking-[0.15em] uppercase text-mid-gray no-underline border-b border-light-gray pb-px">
              Read biography →
            </Link>
          </div>
          <div className="pt-12 border-t border-light-gray flex items-center gap-6">
            <span className="text-2xs tracking-[0.2em] uppercase text-mid-gray whitespace-nowrap">Press</span>
            <div>
              <p className="font-serif italic text-[15px] text-black">"…impressive soloist…"</p>
              <p className="text-2xs tracking-[0.15em] uppercase text-accent mt-1">— The New York Times</p>
            </div>
          </div>
        </div>

        <div className="relative bg-off-white overflow-hidden min-h-[50vw] lg:min-h-0 order-1 lg:order-2">
          <img
            src={HEADSHOT}
            alt="Chihiro Shibayama"
            className="w-full h-full object-cover object-top absolute inset-0"
          />
           <div className="absolute bottom-8 right-8 bg-black/80 px-5 py-4 border-l-[3px] border-accent max-w-[240px]">
              <p className="font-serif italic text-[13px] text-white leading-snug mb-1.5">
              "The goal isn't to play the notes. It's to understand why they matter."
              </p>
              <p className="text-2xs tracking-[0.15em] uppercase text-accent">On teaching</p>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="border-t border-b border-light-gray py-5 overflow-hidden" aria-hidden>
        <div className="flex gap-0 ticker-animate whitespace-nowrap">
          {tickerItems.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-10 text-[11px] tracking-[0.15em] uppercase text-text-gray flex-shrink-0">
              <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* IDENTITY */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-light-gray">
        <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-light-gray">
          <p className="eyebrow mb-5">About</p>
          <h2 className="section-title mb-7">
            A life devoted<br />to <em>percussion.</em>
          </h2>
          <p className="text-[15px] text-text-gray font-light leading-relaxed mb-5">
            Native of Yokohama, Japan, Chihiro Shibayama is a versatile freelance percussionist and educator now based in Longmont, Colorado. Her career spans Broadway, opera, symphony, new music, and television — shaped by over two decades of performing and teaching at the highest levels.
          </p>
          <p className="text-[15px] text-text-gray font-light leading-relaxed mb-8">
            She holds Bachelor's and Master's degrees from The Juilliard School and has spent over two decades performing and teaching at the highest levels of the profession.
          </p>
          <Link to="/bio" className="text-link">Full biography →</Link>
        </div>

        <div className="flex flex-col gap-px bg-light-gray">
          {[
            { num: '01', title: 'Performer', desc: 'Broadway, Metropolitan Opera, Carnegie Hall, symphonies, new music ensembles, and television across the US and internationally.' },
            { num: '02', title: 'Educator', desc: '20+ years of private teaching, faculty at Diller-Quaile and Third Street Music School, and Juilliard Summer Percussion Seminar.' },
            { num: '03', title: 'Arts Advocate', desc: 'Co-founder of MuSE (Multicultural Sonic Evolution), a non-profit creating multicultural environments through music and the arts.' },
          ].map(({ num, title, desc }) => (
            <div key={num} className="bg-white px-8 lg:px-10 py-8 flex items-start gap-6 hover:bg-off-white transition-colors">
              <span className="font-serif text-[13px] text-accent flex-shrink-0 mt-0.5">{num}</span>
              <div>
                <p className="font-serif text-[19px] text-black mb-2">{title}</p>
                <p className="text-[13px] text-text-gray font-light leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PERFORMANCES */}
      <section className="bg-black px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-14">
            <h2 className="font-serif font-normal text-white leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Selected<br /><em className="text-accent">performances.</em>
            </h2>
            <Link to="/media" className="text-[11px] tracking-[0.15em] uppercase text-white/40 no-underline border-b border-white/20 pb-px">
              View all media →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {performances.map(({ category, name, detail }) => (
              <div key={name} className="bg-black px-7 py-9 hover:bg-white/5 transition-colors">
                <span className="text-2xs tracking-[0.2em] uppercase text-accent block mb-4">{category}</span>
                <p className="font-serif text-[18px] text-white leading-snug mb-2.5">{name}</p>
                <p className="text-[12px] text-white/40 font-light leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHING CTA */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-light-gray">
        <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-light-gray">
          <div className="inline-flex items-center gap-2 bg-accent/8 border border-accent/20 text-accent text-2xs tracking-[0.2em] uppercase px-4 py-2 mb-7">
            Now accepting students
          </div>
          <h2 className="section-title mb-6">
            World-class lessons,<br />right here in<br /><em>Longmont.</em>
          </h2>
          <p className="text-[15px] text-text-gray font-light leading-relaxed max-w-md mb-10">
            Juilliard-trained percussion instruction for students of all ages — from first-time beginners to pre-college aspirants. In-person in Longmont, CO or online worldwide.
          </p>
          <div className="flex gap-8 py-8 border-t border-b border-light-gray mb-10">
            <Stat num="25+" label="Years performing" />
            <Stat num="20+" label="Years teaching" />
            <Stat num="$30" label="Trial lesson" />
          </div>
          <Link to="/teaching" className="btn-primary">View lesson options</Link>
        </div>

        <div className="px-6 lg:px-16 py-16 lg:py-24 bg-off-white">
          <p className="eyebrow mb-7">Why study with me</p>
          <ul className="list-none flex flex-col border-t border-light-gray">
            {whyReasons.slice(0, 4).map(({ num, title, text }) => (
              <li key={num} className="flex items-start gap-5 py-5 border-b border-light-gray">
                <span className="font-serif text-[13px] text-accent flex-shrink-0 mt-0.5">{num}</span>
                <p className="text-[14px] text-text-gray font-light leading-relaxed">
                  <strong className="text-black font-normal">{title}</strong> — {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RECENT POSTS */}
      <section className="px-6 lg:px-16 py-16 lg:py-24 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <p className="eyebrow mb-4">From the studio</p>
            <h2 className="section-title">Recent <em>writing.</em></h2>
          </div>
          <Link to="/blog" className="text-link">All posts →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-light-gray border border-light-gray">
          {recentPosts.map(({ slug, title, date, excerpt }) => (
            <Link key={slug} to={`/blog/${slug}`} className="bg-white p-8 lg:p-10 no-underline hover:bg-off-white transition-colors block">
              <span className="text-2xs tracking-[0.15em] uppercase text-mid-gray block mb-3">{date}</span>
              <h3 className="font-serif text-[19px] text-black leading-snug mb-3">{title}</h3>
              <p className="text-[13px] text-text-gray font-light leading-relaxed mb-5">{excerpt}</p>
              <span className="text-2xs tracking-[0.12em] uppercase text-accent">Read post →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
