import Spacing from '@components/spacing/Spacing';

import Menu from './Menu';
import * as S from './MyPageTab.styled';

const MyPageTab = () => {
  return (
    <S.ContentTab>
      <Menu isActive={true}>관심있는 툴</Menu>
      <Menu>관심있는 툴</Menu>
      <Spacing size="6.4" />
      <Menu isWarning={true}>로그아웃</Menu>
    </S.ContentTab>
  );
};

export default MyPageTab;
