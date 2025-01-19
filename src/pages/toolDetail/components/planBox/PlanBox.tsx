import { forwardRef } from 'react';

import Plan from './plan/Plan';
import * as S from './PlanBox.styled';

const PlanBox = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} {...props}>
      <S.PlanBoxWrapper>
        <h1>플랜</h1>
        <Plan />
      </S.PlanBoxWrapper>
    </div>
  );
});

PlanBox.displayName = 'PlanBox';
export default PlanBox;
