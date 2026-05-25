import { MetadataRoute } from 'next';
import { getBlogs } from '@/utils/pocketbase';

interface BlogSitemapItem {
  slug: string;
  updated: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://paisamilega.in';
  
  const staticPages = [
    '',
    '/saathi',
    '/about',
    '/data-policy',
    '/privacy',
    '/terms',
    '/blogs',
    '/hi',
    '/hi/saathi',
    '/hi/about',
    '/hi/data-policy',
    '/hi/privacy',
    '/hi/terms',
    '/hi/blogs',
  ];

  const staticEntries = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' || route === '/hi' ? 1 : 0.8,
  }));

  // Fetch blogs for dynamic sitemap
  const blogs = (await getBlogs()) as BlogSitemapItem[];
  const blogEntries = blogs.flatMap((blog) => [
    {
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified: new Date(blog.updated),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/hi/blogs/${blog.slug}`,
      lastModified: new Date(blog.updated),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }
  ]);

  return [...staticEntries, ...blogEntries];
}
