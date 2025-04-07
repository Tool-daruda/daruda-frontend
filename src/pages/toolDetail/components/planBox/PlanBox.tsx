import { forwardRef } from 'react';

import Plan from './plan/Plan';
import * as S from './PlanBox.styled';
import { usePlanQuery } from '@apis/tool';

interface PlanPropTypes {
  toolId: number;
}

const PlanBox = forwardRef<HTMLDivElement, PlanPropTypes>(({ toolId, ...props }, ref) => {
  const { data } = usePlanQuery(toolId);

  return (
    <div ref={ref} {...props}>
      <S.PlanBoxWrapper>
        <h1>플랜</h1>
        <Plan toolPlans={data?.toolPlans || []} />
      </S.PlanBoxWrapper>
    </div>
  );
});

PlanBox.displayName = 'PlanBox';
export default PlanBox;
