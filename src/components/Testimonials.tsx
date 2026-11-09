import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Testimonial } from '../data/testimonials'

// Shows testimonials side by side; when there are more than fit on screen,
// it becomes a swipeable carousel with arrow buttons. No autoplay, so people
// can read at their own pace.
export default function Testimonials({ items }: { items: Testimonial[] }) {
  const track = useRef<HTMLUListElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  useEffect(() => {
    const el = track.current
    if (!el) return
    const update = () => {
      setCanPrev(el.scrollLeft > 4)
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
    }
    update()
    el.addEventListener('scroll', update, { passive: true })
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => { el.removeEventListener('scroll', update); ro.disconnect() }
  }, [items.length])

  const scrollByCard = (dir: 1 | -1) => {
    const el = track.current
    if (!el) return
    const card = el.querySelector('li')
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  const showArrows = canPrev || canNext

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Testimonials">
      <ul
        ref={track}
        tabIndex={showArrows ? 0 : -1}
        className="list-none m-0 p-0 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
      >
        {items.map(({ quote, name, title, photo }, i) => (
          <li
            key={name + i}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${items.length}`}
            className="snap-start shrink-0 w-[88%] md:w-[calc(50%-12px)] flex"
          >
            <figure className="bg-white border border-light-gray px-8 lg:px-10 py-10 flex flex-col m-0 w-full">
              <span aria-hidden="true" className="font-serif text-[64px] leading-none text-accent mb-2">“</span>
              <blockquote className="font-serif italic text-[20px] lg:text-[22px] text-black leading-snug mb-8 flex-1">
                {quote}
              </blockquote>
              <figcaption className="flex items-center gap-4">
                {photo && (
                  <img src={photo} alt="" width={56} height={56} loading="lazy" className="w-14 h-14 rounded-full object-cover flex-shrink-0" />
                )}
                <span className="flex flex-col">
                  <span className="text-[15px] font-medium text-black">{name}</span>
                  {title && <span className="text-[14px] text-mid-gray leading-snug">{title}</span>}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      {showArrows && (
        <div className="flex gap-3 mt-6">
          <button type="button" onClick={() => scrollByCard(-1)} disabled={!canPrev} aria-label="Previous testimonial"
            className="w-11 h-11 flex items-center justify-center border border-black/60 text-black transition-colors hover:bg-black hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black">
            <ChevronLeft size={20} />
          </button>
          <button type="button" onClick={() => scrollByCard(1)} disabled={!canNext} aria-label="Next testimonial"
            className="w-11 h-11 flex items-center justify-center border border-black/60 text-black transition-colors hover:bg-black hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black">
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  )
}
