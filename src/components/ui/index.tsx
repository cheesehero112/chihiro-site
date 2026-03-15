import { ReactNode } from 'react'

interface PageHeaderProps {
  eyebrow: string
  title: ReactNode
  subtitle?: string
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <div className="pt-[72px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24 border-b border-light-gray">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="font-serif font-normal leading-tight text-black mb-4" style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-[15px] text-text-gray font-light max-w-xl leading-relaxed mt-4">{subtitle}</p>
        )}
      </div>
    </div>
  )
}

interface SectionLabelProps {
  children: ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="eyebrow mb-5">{children}</p>
  )
}

interface StatProps {
  num: string
  label: string
  dark?: boolean
}

export function Stat({ num, label, dark = false }: StatProps) {
  return (
    <div className="flex flex-col">
      <span className={`font-serif text-4xl leading-none ${dark ? 'text-white' : 'text-black'}`}>{num}</span>
      <span className={`text-2xs tracking-[0.15em] uppercase mt-1.5 ${dark ? 'text-white/40' : 'text-mid-gray'}`}>{label}</span>
    </div>
  )
}

interface DividerProps {
  className?: string
}

export function Divider({ className = '' }: DividerProps) {
  return <hr className={`border-none border-t border-light-gray ${className}`} />
}
