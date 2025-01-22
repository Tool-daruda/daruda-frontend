import CircleButton from '@components/button/circleButton/CircleButton';
import IntroRender from '@components/lottie/IntroRender';
import Scroll from '@components/lottie/Scroll';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './Main.styled';

const Main = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 2000);
  }, []);

  return (
    <S.PageWrapper>
      <IntroRender />
      <S.PageTitle>
        <S.LogoSVG />
        <h1>대학생활에 필요한 툴을 다루다</h1>
      </S.PageTitle>
      <S.BottomContainer className={isVisible ? 'visible' : ''}>
        <CircleButton shadow={false} size="large" onClick={() => navigate('/toollist')}>
          <span>시작하기</span>
        </CircleButton>
        <S.Scroll>Scroll Down</S.Scroll>
        <Scroll />
      </S.BottomContainer>
    </S.PageWrapper>
  );
};

export default Main;
