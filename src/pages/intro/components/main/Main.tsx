import { ImgDarudalogo50 } from '@assets/svgs';
import CircleButton from '@components/button/circleButton/CircleButton';
import Scroll from '@components/lottie/Scroll';
import { useNavigate } from 'react-router-dom';

import * as S from './Main.styled';

const Main = () => {
  const navigate = useNavigate();
  return (
    <S.PageWrapper>
      <S.PageTitle>
        <ImgDarudalogo50 />
        <h1>대학생활에 필요한 툴을 다루다</h1>
      </S.PageTitle>
      <div>
        <CircleButton shadow={false} size="large" onClick={() => navigate('/toollist')}>
          <span>시작하기</span>
        </CircleButton>
        <S.Scroll>Scroll Down</S.Scroll>
        <Scroll />
      </div>
    </S.PageWrapper>
  );
};

export default Main;
