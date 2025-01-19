import { planData } from '@pages/toolDetail/mocks/planData';
import { useState } from 'react';

import * as S from './Plan.styled';

import Toggle from '../../toggle/Toggle';

const Plan = () => {
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
      <S.PlanWrapper>
        {planData.map((plan) => {
          const price = isAnnual ? plan.price_annual : plan.price_monthly;
          if (isAnnual && price === null) return null;
          return (
            <Toggle
              key={plan.plan_id}
              isSingleLine={false}
              planName={plan.plan_name}
              label={price}
              dollar={plan.is_dollar ? Math.round(price / 1300) : undefined}
              isdollar={plan.is_dollar === 1}
              description={plan.description}
              zIndex={1}
            />
          );
        })}
      </S.PlanWrapper>
    </>
  );
};

export default Plan;
