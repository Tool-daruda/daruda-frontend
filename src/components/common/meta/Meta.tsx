import { Helmet } from 'react-helmet-async';

interface MetaProps {
  title: string;
  tool?: string;
  toolSubname?: string;
  description?: string;
  keywords?: string[];
  category?: string;
  image?: string;
  url?: string;
}

const Meta = ({ title, tool, toolSubname, description, keywords, category, image, url }: MetaProps) => {
  const keywordList = [tool, toolSubname, category, ...(keywords ?? [])].filter(Boolean).join(', ');
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywordList && <meta name="keywords" content={keywordList} />}
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {image && <meta name="twitter:image" content={image} />}

      {/* Canonical */}
      {url && <link rel="canonical" href={url} />}
    </Helmet>
  );
};

export default Meta;
