import { useParams, Link, Navigate } from 'react-router-dom'
import { blogPosts } from '../data/blog'

// Render custom content format with [image:...] and [youtube:...] tokens
function renderContent(content: string) {
  const parts = content.split(/(\[image:[^\[]+\]|\[youtube:[a-zA-Z0-9_-]+\])/g)

  return parts.map((part, i) => {
    const ytMatch = part.match(/^\[youtube:([a-zA-Z0-9_-]+)\]$/)
    if (ytMatch) {
      return (
        <div key={i} className="my-8 aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${ytMatch[1]}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )
    }

    const imgMatch = part.match(/^\[image:([^|\]]+)\|?([^\]]*)\]$/)
    if (imgMatch) {
      const filename = imgMatch[1].trim()
      const caption = imgMatch[2].trim()
      if (!filename) return null
      return (
        <figure key={i} className="my-8">
          <img
            src={`/images/${filename}`}
            alt={caption}
            className="w-full h-auto"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
          {caption && (
            <figcaption className="text-[12px] text-mid-gray text-center mt-2 italic">{caption}</figcaption>
          )}
        </figure>
      )
    }

    if (!part.trim()) return null

    return (
      <div key={i}>
        {part.split('\n').map((line, j) => {
          if (!line.trim()) return <div key={j} className="h-3" />
          if (line.startsWith('# ')) return <h1 key={j} className="font-serif text-[30px] text-black font-normal mt-10 mb-4 leading-tight">{renderInline(line.slice(2))}</h1>
          if (line.startsWith('## ')) return <h2 key={j} className="font-serif text-[24px] text-black font-normal mt-10 mb-3 leading-tight">{renderInline(line.slice(3))}</h2>
          if (line.startsWith('### ')) return <h3 key={j} className="font-serif text-[20px] text-black font-normal mt-8 mb-3">{renderInline(line.slice(4))}</h3>
          if (line.startsWith('- ')) return (
            <div key={j} className="flex items-baseline gap-3 mb-2">
              <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2.5" />
              <p className="text-[15px] text-text-gray font-light leading-relaxed">{renderInline(line.slice(2))}</p>
            </div>
          )
          return <p key={j} className="text-[16px] text-text-gray font-light leading-[1.9] mb-4">{renderInline(line)}</p>
        })}
      </div>
    )
  })
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    const bold = part.match(/^\*\*(.+)\*\*$/)
    if (bold) return <strong key={i} className="text-black font-normal">{bold[1]}</strong>
    const italic = part.match(/^\*(.+)\*$/)
    if (italic) return <em key={i} className="italic">{italic[1]}</em>
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) return <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer" className="text-accent no-underline border-b border-accent/30 hover:border-accent transition-colors">{link[1]}</a>
    return part
  })
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find(p => p.slug === slug)
  const postIndex = blogPosts.findIndex(p => p.slug === slug)
  const prev = blogPosts[postIndex + 1]
  const next = blogPosts[postIndex - 1]

  if (!post) return <Navigate to="/blog" replace />

  return (
    <div className="pt-[80px]">
      <div className="max-w-[760px] mx-auto px-6 lg:px-0 py-16 lg:py-24">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-5 mb-8">
            <Link to="/blog" className="text-[11px] tracking-[0.15em] uppercase text-accent no-underline hover:opacity-70 transition-opacity">
              ← All posts
            </Link>
            <span className="text-[11px] tracking-[0.15em] uppercase text-mid-gray">{post.date}</span>
          </div>
          <h1 className="font-serif font-normal text-black leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
            {post.title}
          </h1>
        </div>

        {/* Content */}
        <div>
          {renderContent(post.content)}
        </div>

        {/* Post nav */}
        <div className="mt-16 pt-8 border-t border-light-gray flex justify-between items-start gap-8">
          <div>
            {prev && (
              <Link to={`/blog/${prev.slug}`} className="no-underline group">
                <span className="text-2xs tracking-[0.15em] uppercase text-mid-gray block mb-2">← Previous</span>
                <span className="font-serif text-[16px] text-black group-hover:text-accent transition-colors">{prev.title}</span>
              </Link>
            )}
          </div>
          <div className="text-right">
            {next && (
              <Link to={`/blog/${next.slug}`} className="no-underline group">
                <span className="text-2xs tracking-[0.15em] uppercase text-mid-gray block mb-2">Next →</span>
                <span className="font-serif text-[16px] text-black group-hover:text-accent transition-colors">{next.title}</span>
              </Link>
            )}
          </div>
        </div>

        <div className="mt-10">
          <Link to="/blog" className="text-link">← Back to all posts</Link>
        </div>
      </div>
    </div>
  )
}
