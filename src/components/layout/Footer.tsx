import { Link } from 'react-router-dom'

const pages = [
  { to: '/bio', label: 'Biography' },
  { to: '/teaching', label: 'Teaching & Lessons' },
  { to: '/blog', label: 'Blog' },
  { to: '/media', label: 'Media' },
]

const social = [
  { href: 'https://www.youtube.com/channel/UCdYfi421onANf2QRsDuBdHQ', label: 'YouTube' },
  { href: 'https://www.instagram.com/chihiroplayspercussion/', label: 'Instagram' },
  { href: 'https://www.facebook.com/ChihiroPercussionist', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-10 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10 mb-10">

          {/* Brand */}
          <div>
            <Link to="/" className="no-underline block mb-3">
              <img src="/images/shibayama_logo_lockup_white.svg" alt="Chihiro Shibayama" className="h-20 w-auto" />
            </Link>
          </div>

          {/* Pages */}
          <div>
            <p className="text-2xs tracking-[0.2em] uppercase text-white/30 mb-5">Pages</p>
            <ul className="list-none flex flex-col gap-3">
              {pages.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-[13px] text-white/55 no-underline hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-2xs tracking-[0.2em] uppercase text-white/30 mb-5">Connect</p>
            <ul className="list-none flex flex-col gap-3">
              <li>
                <a href="mailto:Chihiro@chihiroshibayama.com" className="text-[13px] text-white/55 no-underline hover:text-white transition-colors">
                  Chihiro@chihiroshibayama.com
                </a>
              </li>
              {social.map(({ href, label }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/55 no-underline hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/20">
            © {new Date().getFullYear()} Chihiro Shibayama. All rights reserved.
          </p>
          <div className="flex gap-6">
            {social.map(({ href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="text-[11px] tracking-[0.1em] uppercase text-white/30 no-underline hover:text-white transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
