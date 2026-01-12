export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://mak-enterprises.onrender.com';

  // Static pages
  const routes = [
    '',
    '/portfolio',
    '/products', // If you have a products listing page
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  }));

  // Dynamic Category Pages
  const categories = [
    'sofas',
    'bedroom',
    'dining',
    'recliners',
    'chairs'
  ];

  const categoryRoutes = categories.map((slug) => ({
    url: `${baseUrl}/category/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...routes, ...categoryRoutes];
}
