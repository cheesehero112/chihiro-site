import { blogPosts } from './data/blog'

export const SITE_URL = 'https://www.chihiroshibayama.com'
const DEFAULT_IMAGE = '/images/headshot.jpg'

export interface PageMeta {
  title: string
  description: string
  image?: string
  lang?: string
  jsonLd?: object
}

const social = [
  'https://www.youtube.com/channel/UCdYfi421onANf2QRsDuBdHQ',
  'https://www.instagram.com/chihiroplayspercussion/',
  'https://www.facebook.com/ChihiroPercussionist',
]

const person = {
  '@type': 'Person',
  name: 'Chihiro Shibayama',
  jobTitle: 'Percussionist and educator',
  url: SITE_URL,
  image: SITE_URL + DEFAULT_IMAGE,
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'The Juilliard School' },
    { '@type': 'School', name: 'Interlochen Arts Academy' },
  ],
  memberOf: { '@type': 'PerformingGroup', name: 'Longmont Symphony Orchestra' },
  knowsLanguage: ['en', 'ja'],
  sameAs: social,
}

const studio = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Shibayama Percussion Studio',
  description: 'Percussion lessons in Longmont and online',
  url: SITE_URL + '/teaching',
  image: SITE_URL + DEFAULT_IMAGE,
  email: 'chihiro@chihiroshibayama.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Longmont',
    addressRegion: 'CO',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Longmont, Colorado' },
    { '@type': 'State', name: 'Colorado' },
  ],
  founder: person,
  sameAs: social,
}

const pages: Record<string, PageMeta> = {
  '/': {
    title: 'Chihiro Shibayama — Percussionist & Educator in Longmont, CO',
    description: 'Juilliard-trained percussionist and educator based in Longmont, Colorado. Percussion lessons in Longmont and online, audition prep, and career coaching for musicians.',
    jsonLd: { '@context': 'https://schema.org', ...person },
  },
  '/bio': {
    title: 'Biography | Chihiro Shibayama, Percussionist',
    description: 'Juilliard-trained percussionist based in Longmont, Colorado. Member of the Longmont Symphony Orchestra and frequent substitute with the Colorado Symphony, with credits including Broadway, the Metropolitan Opera, and Carnegie Hall.',
  },
  '/teaching': {
    title: 'Percussion Lessons in Longmont and Online | Shibayama Percussion Studio',
    description: 'Learn snare, mallets, timpani, and drumset from a Juilliard-trained member of the Longmont Symphony. Daytime lessons in Longmont, CO, and online lessons nationwide and internationally.',
    jsonLd: studio,
  },
  '/audition-prep': {
    title: 'Percussion Audition Prep for Conservatories & Arts Schools | Chihiro Shibayama',
    description: 'Audition preparation for Juilliard, Interlochen, and top conservatories: repertoire, recordings, mock auditions, and an honest Audition Readiness Review. In Longmont, CO, or online.',
    image: '/images/timpani-rehearsal.webp',
  },
  '/ja': {
    title: '日本語での打楽器オンラインレッスン | Shibayama Percussion Studio',
    description: 'ジュリアード音楽院で学士号と修士号を取得した打楽器奏者が、日本語でオンラインレッスンを行います。小太鼓、マリンバ、ティンパニ、ドラムセット。初心者から音大受験まで対応します。',
    image: '/images/teaching-portrait-web.jpg',
    lang: 'ja',
  },
  '/coaching': {
    title: 'Career Coaching for Musicians | Chihiro Shibayama',
    description: 'The 5 Pillars Career Check is a free, 10-minute assessment for freelance musicians. Find out where your career is strong, where it\'s stuck, and what to do next.',
    image: '/images/coaching-portrait.jpg',
  },
  '/blog': {
    title: 'Blog | Chihiro Shibayama',
    description: 'Practice tips, reading challenges, and career advice for percussionists and freelance musicians.',
  },
  '/media': {
    title: 'Media | Chihiro Shibayama',
    description: 'Videos, recordings, and press featuring percussionist Chihiro Shibayama.',
  },
  '/contact': {
    title: 'Contact | Chihiro Shibayama',
    description: 'Get in touch about percussion lessons in Longmont and online, performances, or press.',
  },
}

export const routes = [...Object.keys(pages), ...blogPosts.map(p => `/blog/${p.slug}`)]

export function getMeta(pathname: string): PageMeta {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
  if (pages[path]) return pages[path]
  const post = blogPosts.find(p => `/blog/${p.slug}` === path)
  if (post) {
    return {
      title: `${post.title} | Chihiro Shibayama`,
      description: post.excerpt,
      image: post.image ? `/images/${post.image}` : undefined,
    }
  }
  return pages['/']
}

// Netlify serves pages without a trailing slash (/teaching/ redirects to /teaching)
export const canonicalUrl = (pathname: string) => SITE_URL + (pathname === '/' ? '/' : pathname.replace(/\/$/, ''))

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Tags for the static HTML generated at build time (scripts/prerender.mjs)
export function headTags(pathname: string): string {
  const meta = getMeta(pathname)
  const url = canonicalUrl(pathname)
  const image = SITE_URL + (meta.image ?? DEFAULT_IMAGE)
  const tags = [
    `<title>${escape(meta.title)}</title>`,
    `<meta name="description" content="${escape(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Chihiro Shibayama" />`,
    `<meta property="og:title" content="${escape(meta.title)}" />`,
    `<meta property="og:description" content="${escape(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ]
  if (meta.jsonLd) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(meta.jsonLd).replace(/</g, '\\u003c')}</script>`)
  }
  return tags.join('\n    ')
}
