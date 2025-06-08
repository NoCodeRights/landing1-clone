// src/utils/seo.js
import Head from 'next/head';

/**
 * Componente SEO para meta tags y Open Graph
 * @param {Object} props
 * @param {string} props.title — Título de la página
 * @param {string} props.description — Descripción meta
 * @param {string[]} props.keywords — Array de keywords para meta keywords
 * @param {string} props.url — URL canónica de la página
 */
export function SEO({ title, description, keywords = [], url }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
