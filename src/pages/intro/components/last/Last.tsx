import CircleButton from '@components/button/circleButton/CircleButton';
import { useNavigate } from 'react-router-dom';

import * as S from './Last.styled';

const LastPage = () => {
  const navigate = useNavigate();
  return (
    <S.PageWrapper>
      <S.PageContainer>
        <h1>
          세상을 다루는 첫 번째 클릭
          <br />
          다루다에서 시작하세요
        </h1>
        <CircleButton shadow={false} size="large" whiteBtn={true} onClick={() => navigate('/toollist')}>
          <span> 시작하기</span>
        </CircleButton>
      </S.PageContainer>
    </S.PageWrapper>
  );
};

export default LastPage;
