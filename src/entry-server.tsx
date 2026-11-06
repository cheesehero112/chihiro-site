// Build-time renderer used by scripts/prerender.mjs to produce static HTML for each page
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'

export { routes, headTags, getMeta, canonicalUrl, SITE_URL } from './seo'

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
}
