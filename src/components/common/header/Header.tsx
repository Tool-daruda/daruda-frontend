import { IcAlarmBlack24, IcArrowDownBlack24, IcArrowDownBlack24Copy, ImgDarudalogo40 } from '@assets/svgs';
import { HEADER_STATE, HeaderState } from '@constants/headerState';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './Header.styled';

const HEADER_TEXTS = {
  category: '카테고리',
  community: '커뮤니티',
  login: '로그인',
  signup: '회원가입',
  mypage: '마이페이지',
} as const;

const CATAGORY_TEXTS = [
  'AI',
  '협업&커뮤니케이션',
  '영상&음악',
  '커리어&자기개발',
  '문서 작성&편집',
  '데이터',
  '생활',
  '그래픽&디자인',
  '프레젠테이션',
  '코딩&개발',
  '설계&모델링',
] as const;

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

const Logo = () => {
  return (
    <S.LogoSection>
      <Link to="/" aria-label="홈으로 이동">
        <ImgDarudalogo40 width="11.2rem" height="3.3rem" />
      </Link>
    </S.LogoSection>
  );
};

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const toggleCategory = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  // isHover와 isOpen을 병합해서 메뉴 표시 여부 결정
  const shouldDisplayDropdown = isHover || isOpen;

  return (
    <S.CategoryNav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <S.CategorySection onClick={toggleCategory} aria-label="카테고리 열기">
        {HEADER_TEXTS.category}
        <IcArrowDownBlack24 width="2.4rem" height="2.4rem" />
      </S.CategorySection>
      {shouldDisplayDropdown && (
        <S.OpenedCategoryWrapper>
          <S.OpenedCategory onClick={toggleCategory}>
            카테고리 <IcArrowDownBlack24Copy width="2.4rem" height="2.4rem" />
          </S.OpenedCategory>
          <S.CategoryDropdown>
            {CATAGORY_TEXTS.map((category, index) => (
              <S.CategoryItem key={index}>{category}</S.CategoryItem>
            ))}
          </S.CategoryDropdown>
        </S.OpenedCategoryWrapper>
      )}
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

export default Header;
