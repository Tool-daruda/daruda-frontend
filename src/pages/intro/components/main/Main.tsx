import { ImgDarudalogo50 } from '@assets/svgs';
import CircleButton from '@components/button/circleButton/CircleButton';
import Scroll from '@components/lottie/Scroll';

import * as S from './Main.styled';

const Main = () => {
  return (
    <S.PageWrapper>
      <S.PageTitle>
        <ImgDarudalogo50 />
        <h1>대학생활에 필요한 툴을 다루다</h1>
      </S.PageTitle>
      <div>
        <CircleButton shadow={false} size="large">
          <span>시작하기</span>
        </CircleButton>
        <S.Scroll>Scroll Down</S.Scroll>
        <Scroll />
      </div>
    </S.PageWrapper>
  );
};

export default Main;
