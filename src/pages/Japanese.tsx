import { Link } from 'react-router-dom'
import { Stat } from '../components/ui'

const EMAIL = 'chihiro@chihiroshibayama.com'

export default function Japanese() {
  return (
    <div lang="ja" className="pt-[80px]">

      {/* HERO */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(90vh-80px)] border-b border-light-gray">
        <div className="flex flex-col justify-center px-6 lg:px-16 py-16 lg:py-24 md:border-r border-light-gray order-2 md:order-1">
          <div className="flex items-center gap-3 mb-7">
            <img src="/images/shibayama_logo.svg" alt="Shibayama Percussion Studio" className="w-8 h-8 opacity-80 flex-shrink-0" />
            <p className="text-xs tracking-[0.25em] uppercase text-black/70 font-medium">Shibayama Percussion Studio</p>
          </div>
          <h1 className="font-serif font-normal leading-snug text-black mb-8" style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.9rem)' }}>
            海外で音楽を学びたいお子さまと、<br className="hidden lg:inline" />そのご家族へ。
          </h1>
          <p className="text-[17px] text-text-gray font-normal leading-loose max-w-xl mb-10">
            ジュリアード音楽院で学士号と修士号を取得し、ブロードウェイやオーケストラで演奏してきた打楽器奏者が、日本語でオンラインレッスンを行います。小太鼓、マリンバ、ティンパニ、ドラムセットまで、初心者から音大受験を目指す方まで対応します。私自身も16歳で単身渡米しました。海外で学ぶ不安や楽しさも、一緒に分かち合えたらうれしいです。まずは15分の無料相談からお気軽にどうぞ。
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-6 sm:gap-x-8 pb-10 border-b border-light-gray mb-10">
            <Stat num="25+" label="Years performing" />
            <Stat num="20+" label="Years teaching" />
            <Stat num="Juilliard" label="B.M. & M.M." />
          </div>
          <a href={`mailto:${EMAIL}?subject=${encodeURIComponent('無料相談のお申し込み')}`} className="btn-primary self-start">
            15分の無料相談を申し込む
          </a>
          <p className="text-[14px] text-mid-gray font-normal mt-4">{EMAIL}</p>
        </div>

        <div className="relative bg-off-white overflow-hidden min-h-[75vw] md:min-h-0 order-1 md:order-2">
          <img
            src="/images/teaching-portrait-web.jpg"
            alt="Chihiro Shibayama holding mallets at the marimba"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
      </section>

      {/* LINKS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-light-gray border-b border-light-gray">
        <Link to="/audition-prep" className="bg-white px-8 lg:px-16 py-10 no-underline hover:bg-off-white transition-colors block">
          <span className="text-xs tracking-[0.2em] uppercase text-accent-dark block mb-3">Audition prep</span>
          <p className="font-serif text-[20px] text-black mb-2">海外の音楽学校のオーディション準備</p>
          <p className="text-[15px] text-text-gray font-normal leading-relaxed">曲選び、録画審査、模擬オーディションまで日本語でサポートします。→</p>
        </Link>
        <Link to="/teaching" className="bg-white px-8 lg:px-16 py-10 no-underline hover:bg-off-white transition-colors block">
          <span className="text-xs tracking-[0.2em] uppercase text-accent-dark block mb-3">Lessons</span>
          <p className="font-serif text-[20px] text-black mb-2">レッスン内容と料金（英語）</p>
          <p className="text-[15px] text-text-gray font-normal leading-relaxed">レッスンの種類や料金は英語ページをご覧ください。→</p>
        </Link>
      </div>
    </div>
  )
}
