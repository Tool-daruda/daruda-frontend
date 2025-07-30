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
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:tool" content={tool ? `${tool} 툴을 다루다` : '대학생활에 필요한 툴을 다루다'} />

      <meta name="description" content={description} />
      <meta name="keywords" content={`${tool}, ${toolSubname}, ${category}, ${keywords}`} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
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
