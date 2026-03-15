# Chihiro Shibayama — Website

Built with React + TypeScript + Vite + Tailwind CSS.

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (opens at http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment (Netlify)

This site is configured to deploy automatically via Netlify.

1. Push this repo to GitHub
2. Connect the repo to Netlify (netlify.com → New site from Git)
3. Build settings are auto-detected:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add your custom domain in Netlify → Domain settings

## Structure

```
src/
  components/
    layout/     Nav, Footer
    ui/         Shared UI components
  data/
    index.ts    Performances, press, videos, etc.
    blog.ts     Blog post content
  pages/
    Home.tsx
    Bio.tsx
    Teaching.tsx
    Blog.tsx
    BlogPost.tsx
    Media.tsx
    Contact.tsx
```

## Adding a Blog Post

Open `src/data/blog.ts` and add a new entry to the `blogPosts` array:

```ts
{
  slug: 'my-new-post',        // URL: /blog/my-new-post
  title: 'My New Post',
  date: 'March 15, 2026',
  excerpt: 'A short summary shown on the blog list page.',
  content: `
Your post content here. Supports **bold**, *italic*, 
[links](https://example.com), and bullet lists.
  `,
}
```

## Updating Content

- **Performances grid**: `src/data/index.ts` → `performances`
- **Why study with me**: `src/data/index.ts` → `whyReasons`
- **Videos**: `src/data/index.ts` → `videos`
- **Press**: `src/data/index.ts` → `pressItems`
- **Recordings**: `src/data/index.ts` → `recordings`
- **Contact form**: Uses Formspree ID `mreyadbw` — update in `Teaching.tsx` and `Contact.tsx`
