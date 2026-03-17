import { Link } from 'react-router-dom'

const HEADSHOT = '/images/chihiro-cym.jpg'

export default function Bio() {
  return (
    <div className="pt-[72px]">

      {/* HERO */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
        <div className="relative bg-off-white overflow-hidden lg:min-h-0">
          <img src={HEADSHOT} alt="Chihiro Shibayama" className="w-full h-auto block lg:absolute lg:inset-0 lg:h-full lg:object-cover lg:object-top" />
        </div>
        <div className="flex flex-col justify-center px-6 lg:px-16 py-16 lg:py-24 border-l border-light-gray">
          <div className="flex items-center gap-3 mb-5">
            <img src="/images/shibayama_logo.svg" alt="Shibayama Percussion Studio" className="w-8 h-8 opacity-80 flex-shrink-0" />
            <p className="text-xs tracking-[0.25em] uppercase text-black/70 font-medium">Biography</p>
          </div>
          <h1 className="font-serif font-normal text-black mb-8 leading-tight" style={{ fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)' }}>
            Chihiro<br /><em className="text-accent">Shibayama.</em>
          </h1>
          <p className="text-[15px] text-text-gray font-light leading-relaxed mb-10">
            Native of Yokohama, Japan. Juilliard-trained percussionist. Broadway veteran. New music advocate. Educator. Now based in Longmont, Colorado.
          </p>
          <div className="border-l-[3px] border-accent px-6 py-5 bg-off-white mb-10">
            <p className="font-serif italic text-[18px] text-black leading-snug mb-2">"…impressive soloist…"</p>
            <p className="text-2xs tracking-[0.2em] uppercase text-mid-gray">— The New York Times</p>
          </div>
          <div className="flex flex-col gap-2.5">
            {[
              'B.M. & M.M., The Juilliard School',
              'Interlochen Arts Academy, Performance Award 2003',
              'Zildjian Scholarship 2004–2007',
              'Irene Diamond Graduate Fellowship, Juilliard 2007–09',
              'Pearl Adams Concert Percussion & Dragonfly Percussion endorser',
            ].map(cred => (
              <div key={cred} className="flex items-center gap-3 text-[13px] text-text-gray font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />{cred}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN BIO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
        <div className="lg:col-span-2">
          <p className="font-serif italic text-[20px] text-black leading-relaxed mb-7">
            Chihiro Shibayama is a versatile freelance percussionist and educator whose career spans Broadway, opera, symphony, new music, and television.
          </p>
          <p className="text-[15px] text-text-gray font-light leading-relaxed mb-6">
            Ms. Shibayama was a percussionist for the Broadway run of <em>Miss Saigon</em> (March 2017 – January 2018), and made her Broadway debut as one of three on-stage musicians for <em>The Cherry Orchard</em> starring Diane Lane, produced by The Roundabout Theatre Company. She has performed for the Radio City Christmas Spectacular, NBC's <em>Good Morning America</em> with John Legend and Common, the Daytime Emmy Awards, and Broadway productions including <em>The Addams Family</em>, <em>Anything Goes</em>, <em>Cinderella</em>, and <em>West Side Story</em>.
          </p>

          <h2 className="font-serif text-[26px] text-black mt-12 mb-5 pt-12 border-t border-light-gray">
            Opera & <em>Orchestra</em>
          </h2>
          <p className="text-[15px] text-text-gray font-light leading-relaxed mb-6">
            Among her most notable performances, Ms. Shibayama was one of three on-stage percussion soloists in the U.S. premiere of Tan Dun's opera <em>TEA – A Mirror of Soul</em> at The Santa Fe Opera (2007), the East Coast premiere at the Opera Company of Philadelphia (2009), and the Canadian premiere at the Vancouver Opera (2013). She has performed with The Metropolitan Opera, Kansas City Symphony, San Diego Symphony, New Jersey Symphony, and many others.
          </p>

          <h2 className="font-serif text-[26px] text-black mt-12 mb-5 pt-12 border-t border-light-gray">
            New Music & <em>Chamber</em>
          </h2>
          <p className="text-[15px] text-text-gray font-light leading-relaxed mb-6">
            As a passionate new music advocate, Ms. Shibayama has performed and recorded with Alarm Will Sound, American Contemporary Music Ensemble (ACME), S.E.M. Ensemble, New Juilliard Ensemble, and AXIOM. She toured China in 2015 to perform at the Beijing Modern Music Festival, and has appeared on Amazon Prime's <em>Mozart in the Jungle</em>. She is co-founder of <a href="https://www.musefriends.org" target="_blank" rel="noopener noreferrer" className="text-accent no-underline border-b border-accent/30 hover:border-accent">Multicultural Sonic Evolution (MuSE)</a>.
          </p>

          <h2 className="font-serif text-[26px] text-black mt-12 mb-5 pt-12 border-t border-light-gray">
            Teaching & <em>Education</em>
          </h2>
          <p className="text-[15px] text-text-gray font-light leading-relaxed mb-6">
            Ms. Shibayama has dedicated more than 20 years to percussion education. She served as percussion faculty at Diller-Quaile School of Music for seven years and Third Street Music Settlement for two years. From 2007 to 2010 she was faculty at The Juilliard Summer Percussion Seminar. Her masterclass "My Way to Broadway" has been presented at multiple universities and the Juilliard Summer Percussion Masterclass Series.
          </p>
          <p className="text-[15px] text-text-gray font-light leading-relaxed mb-6">
            She is currently accepting private students in Longmont, Colorado and online worldwide.
          </p>
          <Link to="/teaching" className="text-link">View lesson options →</Link>

          <h2 className="font-serif text-[26px] text-black mt-12 mb-5 pt-12 border-t border-light-gray">
            Background & <em>Training</em>
          </h2>
          <p className="text-[15px] text-text-gray font-light leading-relaxed mb-4">
            A native of Yokohama City, Japan, Ms. Shibayama graduated from the Interlochen Arts Academy with a performance award in 2003. She earned her Bachelor of Music and Master of Music degrees from The Juilliard School in 2007 and 2009. Her mentors include Daniel Druckman, Greg Zuber, Markus Rhoten, Joe Pereira, Roland Kohloff, Keith Aleo, Mariko Okada, and John Alfieri.
          </p>
          <p className="text-[15px] text-text-gray font-light leading-relaxed">
            She proudly endorses Pearl Adams Concert Percussion and Dragonfly Percussion.
          </p>
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-0.5">
          {[
            { title: 'Broadway', items: ['Miss Saigon (2017–18)', 'The Cherry Orchard', 'Cinderella', 'West Side Story', 'The Addams Family', 'Anything Goes', 'Radio City Christmas Spectacular'] },
            { title: 'Orchestras & Opera', items: ['Metropolitan Opera', 'Kansas City Symphony', 'San Diego Symphony', 'Santa Fe Opera', 'New Jersey Symphony', 'Vancouver Opera', 'Malaysian Philharmonic'] },
          ].map(({ title, items }) => (
            <div key={title} className="bg-off-white p-8 first:border-t-[3px] first:border-accent">
              <p className="text-2xs tracking-[0.2em] uppercase text-mid-gray mb-5">{title}</p>
              <ul className="list-none flex flex-col gap-2.5">
                {items.map(item => (
                  <li key={item} className="flex items-baseline gap-2.5 text-[13px] text-text-gray font-light">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-1.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="bg-off-white p-8">
            <p className="text-2xs tracking-[0.2em] uppercase text-mid-gray mb-5">Awards</p>
            {[
              { name: 'Zildjian Scholarship', detail: '2004–2007' },
              { name: 'Irene Diamond Graduate Fellowship', detail: 'The Juilliard School, 2007–09' },
              { name: 'Weekes Memorial Scholarship', detail: 'Glassmen Drum & Bugle Corps, 2006' },
              { name: 'PAS High School Keyboard Competition', detail: 'Third prize, 2003' },
            ].map(({ name, detail }) => (
              <div key={name} className="py-3.5 border-b border-light-gray last:border-none">
                <p className="text-[13px] text-black font-normal mb-1">{name}</p>
                <p className="text-[12px] text-mid-gray font-light">{detail}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      {/* ENDORSEMENTS */}
      <div className="border-t border-b border-light-gray px-6 lg:px-16 py-10 bg-off-white flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-2xs tracking-[0.2em] uppercase text-mid-gray whitespace-nowrap">Proudly endorses</p>
        <div className="flex gap-8 flex-wrap">
          <span className="text-[13px] text-text-gray font-light">Pearl Adams Concert Percussion</span>
          <span className="text-[13px] text-text-gray font-light">Dragonfly Percussion</span>
        </div>
      </div>
    </div>
  )
}
