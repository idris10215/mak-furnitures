export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://gareeb-nawaz-enterprises.onrender.com/sitemap.xml',
  }
}
