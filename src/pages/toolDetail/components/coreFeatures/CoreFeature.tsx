import { TOOL_COREFEATURES } from '@pages/toolDetail/mocks/coreFeature';

import * as S from './CoreFeature.styled';

import Toggle from '../toggle/Toggle';

const CoreFeature = () => {
  return (
    <>
      <S.CoreFeatureWrapper>
        <h1>핵심 기능</h1>
        <S.CoreFeatureContainer>
          {/* TODO: '/{tool-id}/core-features' API 연결 */}
          {Object.entries(TOOL_COREFEATURES).map(([key, feature], index, array) => (
            <Toggle
              key={key}
              isSingleLine={false}
              label={feature.coreTitle}
              description={feature.coreContent}
              isdollar={false}
              zIndex={array.length - (index + 1)}
            />
          ))}
        </S.CoreFeatureContainer>
      </S.CoreFeatureWrapper>
      <S.DividingLine />
    </>
  );
};

export default CoreFeature;
