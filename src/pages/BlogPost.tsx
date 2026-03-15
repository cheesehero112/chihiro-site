import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { blogPosts } from '../data/blog'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find(p => p.slug === slug)
  const postIndex = blogPosts.findIndex(p => p.slug === slug)
  const prev = blogPosts[postIndex + 1]
  const next = blogPosts[postIndex - 1]

  if (!post) return <Navigate to="/blog" replace />

  return (
    <div className="pt-[72px]">
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
        <div className="prose-custom">
          <ReactMarkdown
            components={{
              p: ({ children }) => (
                <p className="text-[16px] text-text-gray font-light leading-[1.9] mb-6">{children}</p>
              ),
              h2: ({ children }) => (
                <h2 className="font-serif text-[26px] text-black font-normal mt-12 mb-5">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="font-serif text-[22px] text-black font-normal mt-10 mb-4">{children}</h3>
              ),
              strong: ({ children }) => (
                <strong className="text-black font-normal">{children}</strong>
              ),
              em: ({ children }) => (
                <em className="italic">{children}</em>
              ),
              ul: ({ children }) => (
                <ul className="list-none my-6 flex flex-col gap-2">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside my-6 flex flex-col gap-2">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-[15px] text-text-gray font-light leading-relaxed flex items-baseline gap-3">
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
                  <span>{children}</span>
                </li>
              ),
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer"
                  className="text-accent no-underline border-b border-accent/30 hover:border-accent transition-colors">
                  {children}
                </a>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-[3px] border-accent pl-6 my-8 font-serif italic text-[19px] text-text-gray leading-relaxed">
                  {children}
                </blockquote>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
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
