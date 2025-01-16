import { IcAlarmBlack24, ImgDarudalogo40 } from '@assets/svgs';
import { HEADER_STATE, HeaderState } from '@constants/headerState';
import { Link } from 'react-router-dom';

import { Category } from './category/Category';
import * as S from './Header.styled';

interface HeaderProps {
  headerState: HeaderState;
}

const Header = ({ headerState }: HeaderProps) => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <Logo />
        <Category />
        <Community />
        <Auth headerState={headerState} />
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

const Logo = () => (
  <S.LogoSection>
    <Link to="/" aria-label="홈으로 이동">
      <ImgDarudalogo40 width="11.2rem" height="3.3rem" />
    </Link>
  </S.LogoSection>
);

const Community = () => (
  <S.CommunityNav>
    <S.StyledLink to="/community" aria-label="커뮤니티로 이동">
      커뮤니티
    </S.StyledLink>
  </S.CommunityNav>
);

interface AuthProps {
  headerState: HeaderState;
}

const Auth = ({ headerState }: AuthProps) => {
  if (headerState === HEADER_STATE.LOGGED_IN) {
    return (
      <S.AuthSection aria-label="알림/마이페이지">
        <S.MyPageSection>
          <S.NotificationButton aria-label="알림 확인">
            <IcAlarmBlack24 width="2.4rem" height="2.4rem" />
          </S.NotificationButton>
          <S.StyledLink to="/mypage">마이페이지</S.StyledLink>
        </S.MyPageSection>
      </S.AuthSection>
    );
  }

  return (
    <S.AuthSection aria-label="로그인/회원가입">
      <S.StyledLink to="/login">로그인</S.StyledLink>
      <S.AuthDivider>/</S.AuthDivider>
      <S.StyledLink to="/login">회원가입</S.StyledLink>
    </S.AuthSection>
  );
};

export default Header;
