import SimilarToolCard from './similarToolCard/SimilarToolCard';
import { AlternativeToolResponse } from '@apis/tool';

interface ListProps {
  data: AlternativeToolResponse;
}

const SimilarToolCardList = ({ data }: ListProps) => {
  const { relatedToolResList } = data;

  if (relatedToolResList.length === 0) {
    return null; // 데이터가 없을 때 처리
  }

  return (
    <>
      {relatedToolResList?.map((tool) => (
        <SimilarToolCard
          key={tool.toolId}
          toolId={tool.toolId}
          toolLogo={tool.toolLogo}
          toolName={tool.toolName}
          license={tool.license}
          keywords={tool.keywords}
        />
      ))}
    </>
  );
};

export default SimilarToolCardList;
