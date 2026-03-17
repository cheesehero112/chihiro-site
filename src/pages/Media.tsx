import { useState } from 'react'
import { Play, ExternalLink } from 'lucide-react'
import { videos, pressItems, recordings } from '../data'

type Tab = 'watch' | 'read' | 'listen'

export default function Media() {
  const [tab, setTab] = useState<Tab>('watch')

  return (
    <div className="pt-[72px]">

      {/* Header */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] border-b border-light-gray">
        <div className="relative bg-off-white overflow-hidden min-h-[85vw] lg:min-h-0">
          <img src="/images/carnegie-chihiro.jpg" alt="Chihiro Shibayama at Carnegie Hall" className="w-full h-full object-cover object-top absolute inset-0" />
        </div>
        <div className="flex flex-col justify-center px-6 lg:px-16 py-16 lg:py-24 border-l border-light-gray">
          <div className="flex items-center gap-3 mb-5">
            <img src="/images/shibayama_logo.svg" alt="Shibayama Percussion Studio" className="w-8 h-8 opacity-80 flex-shrink-0" />
            <p className="text-xs tracking-[0.25em] uppercase text-black/70 font-medium">Watch · Read · Listen</p>
          </div>
          <h1 className="font-serif font-normal text-black leading-tight" style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)' }}>
            Media & <em className="text-accent">Press.</em>
          </h1>
        </div>
      </section>

      {/* Tab nav */}
      <div className="sticky top-[72px] z-40 bg-white/97 backdrop-blur-sm border-b border-light-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex gap-0">
          {(['watch', 'read', 'listen'] as Tab[]).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`text-[12px] tracking-[0.15em] uppercase px-8 py-5 border-b-2 transition-all bg-transparent cursor-pointer font-sans ${
                tab === t
                  ? 'text-black border-accent'
                  : 'text-mid-gray border-transparent hover:text-black'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24">

        {/* WATCH */}
        {tab === 'watch' && (
          <>
            <p className="text-[15px] text-text-gray font-light max-w-xl leading-relaxed mb-14">
              Performances, compositions, and behind-the-scenes footage from Chihiro's career on stage and in the studio.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-light-gray border border-light-gray">
              {videos.map(({ tag, title, url, youtubeId, localThumb }) => (
                <a
                  key={title}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white no-underline group block hover:bg-off-white transition-colors"
                >
                  <div className="aspect-video bg-[#1a1008] relative flex items-center justify-center overflow-hidden">
                    {youtubeId ? (
                      <img
                        src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                    ) : localThumb ? (
                      <img
                        src={`/images/${localThumb}`}
                        alt={title}
                        className="w-full h-full object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                        <Play size={16} className="text-black ml-0.5" fill="black" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 lg:p-6">
                    <span className="text-2xs tracking-[0.15em] uppercase text-accent block mb-2">{tag}</span>
                    <p className="font-serif text-[16px] text-black leading-snug">{title}</p>
                  </div>
                </a>
              ))}
              {/* YouTube channel card */}
              <a
                href="https://www.youtube.com/channel/UCdYfi421onANf2QRsDuBdHQ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-off-white no-underline group block hover:bg-light-gray transition-colors"
              >
                <div className="aspect-video flex flex-col items-center justify-center gap-3">
                  <p className="font-serif italic text-[18px] text-mid-gray">View all videos</p>
                  <span className="text-2xs tracking-[0.15em] uppercase text-accent">YouTube Channel →</span>
                </div>
                <div className="p-5 lg:p-6">
                  <span className="text-2xs tracking-[0.15em] uppercase text-accent block mb-2">YouTube</span>
                  <p className="font-serif text-[16px] text-black leading-snug">More performances, lessons & original content</p>
                </div>
              </a>
            </div>
          </>
        )}

        {/* READ */}
        {tab === 'read' && (
          <>
            <p className="text-[15px] text-text-gray font-light max-w-xl leading-relaxed mb-14">
              Press coverage, feature articles, and podcast appearances.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-light-gray border border-light-gray">
              {pressItems.map(({ type, title, pub, image, desc, url }) => (
                <a
                  key={title}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white no-underline flex flex-col hover:bg-off-white transition-colors group"
                >
                  {image && (
                    <div className="aspect-video overflow-hidden bg-off-white">
                      <img src={`/images/${image}`} alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = 'none' }} />
                    </div>
                  )}
                  <div className="p-8 lg:p-10 flex flex-col gap-3 flex-1">
                    <span className="text-2xs tracking-[0.2em] uppercase text-accent">{type}</span>
                    <h2 className="font-serif text-[22px] text-black leading-snug">{title}</h2>
                    <p className="text-[12px] tracking-[0.08em] uppercase text-mid-gray">{pub}</p>
                    <p className="text-[14px] text-text-gray font-light leading-relaxed flex-1">{desc}</p>
                    <span className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-accent mt-2">
                      Read article <ExternalLink size={12} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}

        {/* LISTEN */}
        {tab === 'listen' && (
          <>
            <p className="text-[15px] text-text-gray font-light max-w-xl leading-relaxed mb-10">
              Recordings from Chihiro's work as a chamber musician, ensemble member, and collaborator.
            </p>
            <div className="border-l-[3px] border-accent px-6 py-5 bg-off-white mb-14">
              <p className="font-serif text-[18px] text-black mb-2">Isabel — Zachary Joseph © 2017, Element5</p>
              <p className="text-[13px] text-text-gray font-light leading-relaxed">
                Jia Xu, Violin · Brian Sanders, Cello · Jen Volmer, Viola · Chihiro Shibayama, Marimba · Zachary Joseph, DJ & Producer
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-light-gray border border-light-gray">
              {recordings.map(({ year, title, ensemble, url }) => (
                <a
                  key={title}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-8 lg:p-10 no-underline flex flex-col gap-3 hover:bg-off-white transition-colors group"
                >
                  <span className="text-2xs tracking-[0.15em] uppercase text-mid-gray">{year}</span>
                  <h3 className="font-serif text-[18px] text-black leading-snug">{title}</h3>
                  <p className="text-[13px] text-text-gray font-light flex-1">{ensemble}</p>
                  <span className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-accent mt-2">
                    View recording <ExternalLink size={12} />
                  </span>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
