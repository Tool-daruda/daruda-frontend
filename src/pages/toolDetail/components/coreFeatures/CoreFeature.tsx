import { useCoreFeature } from '@pages/toolDetail/apis/api';
import { forwardRef } from 'react';

import * as S from './CoreFeature.styled';

import Toggle from '../toggle/Toggle';

interface CoreFeaturePropTypes {
  toolId: number;
}

const CoreFeature = forwardRef<HTMLDivElement, CoreFeaturePropTypes>(({ toolId, ...props }, ref) => {
  const { data } = useCoreFeature(toolId);

  // 데이터가 없거나 비어있는 경우 null 반환
  if (!data || !data.toolCoreResList || data.toolCoreResList.length === 0) {
    return null;
  }

  const { toolCoreResList } = data;

  return (
    <div ref={ref} {...props}>
      <S.CoreFeatureWrapper>
        <h1>핵심 기능</h1>
        <S.CoreFeatureContainer>
          {toolCoreResList?.map((feature, index) => (
            <Toggle
              key={feature.coreId}
              isSingleLine={true}
              label={feature.coreTitle}
              description={feature.coreContent}
              isdollar={false}
              zIndex={toolCoreResList.length - index}
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
