import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Regalia Events | Luxury Event Planning',
  description = 'Regalia Events is a premier luxury event management company specializing in creating unforgettable experiences that exceed expectations.',
  keywords = 'wedding, luxury events, planners, corporate events, India, Regalia',
  author = 'Regalia Events',
  ogTitle,
  ogDescription,
  ogImage = '/event.webp',
  ogUrl = 'https://regaliaevents.com',
  canonicalUrl = 'https://regaliaevents.com',
}) => {
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph tags */}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;
