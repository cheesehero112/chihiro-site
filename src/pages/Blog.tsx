import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { blogPosts } from '../data/blog'

function KitSignupForm() {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const script = document.createElement('script')
    script.src = 'https://chihiroshibayama.kit.com/607d7131a2/index.js'
    script.setAttribute('data-uid', '607d7131a2')
    script.async = true
    container.appendChild(script)
    return () => { container.innerHTML = '' }
  }, [])
  return <div ref={containerRef} />
}

export default function Blog() {
  return (
    <div className="pt-[80px]">
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

      {/* Newsletter signup */}
      <div className="border-b border-light-gray bg-off-white px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-xl mx-auto text-center">
          <p className="eyebrow mb-5">Stay in the loop</p>
          <h2 className="section-title mb-5">Tips for working<br /><em>musicians.</em></h2>
          <p className="text-[17px] text-text-gray leading-relaxed mb-10">
            Sign up to receive practical tips on building a life in music — delivered straight to your inbox.
          </p>
          <KitSignupForm />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-light-gray border border-light-gray">
          {blogPosts.map(({ slug, title, date, excerpt, image }) => (
            <Link
              key={slug}
              to={`/blog/${slug}`}
              className="bg-white no-underline group flex flex-col"
            >
              <div className="aspect-square overflow-hidden bg-off-white">
                {image ? (
                  <img
                    src={`/images/${image}`}
                    alt={title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full bg-light-gray" />
                )}
              </div>
              <div className="p-7 lg:p-8 flex flex-col flex-1">
                <span className="text-[12px] tracking-[0.15em] uppercase text-mid-gray block mb-3">{date}</span>
                <h2 className="font-serif text-[20px] text-black leading-snug mb-3 group-hover:text-accent transition-colors">{title}</h2>
                <p className="text-[15px] text-text-gray leading-relaxed mb-5 flex-1">{excerpt}</p>
                <span className="text-[13px] tracking-[0.15em] uppercase text-accent">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter signup bottom */}
      <div className="border-t border-light-gray bg-black px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-xl mx-auto text-center">
          <p className="eyebrow mb-5 text-white/60">Don't miss a post</p>
          <h2 className="section-title mb-5 text-white">Join the list and get<br /><em className="text-accent">notified.</em></h2>
          <p className="text-[17px] text-white/75 leading-relaxed mb-10">
            New posts go straight to your inbox — no social media algorithm required.
          </p>
          <KitSignupForm />
        </div>
      </div>
    </div>
  )
}
