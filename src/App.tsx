import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Bio from './pages/Bio'
import Teaching from './pages/Teaching'
import AuditionPrep from './pages/AuditionPrep'
import Japanese from './pages/Japanese'
import Coaching from './pages/Coaching'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Media from './pages/Media'
import Contact from './pages/Contact'
import { getMeta } from './seo'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// Keep the tab title and description in sync when navigating between pages
function PageMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const meta = getMeta(pathname)
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
    document.documentElement.lang = meta.lang ?? 'en'
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <PageMeta />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/audition-prep" element={<AuditionPrep />} />
          <Route path="/ja" element={<Japanese />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
