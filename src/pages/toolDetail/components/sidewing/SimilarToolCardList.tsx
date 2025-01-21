import { RelatedTool } from '@pages/toolDetail/types';

import SimilarToolCard from './similarToolCard/SimilarToolCard';

interface SimilarToolCardListProps {
  data: RelatedTool; // RelatedTool 타입의 data를 props로 받음
}

const SimilarToolCardList = ({ data }: SimilarToolCardListProps) => {
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
          toolNameMain={tool.toolName}
          license={tool.license}
          keyWordList={tool.keywords}
        />
      ))}
    </>
  );
};

export default SimilarToolCardList;
