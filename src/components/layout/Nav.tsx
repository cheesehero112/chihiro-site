import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/bio', label: 'Biography' },
  { to: '/teaching', label: 'Teaching' },
  { to: '/blog', label: 'Blog' },
  { to: '/media', label: 'Media' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-shadow ${scrolled ? 'shadow-sm' : ''}`}>
      <nav className="bg-white/90 backdrop-blur-sm border-b border-accent">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link to="/" className="no-underline">
            <img src="/images/shibayama_logo_lockup.svg" alt="Chihiro Shibayama" className="h-14 w-auto" />
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-9 list-none">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `text-[11px] font-medium tracking-[0.12em] uppercase no-underline transition-colors ${
                      isActive ? 'text-black border-b border-black pb-px' : 'text-black hover:text-mid-gray'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            to="/teaching"
            className="hidden lg:inline-block text-[11px] tracking-[0.12em] uppercase border border-black px-5 py-2 transition-all hover:bg-black hover:text-white no-underline text-black"
          >
            Private Lessons
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-black"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 flex flex-col px-6 pt-8 pb-12">
          <ul className="list-none flex flex-col gap-0 border-t border-light-gray">
            {links.map(({ to, label }) => (
              <li key={to} className="border-b border-light-gray">
                <NavLink
                  to={to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-5 text-[13px] tracking-[0.15em] uppercase no-underline ${
                      isActive ? 'text-accent' : 'text-black'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/teaching"
            onClick={() => setOpen(false)}
            className="mt-8 btn-primary text-center"
          >
            Private Lessons
          </Link>
        </div>
      )}
    </header>
  )
}
