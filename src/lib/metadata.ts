import type { Metadata } from 'next';

export function createMetadata({
  title,
  description,
  path = '',
  type = 'website',
  date,
}: {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
  date?: string;
}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const url = `${baseUrl.replace(/\/$/, '')}${path ? `/${path.replace(/^\/+/, '')}` : ''}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Ege's Personal Site",
      type,
      ...(date ? { publishedTime: date } : {}),
    },
    alternates: { canonical: url },
  };
}
