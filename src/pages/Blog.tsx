import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'

export default function Blog() {
  return (
    <div className="pt-[72px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24 border-b border-light-gray">
        <p className="eyebrow mb-5">Percussion & music education</p>
        <h1 className="font-serif font-normal text-black leading-tight" style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)' }}>
          Notes from<br /><em>the studio.</em>
        </h1>
      </div>
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
