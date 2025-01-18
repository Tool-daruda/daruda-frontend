import { Error } from '@assets/svgs';
import CircleButton from '@components/button/circleButton/CircleButton';
import Spacing from '@components/spacing/Spacing';
import { useNavigate } from 'react-router-dom';

import * as S from './NotFound.styled';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Left>
        <S.Title>오류가 발생했어요</S.Title>
        <Spacing size="0.4" />
        <S.Content> 다루다를 다시 시작해주세요</S.Content>
        <Spacing size="4" />
        <CircleButton size="mini" onClick={() => navigate('/toolist')}>
          다시 시작하기
        </CircleButton>
        <Spacing size="18" />
        <span>오류코드 : 404</span>
      </S.Left>
      <S.Right>
        <S.Ellipse />
        <Error />
      </S.Right>
    </S.Container>
  );
};

export default NotFound;
