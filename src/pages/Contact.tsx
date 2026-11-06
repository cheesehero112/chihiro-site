const INQUIRY_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeEUIk58KXpBGSLBeOP7SIxTfSDN5quCjeJDygQNCbtVG7rVg/viewform'

export default function Contact() {
  return (
    <div className="pt-[80px]">

      {/* HERO GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(90vh-80px)]">

        {/* Left — dark info panel */}
        <div className="bg-black px-6 lg:px-16 py-16 lg:py-24 flex flex-col justify-center order-2 lg:order-1">
          <p className="flex items-center gap-3 text-[12px] tracking-[0.25em] uppercase text-white/65 mb-6">
            <span className="block w-8 h-px bg-white/35 flex-shrink-0" />
            Get in touch
          </p>
          <h1 className="font-serif font-normal text-white leading-tight mb-8" style={{ fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)' }}>
            Let's<br /><em className="text-accent">connect.</em>
          </h1>
          <p className="text-[17px] text-white/75 leading-relaxed max-w-sm mb-14">
            Whether you're interested in private lessons, a performance inquiry, or just want to say hello — I'd love to hear from you.
          </p>

          <div className="flex flex-col border-t border-white/10">
            {[
              { label: 'Email', content: <a href="mailto:chihiro@chihiroshibayama.com" className="text-accent no-underline border-b border-accent/30 hover:border-accent transition-colors">chihiro@chihiroshibayama.com</a> },
              { label: 'Location', content: <>Longmont, Colorado<br />Online lessons available worldwide</> },
              { label: 'Lessons', content: <>Currently accepting new students.<br />Spots are limited.</> },
              { label: 'Follow', content: (
                <div className="flex gap-5 flex-wrap">
                  {[
                    { href: 'https://www.youtube.com/channel/UCdYfi421onANf2QRsDuBdHQ', label: 'YouTube' },
                    { href: 'https://www.instagram.com/chihiroplayspercussion/', label: 'Instagram' },
                    { href: 'https://www.facebook.com/ChihiroPercussionist', label: 'Facebook' },
                  ].map(({ href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="text-[15px] tracking-[0.12em] uppercase text-white/70 no-underline border-b border-white/30 pb-px hover:text-white transition-colors">
                      {label}
                    </a>
                  ))}
                </div>
              )},
            ].map(({ label, content }) => (
              <div key={label} className="flex items-start gap-5 py-5 border-b border-white/8">
                <span className="text-[12px] tracking-[0.2em] uppercase text-white/60 w-20 flex-shrink-0 pt-0.5">{label}</span>
                <span className="text-[16px] text-white/85 leading-relaxed">{content}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-off-white px-6 lg:px-16 py-16 lg:py-24 flex flex-col justify-center order-1 lg:order-2">
          <p className="eyebrow mb-5">Send a message</p>
          <h2 className="font-serif font-normal text-black leading-tight mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
            What can I<br /><em>help you with?</em>
          </h2>
          <p className="text-[17px] text-text-gray font-light leading-relaxed max-w-md mb-10">
            For lessons, fill out my inquiry form. It takes a few minutes, and I'll be in touch within 1–2 business days.
          </p>
          <a href={INQUIRY_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary self-start text-center">
            Open the inquiry form →
          </a>
          <p className="text-[15px] text-text-gray font-light leading-relaxed max-w-md mt-8">
            For performances, press, or anything else, email me at{' '}
            <a href="mailto:chihiro@chihiroshibayama.com" className="text-accent-dark no-underline border-b border-accent/30 hover:border-accent transition-colors">chihiro@chihiroshibayama.com</a>.
          </p>
        </div>
      </section>

      {/* AVAILABILITY STRIP */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-light-gray border-t border-b border-light-gray">
        {[
          { tag: 'Private lessons', title: '1-on-1 Instruction', desc: 'In-person in Longmont, CO or online worldwide. All ages and levels welcome. $30 trial lesson to get started.' },
          { tag: 'Ages 6–11 · New', title: 'Kids\' Semi-Private', desc: 'Siblings or friends learn together. In-person Longmont only. Max 2 students per session.' },
          { tag: 'Free · 15 minutes', title: 'Consultation Call', desc: 'Not sure where to start? Book a free 15-minute call to chat about goals and find the right fit.' },
        ].map(({ tag, title, desc }) => (
          <div key={title} className="bg-white px-8 lg:px-10 py-10">
            <span className="text-xs tracking-[0.2em] uppercase text-accent-dark block mb-3">{tag}</span>
            <h3 className="font-serif text-[20px] text-black mb-3">{title}</h3>
            <p className="text-[15px] text-text-gray font-light leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
