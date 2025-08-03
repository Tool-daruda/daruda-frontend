import SimilarToolCard from './similarToolCard/SimilarToolCard';
import { AlternativeToolResponse } from '@apis/tool';
import { id_to_name } from '@constants/slugMap';

interface ListProps {
  data: AlternativeToolResponse;
  origin: number;
}

const SimilarToolCardList = ({ data, origin }: ListProps) => {
  const { relatedToolResList } = data;

  if (relatedToolResList.length === 0) {
    return null; // 데이터가 없을 때 처리
  }

  return (
    <>
      {relatedToolResList?.map((tool) => (
        <SimilarToolCard
          key={tool.toolId}
          toolLogo={tool.toolLogo}
          toolName={tool.toolName}
          license={tool.license}
          keywords={tool.keywords}
          originTool={id_to_name[origin]}
        />
      ))}
    </>
  );
};

export default SimilarToolCardList;
