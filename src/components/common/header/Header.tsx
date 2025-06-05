import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Category } from './category/Category';
import * as S from './Header.styled';
import { IcAlarmBlack24, IcProfileBlack24, ImgDarudalogo40, IcAlarmNotice, IcAlarmCmt, AlarmHead } from '@assets/svgs';

interface HeaderProps {
  forOnboarding?: boolean;
}

// TODO: api 연결 후 더미데이터 삭제
const config = [
  { title: '[공지] 축 다루다 서버 영입', date: '99월 99일', flag: 'notice', id: '1' },
  { title: '내가 작성한 “하 교수님...”글에 댓글이 달렸습니다.', date: '99월 99일', flag: 'comment', id: '2' },
  { title: '아무개님, daruda의 회원이 되신 것을 축하드립니다!', date: '99월 99일', flag: 'notice', id: '3' },
] as const;

// TODO: api 연결시, apis 폴더 내부 model 파일로 타입 코드 이동
type configType = {
  card: {
    title: string;
    date: string;
    flag: 'comment' | 'notice';
    id: string;
  };
};

export const HEADER_TEXTS = {
  community: '커뮤니티',
  login: '시작하기',
  onboard: '서비스 소개',
  category: '툴',
  support: '문의하기',
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

  let leaveTimeout: ReturnType<typeof setTimeout>;

  const handleMouseLeave = () => {
    leaveTimeout = setTimeout(() => {
      setIsHovered(false);
    }, 100);
  };

  const handleMouseEnter = () => {
    clearTimeout(leaveTimeout);
    setIsHovered(true);
  };

  // TODO: 공지 클릭시, 네비게이트 or 팝업 처리
  // TODO: unread 공지 1개 이상 -> active Icon 으로 랜더링
  if (user) {
    return (
      <S.AuthSection aria-label="알림/마이페이지">
        <li>
          <S.StyledAnchor href="https://tally.so/r/w5VJPv" target="_blank">
            {HEADER_TEXTS.support}
          </S.StyledAnchor>
        </li>
        <li>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <S.NotificationButton aria-label="알림 확인">
              <IcAlarmBlack24 />
            </S.NotificationButton>
            <S.HoverContent onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} $visible={isHover}>
              <S.HoverLayout>
                <AlarmHead />
                <S.CardHeader>
                  <h1>알림</h1>
                  <Link to="/notification">더보기</Link>
                </S.CardHeader>
                <S.CardContainer>
                  {config.map((card) => (
                    <CardItem card={card} key={card.id} />
                  ))}
                </S.CardContainer>
              </S.HoverLayout>
            </S.HoverContent>
          </div>
        </li>
        <li>
          <S.StyledLink to="/mypage">
            <S.MyPageButton aria-label="마이페이지">
              <IcProfileBlack24 />
            </S.MyPageButton>
          </S.StyledLink>
        </li>
      </S.AuthSection>
    );
  }

  return (
    <S.AuthSection aria-label="로그인/회원가입">
      <S.StyledLink to="/login"> {HEADER_TEXTS.login}</S.StyledLink>
    </S.AuthSection>
  );
};

const CardItem = ({ card }: configType) => {
  return (
    <li>
      <S.CardItem>
        {card.flag === 'comment' && <IcAlarmCmt />}
        {card.flag === 'notice' && <IcAlarmNotice />}
        <div>
          <h2>{card.title}</h2>
          <p>{card.date}</p>
        </div>
      </S.CardItem>
    </li>
  );
};

export default Header;
