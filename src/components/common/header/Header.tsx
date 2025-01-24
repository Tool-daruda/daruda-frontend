import { IcAlarmBlack24, IcProfileBlack24, ImgDarudalogo40, ImgSpeakBubble } from '@assets/svgs';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Category } from './category/Category';
import * as S from './Header.styled';

interface HeaderProps {
  forOnboarding?: boolean;
}

const HEADER_TEXTS = {
  community: '커뮤니티',
  login: '시작하기',
} as const;

const Header = ({ forOnboarding = false }: HeaderProps) => {
  return (
    <S.HeaderWrapper $forOnboarding={forOnboarding}>
      <S.HeaderContainer>
        <Logo />
        <Category />
        <Community />
        <Auth />
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
      {HEADER_TEXTS.community}
    </S.StyledLink>
  </S.CommunityNav>
);

const Auth = () => {
  const user = localStorage.getItem('user');
  const [isHover, setIsHovered] = useState(false);

  if (user) {
    return (
      <S.AuthSection aria-label="알림/마이페이지">
        <S.MyPageSection>
          <S.NotificationButton
            aria-label="알림 확인"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <IcAlarmBlack24 />
          </S.NotificationButton>
          <S.StyledLink to="/mypage">
            <S.MyPageButton aria-label="마이페이지">
              <IcProfileBlack24 />
            </S.MyPageButton>
          </S.StyledLink>
          <S.HoverContent $visible={isHover}>
            <S.HoverLayout>
              <div>
                <ImgSpeakBubble /> <p>지금은 준비 중이에요</p>
              </div>
            </S.HoverLayout>
          </S.HoverContent>
        </S.MyPageSection>
      </S.AuthSection>
    );
  }

  return (
    <S.AuthSection aria-label="로그인/회원가입">
      <S.StyledLink to="/login"> {HEADER_TEXTS.login}</S.StyledLink>
    </S.AuthSection>
  );
};

export default Header;
