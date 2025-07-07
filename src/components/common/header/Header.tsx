import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Category } from './category/Category';
import * as S from './Header.styled';
import { useReadMutation, useRecentNotiListQuery } from '@apis/notification';
import { IcAlarmBlack24, IcProfileBlack24, ImgDarudalogo40, AlarmHead } from '@assets/svgs';
import { NotiModal } from '@components/modal';
import NotificationCard from '@components/notiCard/NotiCard';
import useNotiClick from '@pages/notification/hooks/useNotiClick';

interface HeaderProps {
  forOnboarding?: boolean;
}

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

const SearchInput = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && keyword.trim()) {
      navigate(`/search?keyword=${encodeURIComponent(keyword.trim())}`);
    }
  };
  return (
    <S.SearchBar>
      <S.IcSearchGray />
      <S.Search
        placeholder="무엇이든 검색해보세요."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </S.SearchBar>
  );
};

const Auth = () => {
  const user = localStorage.getItem('user');
  const navigate = useNavigate();
  const [isHover, setIsHovered] = useState(false);
  const { data: recentList } = useRecentNotiListQuery(!!user);
  const { mutate: readMutation } = useReadMutation();
  const { isModalOpen, openedNoti, handleModalClose, handleReadClick } = useNotiClick(readMutation, recentList);

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

  const hasUnreadNotification = recentList?.some((notification) => !notification.isRead);

  if (user) {
    return (
      <S.AuthSection aria-label="알림/마이페이지">
        <li>
          <SearchInput />
        </li>
        <li>
          <S.StyledAnchor href="https://tally.so/r/w5VJPv" target="_blank">
            {HEADER_TEXTS.support}
          </S.StyledAnchor>
        </li>
        <li>
          <S.NotiWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {hasUnreadNotification && <S.UnreadBadgeDot />}
            <S.NotificationButton aria-label="알림 확인" onClick={() => navigate('/notification')}>
              <IcAlarmBlack24 />
            </S.NotificationButton>
            {hasUnreadNotification && recentList && recentList.length > 0 && (
              <S.HoverContent onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} $visible={isHover}>
                <S.HoverLayout>
                  <AlarmHead />
                  <S.CardHeader>
                    <h1>알림</h1>
                    <Link to="/notification">더보기</Link>
                  </S.CardHeader>
                  <S.CardContainer>
                    {recentList?.map((card) => (
                      <NotificationCard card={card} key={card.id} handleClick={handleReadClick} />
                    ))}
                  </S.CardContainer>
                </S.HoverLayout>
              </S.HoverContent>
            )}
          </S.NotiWrapper>
        </li>
        <li>
          <S.StyledLink to="/mypage">
            <S.MyPageButton aria-label="마이페이지">
              <IcProfileBlack24 />
            </S.MyPageButton>
          </S.StyledLink>
        </li>
        {openedNoti && (
          <NotiModal
            isOpen={isModalOpen}
            handleClose={handleModalClose}
            title={openedNoti?.title}
            content={openedNoti?.content}
          />
        )}
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
