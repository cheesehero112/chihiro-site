import { useForm, ValidationError } from '@formspree/react'
import { CheckCircle } from 'lucide-react'
import { whyReasons } from '../data'
import { Stat } from '../components/ui'

const FORMSPREE_ID = 'mreyadbw'

function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID)

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="text-accent mb-4" size={40} />
        <h3 className="font-serif text-2xl text-black mb-3">Message sent!</h3>
        <p className="text-[14px] text-text-gray font-light max-w-sm leading-relaxed">
          Thank you for reaching out. I'll be in touch within 1–2 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-2xs tracking-[0.2em] uppercase text-mid-gray">Your name</label>
          <input id="name" type="text" name="name" placeholder="Jane Smith" required
            className="bg-white border border-light-gray text-black px-4 py-3 text-[14px] font-light outline-none focus:border-black transition-colors" />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-2xs tracking-[0.2em] uppercase text-mid-gray">Email address</label>
          <input id="email" type="email" name="email" placeholder="jane@email.com" required
            className="bg-white border border-light-gray text-black px-4 py-3 text-[14px] font-light outline-none focus:border-black transition-colors" />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="age" className="text-2xs tracking-[0.2em] uppercase text-mid-gray">Student's age</label>
          <input id="age" type="text" name="age" placeholder="e.g. 12, or Adult"
            className="bg-white border border-light-gray text-black px-4 py-3 text-[14px] font-light outline-none focus:border-black transition-colors" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="level" className="text-2xs tracking-[0.2em] uppercase text-mid-gray">Experience level</label>
          <select id="level" name="level"
            className="bg-white border border-light-gray text-black px-4 py-3 text-[14px] font-light outline-none focus:border-black transition-colors appearance-none cursor-pointer">
            <option value="">Select...</option>
            <option>Complete beginner</option>
            <option>Some experience (1–2 years)</option>
            <option>Intermediate (3–5 years)</option>
            <option>Advanced / audition prep</option>
            <option>Adult learner</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-2xs tracking-[0.2em] uppercase text-mid-gray">Goals & questions</label>
        <textarea id="message" name="message" rows={4}
          placeholder="Tell me about your goals. Any upcoming auditions or performances?"
          className="bg-white border border-light-gray text-black px-4 py-3 text-[14px] font-light outline-none focus:border-black transition-colors resize-y" />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs" />
      </div>
      <button type="submit" disabled={state.submitting}
        className="bg-black text-white py-4 text-[11px] tracking-[0.2em] uppercase font-normal hover:opacity-75 transition-opacity disabled:opacity-50 cursor-pointer border-none">
        {state.submitting ? 'Sending…' : 'Send inquiry →'}
      </button>
      <p className="text-[12px] text-mid-gray leading-relaxed">
        I typically respond within 1–2 business days. Please include the student's age and experience level for lesson inquiries.
      </p>
    </form>
  )
}

