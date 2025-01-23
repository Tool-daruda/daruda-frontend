import { Helmet } from 'react-helmet-async';

const Title = ({ title, tool }: { title: string; tool?: string }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:tool" content={tool ? `${tool} 툴을 다루다` : '대학생활에 필요한 툴을 다루다'} />
    </Helmet>
  );
};

export default Title;
