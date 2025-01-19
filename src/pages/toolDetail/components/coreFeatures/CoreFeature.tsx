import { forwardRef } from 'react';

import * as S from './CoreFeature.styled';

import Toggle from '../toggle/Toggle';

import { TOOL_COREFEATURES } from '../../mocks/coreFeature';

const CoreFeature = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} {...props}>
      <S.CoreFeatureWrapper>
        <h1>핵심 기능</h1>
        <S.CoreFeatureContainer>
          {/* TODO: '/{tool-id}/core-features' API 연결하기 */}
          {TOOL_COREFEATURES.data.toolCoreResList.map((feature, index, array) => (
            <Toggle
              key={feature.coreId}
              isSingleLine={true}
              label={feature.coreTitle}
              description={feature.coreContent}
              isdollar={false}
              zIndex={array.length - (index + 1)}
            />
          ))}
        </S.CoreFeatureContainer>
      </S.CoreFeatureWrapper>
      <S.DividingLine />
    </div>
  );
});

CoreFeature.displayName = 'CoreFeature';

export default CoreFeature;