export default function Teaching() {
  return (
    <div className="pt-[72px]">

      {/* HERO */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(90vh-72px)]">
        <div className="flex flex-col justify-center px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-light-gray order-2 lg:order-1">
          <p className="eyebrow mb-7">Longmont Percussion Academy</p>
          <h1 className="font-serif font-normal leading-[1.05] text-black mb-8" style={{ fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)' }}>
            World-class<br />percussion<br /><em className="text-accent">instruction.</em>
          </h1>
          <p className="text-[15px] text-text-gray font-light leading-relaxed max-w-md mb-12">
            Juilliard-trained, New York City–seasoned, and now right here in Longmont, CO. Private lessons for students of all ages — from first-time beginners to pre-college and beyond.
          </p>
          <div className="flex gap-8 pb-10 border-b border-light-gray mb-10">
            <Stat num="25+" label="Years performing" />
            <Stat num="20+" label="Years teaching" />
            <Stat num="Juilliard" label="B.M. & M.M." />
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">Book a trial lesson</a>
            <a href="#lessons" className="text-[11px] tracking-[0.15em] uppercase text-mid-gray no-underline border-b border-light-gray pb-px">
              View options ↓
            </a>
          </div>
        </div>

        <div className="relative bg-off-white overflow-hidden min-h-[50vw] lg:min-h-0 order-1 lg:order-2">
          <img
            src="https://images.squarespace-cdn.com/content/v1/54fe992ce4b081b61d82862f/caa7cb7d-e0f4-4d81-bb6d-8db1bfbec9d3/closesmileportrait2+2.jpg"
            alt="Chihiro Shibayama"
            className="w-full h-full object-cover object-top absolute inset-0"
          />
          <div className="absolute bottom-8 left-8 bg-white/93 px-5 py-4 border-l-[3px] border-accent max-w-[260px]">
            <p className="font-serif italic text-[15px] text-black leading-snug mb-1.5">"…impressive soloist…"</p>
            <p className="text-2xs tracking-[0.2em] uppercase text-mid-gray">— The New York Times</p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-off-white px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow mb-5">Why study with me</p>
          <h2 className="section-title mb-14">
            A caliber of teaching rarely found<br /><em>outside New York.</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-light-gray border border-light-gray">
            {whyReasons.map(({ num, title, text }) => (
              <div key={num} className="bg-off-white px-8 lg:px-10 py-10 relative">
                <span className="absolute top-6 right-6 font-serif text-[56px] text-black/5 leading-none">{num}</span>
                <h3 className="font-serif text-[20px] text-black mb-3">{title}</h3>
                <p className="text-[13.5px] text-text-gray font-light leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <div className="bg-black px-6 lg:px-16 py-16 text-center">
        <p className="font-serif italic text-white leading-snug max-w-3xl mx-auto mb-5" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)' }}>
          "The goal isn't to play the notes. It's to understand why they matter — and to feel that understanding in your body."
        </p>
        <p className="text-2xs tracking-[0.2em] uppercase text-white/30">— Chihiro Shibayama</p>
      </div>

      {/* LESSONS */}
      <section id="lessons" className="px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow mb-5">Lesson options</p>
          <h2 className="section-title mb-14">
            Find the right format<br /><em>for your student.</em>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-light-gray border border-light-gray mb-px">
            {/* Private */}
            <div className="bg-black p-10 lg:p-14">
              <span className="text-2xs tracking-[0.2em] uppercase text-white/40 block mb-5">Most popular</span>
              <h3 className="font-serif text-[28px] text-white mb-4">Private 1-on-1 Lessons</h3>
              <p className="text-[14px] text-white/55 font-light leading-relaxed mb-8">
                Individualized instruction built entirely around your student's goals — whether that's a first recital, All-State audition, or a lifelong love of rhythm.
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif text-[38px] text-white leading-none">$80</span>
                <span className="text-[12px] text-white/35">/ hr · semester package</span>
              </div>
              <p className="text-[12px] text-white/30 italic mb-8">$100/hr drop-in · $30 for a 30-min trial lesson</p>
              <ul className="list-none flex flex-col mb-10">
                {['Ages 6 to adult — all levels welcome', 'In-person (Longmont) or online worldwide', 'Semester packages include 2 makeup lessons', 'Snare, marimba, timpani & full battery', 'Audition & competition prep available'].map(item => (
                  <li key={item} className="flex items-center gap-3 py-2.5 border-b border-white/10 text-[13px] text-white/60 font-light">
                    <span className="w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-block bg-white text-black px-8 py-3.5 text-[11px] tracking-[0.18em] uppercase font-normal hover:opacity-85 transition-opacity no-underline">
                Inquire about availability
              </a>
            </div>

            {/* Semi-private */}
            <div className="bg-white p-10 lg:p-14">
              <span className="text-2xs tracking-[0.2em] uppercase text-accent block mb-5">Ages 6–11 · New</span>
              <h3 className="font-serif text-[28px] text-black mb-4">Kids' Semi-Private</h3>
              <p className="text-[14px] text-text-gray font-light leading-relaxed mb-8">
                Siblings or friends learn together in a fun, collaborative session — max 2 students. Includes rhythm games, ensemble work, and age-appropriate technique.
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif text-[38px] text-black leading-none">$40</span>
                <span className="text-[12px] text-mid-gray">/ hr per student · semester</span>
              </div>
              <p className="text-[12px] text-mid-gray italic mb-8">$50/hr drop-in · In-person Longmont only</p>
              <ul className="list-none flex flex-col mb-10">
                {['Max 2 students per session', 'Similar age & level recommended', 'Rhythm games & ensemble playing', 'Semester packages include 2 makeup lessons', '30 or 60-minute sessions available'].map(item => (
                  <li key={item} className="flex items-center gap-3 py-2.5 border-b border-light-gray text-[13px] text-text-gray font-light">
                    <span className="w-1 h-1 rounded-full bg-black/30 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-outline">Inquire about availability</a>
            </div>
          </div>

          {/* Trial banner */}
          <div className="bg-off-white border border-light-gray p-8 lg:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-[24px] text-black mb-2">Not sure where to start? Try a trial lesson.</h3>
              <p className="text-[14px] text-text-gray font-light">30-minute private trial lesson for $30 — in-person or online. Or book a free 15-minute consultation.</p>
            </div>
            <a href="#contact" className="btn-primary whitespace-nowrap">Book a trial</a>
          </div>
        </div>
      </section>

      {/* STUDENT OUTCOMES */}
      <section className="border-t border-light-gray px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow mb-5">Student outcomes</p>
          <h2 className="section-title mb-14">What students <em>achieve.</em></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { num: 'Pre-College', title: 'Juilliard acceptance', desc: 'Students have earned spots at Juilliard Pre-College — one of the most selective programs in the world for young musicians.' },
              { num: 'All-State', title: 'Audition success', desc: 'Targeted preparation for school ensembles, regional, and All-State auditions with a conservatory-level method.' },
              { num: 'Recitals', title: 'Performance confidence', desc: 'Students regularly present recitals and win school performance opportunities — because every lesson is designed for the stage.' },
            ].map(({ num, title, desc }) => (
              <div key={num}>
                <span className="font-serif text-[44px] text-black leading-none block mb-2">{num}</span>
                <p className="text-2xs tracking-[0.15em] uppercase text-black mb-3">{title}</p>
                <p className="text-[13.5px] text-text-gray font-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-light-gray px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow mb-5">Frequently asked</p>
          <h2 className="section-title mb-14"><em>Questions</em> answered.</h2>
          <div className="flex flex-col border-t border-light-gray max-w-3xl">
            {[
              { q: 'Do I need my own instrument to start?', a: 'Not necessarily! For beginners, I\'ll guide you on exactly what to get and when. In-person students have access to instruments in my studio. Online students will need some equipment at home — I\'m happy to recommend affordable options based on your goals.' },
              { q: 'What ages do you teach?', a: 'I teach students of all ages — starting around age 6 through teens, adults, and returning musicians. My approach is always tailored to each student\'s goals and learning style. It\'s never too late to start.' },
              { q: 'Do you offer online lessons?', a: 'Yes! Private 1-on-1 lessons are available both in-person (Longmont, CO) and online worldwide. Semi-private kids\' lessons are currently in-person only.' },
              { q: 'What is your cancellation policy?', a: 'Semester packages include 2 makeup lessons per term. Drop-in lessons must be canceled at least 24 hours in advance to avoid being charged. I understand life happens and always try to be flexible.' },
              { q: 'What percussion instruments do you teach?', a: 'I teach the full percussion battery — snare drum, marimba, xylophone, vibraphone, timpani, and drum kit fundamentals. Pre-college students develop proficiency across all major classical percussion instruments.' },
            ].map(({ q, a }, i) => (
              <FAQItem key={i} question={q} answer={a} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="bg-off-white border-t border-light-gray px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="eyebrow mb-5">Get in touch</p>
            <h2 className="section-title mb-6">Ready to <em>begin?</em></h2>
            <p className="text-[15px] text-text-gray font-light leading-relaxed mb-10">
              Spots are limited — I keep my roster intentionally small so every student gets the attention they deserve. Reach out to ask about availability and to schedule your trial lesson.
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-[13px] text-text-gray font-light flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-accent" />
                <a href="mailto:Chihiro@chihiroshibayama.com" className="text-black no-underline hover:text-accent transition-colors">Chihiro@chihiroshibayama.com</a>
              </p>
              <p className="text-[13px] text-text-gray font-light flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-accent" />
                Longmont, Colorado · Online worldwide
              </p>
            </div>
          </div>
          <div className="bg-white p-8 lg:p-10 border border-light-gray">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-light-gray">
      <summary className="flex justify-between items-center py-5 cursor-pointer list-none text-[15px] text-black font-normal">
        {question}
        <span className="text-mid-gray text-xl font-light ml-4 group-open:rotate-45 transition-transform flex-shrink-0">+</span>
      </summary>
      <p className="text-[14px] text-text-gray font-light leading-relaxed pb-5">{answer}</p>
    </details>
  )
}
