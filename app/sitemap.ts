import type { MetadataRoute } from 'next';
import { works } from '@/data/work';

const BASE_URL = 'https://ademduran.fr';

// Fonction pour formater la date au format ISO pour le sitemap
const formatDate = (date: Date) => date.toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Pages statiques
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: now,
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/work`,
      lastModified: now,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changefreq: 'monthly',
      priority: 0.7,
    },
  ];

  const projectPages = works.map(work => ({
    url: `${BASE_URL}/work/${work.id}`,
    lastModified: work.year ? new Date(work.year, 0, 1) : now,
    changefreq: 'yearly',
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages];
}
