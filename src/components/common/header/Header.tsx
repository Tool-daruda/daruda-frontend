import { IcAlarmBlack24, ImgDarudalogo40 } from '@assets/svgs';
import { HEADER_STATE, HeaderState } from '@constants/headerState';
import { Link } from 'react-router-dom';

import { Category } from './category/Category';
import * as S from './Header.styled';

interface HeaderProps {
  headerState: HeaderState;
  forOnBorder: boolean;
}

const HEADER_TEXTS = {
  community: '커뮤니티',
  login: '로그인',
  signup: '회원가입',
  mypage: '마이페이지',
} as const;

const Header = ({ headerState, forOnBorder }: HeaderProps) => {
  return (
    <S.HeaderWrapper $forOnBorder={forOnBorder}>
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
      {HEADER_TEXTS.community}
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
          <S.StyledLink to="/mypage"> {HEADER_TEXTS.mypage}</S.StyledLink>
        </S.MyPageSection>
      </S.AuthSection>
    );
  }

  return (
    <S.AuthSection aria-label="로그인/회원가입">
      <S.StyledLink to="/login"> {HEADER_TEXTS.login}</S.StyledLink>
      <S.AuthDivider>/</S.AuthDivider>

      {/* TODO: 카카오 로그인 구현 후 /signUp 페이지는 따로 없어도 됨 */}
      <S.StyledLink to="/signUp">{HEADER_TEXTS.signup}</S.StyledLink>
    </S.AuthSection>
  );
};

export default Header;
