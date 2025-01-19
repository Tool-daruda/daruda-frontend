import { SIMILAR_TOOLS } from '@pages/toolDetail/mocks/similarTool';

import SimilarToolCard from './similarToolCard/SimilarToolCard';

const SimilarToolCardList = () => {
  return (
    <>
      {SIMILAR_TOOLS.data.relatedToolResList.map((tool) => (
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
