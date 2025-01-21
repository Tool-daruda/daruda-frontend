import { usePlan } from '@pages/toolDetail/apis/api';
import { forwardRef } from 'react';

import Plan from './plan/Plan';
import * as S from './PlanBox.styled';

interface PlanPropTypes {
  toolId: number;
}

const PlanBox = forwardRef<HTMLDivElement, PlanPropTypes>(({ toolId, ...props }, ref) => {
  const { data } = usePlan(toolId);

  // 데이터가 없거나 비어있는 경우 null 반환
  if (!data || !data.toolPlans) {
    return null;
  }

  return (
    <div ref={ref} {...props}>
      <S.PlanBoxWrapper>
        <h1>플랜</h1>
        <Plan toolPlans={data.toolPlans} />
      </S.PlanBoxWrapper>
    </div>
  );
});

PlanBox.displayName = 'PlanBox';
export default PlanBox;
