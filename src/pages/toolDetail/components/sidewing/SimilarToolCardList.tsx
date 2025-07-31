import SimilarToolCard from './similarToolCard/SimilarToolCard';
import { AlternativeToolResponse } from '@apis/tool';

interface ListProps {
  data: AlternativeToolResponse;
  origin: number;
}

const SimilarToolCardList = ({ data, origin }: ListProps) => {
  const { relatedToolResList } = data;

  if (relatedToolResList.length === 0) {
    return null; // 데이터가 없을 때 처리
  }

  // todo: toslug 병합 후 이름으로 매칭하기
  const originTool = origin.toLocaleString();

  return (
    <>
      {relatedToolResList?.map((tool) => (
        <SimilarToolCard
          key={tool.toolId}
          toolLogo={tool.toolLogo}
          toolName={tool.toolName}
          license={tool.license}
          keywords={tool.keywords}
          originTool={originTool}
        />
      ))}
    </>
  );
};

export default SimilarToolCardList;
