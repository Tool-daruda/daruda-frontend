import { ToolPlan } from '@pages/toolDetail/types';
import { forwardRef, useState } from 'react';

import * as S from './Plan.styled';

import Toggle from '../../toggle/Toggle';

const Plan = forwardRef<HTMLDivElement, ToolPlan>(({ toolPlans }, ref) => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      <S.PlanTab>
        <S.PlanBtn onClick={() => setIsAnnual(false)} $isSelected={!isAnnual}>
          월간
        </S.PlanBtn>
        |
        <S.PlanBtn onClick={() => setIsAnnual(true)} $isSelected={isAnnual}>
          연간
        </S.PlanBtn>
      </S.PlanTab>
      <S.PlanWrapper ref={ref}>
        {toolPlans?.map((plan) => {
          const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
          if (isAnnual && price === null) return null;
          return (
            <Toggle
              key={plan.planId}
              isSingleLine={false}
              planName={plan.planName}
              label={plan.price}
              dollar={plan.isDollar ? Math.round((price ?? 0) / 1300) : undefined}
              isdollar={plan.isDollar}
              description={plan.description}
              zIndex={1}
            />
          );
        })}
      </S.PlanWrapper>
    </>
  );
});

Plan.displayName = 'Plan';

export default Plan;
