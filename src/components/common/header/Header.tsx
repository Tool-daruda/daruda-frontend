import { IcAlarmBlack24, IcArrowDownBlack24, ImgDarudalogo40 } from '@assets/svgs';
import { Link } from 'react-router-dom';

import * as S from './Header.styled';

const HEADER_TEXTS = {
  category: '카테고리',
  community: '커뮤니티',
  login: '로그인',
  signup: '회원가입',
  mypage: '마이페이지',
} as const;

interface HeaderProps {
  isLoggedIn: boolean;
}

const Header = ({ isLoggedIn = false }: HeaderProps) => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <Header.Logo />
        <Header.Category />
        <Header.Community />
        <Header.Auth isLoggedIn={isLoggedIn} />
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

const Logo = () => {
  return (
    <S.LogoSection>
      <Link to="/" aria-label="홈으로 이동">
        <ImgDarudalogo40 />
      </Link>
    </S.LogoSection>
  );
};

const Category = () => {
  return (
    <S.CategoryNav>
      <S.CategorySection aria-label="카테고리 열기">
        {HEADER_TEXTS.category}
        <IcArrowDownBlack24 />
      </S.CategorySection>
    </S.CategoryNav>
  );
};

const Community = () => {
  return (
    <S.CommunityNav>
      <S.StyledLink to="/community" aria-label="커뮤니티로 이동">
        {HEADER_TEXTS.community}
      </S.StyledLink>
    </S.CommunityNav>
  );
};

interface AuthProps {
  isLoggedIn: boolean;
}

const Auth = ({ isLoggedIn }: AuthProps) => {
  if (isLoggedIn) {
    return (
      <S.AuthSection aria-label="알림/마이페이지">
        <S.MyPageSection>
          <S.NotificationButton aria-label="알림 확인">
            <Link to="/mypage">
              <IcAlarmBlack24 />
            </Link>
          </S.NotificationButton>
          <S.StyledLink to="/mypage">{HEADER_TEXTS.mypage}</S.StyledLink>
        </S.MyPageSection>
      </S.AuthSection>
    );
  }

  return (
    <S.AuthSection aria-label="로그인/회원가입">
      <S.StyledLink to="/login">{HEADER_TEXTS.login}</S.StyledLink>
      <S.AuthDivider>/</S.AuthDivider>
      <S.StyledLink to="/login">{HEADER_TEXTS.signup}</S.StyledLink>
    </S.AuthSection>
  );
};

Header.Logo = Logo;
Header.Category = Category;
Header.Community = Community;
Header.Auth = Auth;

export default Header;
