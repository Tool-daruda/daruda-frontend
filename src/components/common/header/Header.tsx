import { IcAlarmBlack24, IcProfileBlack24, ImgDarudalogo40, ImgSpeakBubble } from '@assets/svgs';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Category } from './category/Category';
import * as S from './Header.styled';

interface HeaderProps {
  forOnboarding?: boolean;
}

const HEADER_TEXTS = {
  community: '커뮤니티',
  login: '시작하기',
  onboard: '서비스 소개',
} as const;

const Header = ({ forOnboarding = false }: HeaderProps) => {
  return (
    <S.HeaderWrapper $forOnboarding={forOnboarding}>
      <S.HeaderContainer>
        <S.NavLeftSection>
          <Logo />
          <Category />
          <Community />
          <Onboarding />
        </S.NavLeftSection>
        <Auth />
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

const Logo = () => (
  <li>
    <Link to="/" aria-label="홈으로 이동">
      <ImgDarudalogo40 width="11.2rem" height="3.3rem" />
    </Link>
  </li>
);

const Community = () => (
  <S.NavContainer>
    <S.StyledLink to="/community" aria-label="커뮤니티로 이동">
      {HEADER_TEXTS.community}
    </S.StyledLink>
  </S.NavContainer>
);

const Onboarding = () => (
  <S.NavContainer>
    <S.StyledLink to="/onboarding" aria-label="온보딩페이지로 이동">
      {HEADER_TEXTS.onboard}
    </S.StyledLink>
  </S.NavContainer>
);

const Auth = () => {
  const user = localStorage.getItem('user');
  const [isHover, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.relatedTarget as HTMLElement | null;

    if (target && target.closest('.hover-content')) {
      return;
    }

    setIsHovered(false);
  };

  if (user) {
    return (
      <S.AuthSection aria-label="알림/마이페이지">
        <S.MyPageSection>
          <S.NotificationButton aria-label="알림 확인" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <IcAlarmBlack24 />
          </S.NotificationButton>
          <S.StyledLink to="/mypage">
            <S.MyPageButton aria-label="마이페이지">
              <IcProfileBlack24 />
            </S.MyPageButton>
          </S.StyledLink>
          <S.HoverContent
            className="hover-content"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            $visible={isHover}
          >
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
