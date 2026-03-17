import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'

export default function Blog() {
  return (
    <div className="pt-[72px]">
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[85vh] border-b border-light-gray">
        <div className="relative bg-off-white overflow-hidden min-h-[85vw] md:min-h-0">
          <img src="/images/chihiro-drumset.jpg" alt="Chihiro Shibayama at the drumset" className="w-full h-full object-cover object-top absolute inset-0" />
        </div>
        <div className="flex flex-col justify-center px-6 lg:px-16 py-16 lg:py-24 border-l border-light-gray">
          <div className="flex items-center gap-3 mb-5">
            <img src="/images/shibayama_logo.svg" alt="Shibayama Percussion Studio" className="w-8 h-8 opacity-80 flex-shrink-0" />
            <p className="text-xs tracking-[0.25em] uppercase text-black/70 font-medium">Percussion & music education</p>
          </div>
          <h1 className="font-serif font-normal text-black leading-tight" style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)' }}>
            Notes from<br /><em>the studio.</em>
          </h1>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pb-24">
        {blogPosts.map(({ slug, title, date, excerpt }) => (
          <Link
            key={slug}
            to={`/blog/${slug}`}
            className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] items-center gap-4 md:gap-10 py-8 border-b border-light-gray no-underline group"
          >
            <span className="text-[11px] tracking-[0.12em] uppercase text-mid-gray">{date}</span>
            <div>
              <h2 className="font-serif text-[21px] text-black leading-snug mb-1 group-hover:text-accent transition-colors">{title}</h2>
              <p className="text-[13px] text-text-gray font-light leading-relaxed hidden md:block">{excerpt}</p>
            </div>
            <span className="text-[11px] tracking-[0.15em] uppercase text-accent whitespace-nowrap hidden md:block">Read →</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
