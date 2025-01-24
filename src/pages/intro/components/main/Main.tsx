import CircleButton from '@components/button/circleButton/CircleButton';
import IntroRender from '@components/lottie/IntroRender';
import Scroll from '@components/lottie/Scroll';
import { useEffect, useState } from 'react';

import * as S from './Main.styled';

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <CircleButton
          type="button"
          shadow={false}
          size="large"
          handleClick={() => {
            handleScrollToSection('target');
          }}
        >
          <span>살펴보기</span>
        </CircleButton>
        <S.Scroll>Scroll Down</S.Scroll>
        <Scroll />
      </S.BottomContainer>
    </S.PageWrapper>
  );
};

export default Main;
