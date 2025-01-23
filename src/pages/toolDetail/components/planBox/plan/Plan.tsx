import { ImgDetailFreetool98 } from '@assets/svgs';
import { ToolPlan } from '@pages/toolDetail/types';
import { forwardRef, useState } from 'react';

import * as S from './Plan.styled';

import Toggle from '../../toggle/Toggle';

const Plan = forwardRef<HTMLDivElement, ToolPlan>(({ toolPlans }, ref) => {
  const [isAnnual, setIsAnnual] = useState(false);

  // 조건에 따른 버튼 표시 여부 확인
  const hasMonthly = toolPlans?.some((plan) => plan.monthlyPrice !== null);
  const hasAnnual = toolPlans?.some((plan) => plan.annualPrice !== null);

  // 모든 monthlyPrice와 annualPrice가 null인 경우
  const isFreeTool = !hasMonthly && !hasAnnual;

  if (isFreeTool) {
    return (
      <S.NullWrapper>
        <ImgDetailFreetool98 />
        <S.NullText>비용을 지불하지 않아도 자유롭게 사용할 수 있는 툴입니다.</S.NullText>
      </S.NullWrapper>
    );
  }

  return (
    <>
      <S.PlanTab>
        {hasMonthly && (
          <S.PlanBtn onClick={() => setIsAnnual(false)} $isSelected={!isAnnual}>
            월간
          </S.PlanBtn>
        )}
        {hasMonthly && hasAnnual && '|'}
        {hasAnnual && (
          <S.PlanBtn onClick={() => setIsAnnual(true)} $isSelected={isAnnual}>
            연간
          </S.PlanBtn>
        )}
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
