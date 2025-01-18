import Plan from './plan/Plan';
import * as S from './PlanBox.styled';

const PlanBox = () => {
  return (
    <>
      <S.PlanBoxWrapper>
        <h1>플랜</h1>
        <Plan />
      </S.PlanBoxWrapper>
    </>
  );
};

export default PlanBox;
