// Writes a static HTML file for every page so search engines and link previews
// see real text, titles, and descriptions. Also writes sitemap.xml and robots.txt.
// Runs after `vite build` and `vite build --ssr` (see the build script in package.json).
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssrDir = join(root, 'dist-ssr')

const { render, routes, headTags, getMeta, canonicalUrl, SITE_URL } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href)

const template = readFileSync(join(dist, 'index.html'), 'utf8')

for (const route of routes) {
  const html = template
    .replace(/<html lang="[^"]*">/, `<html lang="${getMeta(route).lang ?? 'en'}">`)
    .replace(/\s*<meta name="description"[^>]*>/, '')
    .replace(/<title>.*?<\/title>/, headTags(route))
    .replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`)

  if (route === '/') {
    writeFileSync(join(dist, 'index.html'), html)
    continue
  }
  // Both files, so /teaching and /teaching/ each get the right page
  const dir = join(dist, route.slice(1))
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html)
  writeFileSync(`${dir}.html`, html)
}

const today = new Date().toISOString().slice(0, 10)
const urls = [...routes.map(canonicalUrl), `${SITE_URL}/five-pillars/`]
writeFileSync(join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
  `\n</urlset>\n`)

writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)

rmSync(ssrDir, { recursive: true, force: true })
console.log(`Prerendered ${routes.length} pages, plus sitemap.xml and robots.txt`)
