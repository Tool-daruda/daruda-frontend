import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import { HEADER_STATE, HeaderState } from '@constants/headerState';
import styled from '@emotion/styled';
import MyPageTab from '@pages/myPage/components/tab/MyPageTab';
import { MENU_LIST } from '@pages/myPage/constants/menuList';
import { ReactNode, useState } from 'react';
import { Outlet } from 'react-router';

const MyPageLayout = () => {
  // Header 상태 설정 (로그인 후)
  const headerState: HeaderState = HEADER_STATE.LOGGED_IN;

  return (
    <>
      <Header headerState={headerState} />
      <MyPageContainer>
        <Outlet />
      </MyPageContainer>
      <Footer />
    </>
  );
};
export default MyPageLayout;

const MyPageContainer = ({ children }: { children: ReactNode }) => {
  const [activeMenu, setActiveMenu] = useState(1);

  const handleActiveMenu = (id: number) => {
    setActiveMenu(id);
  };

  return (
    <S.LayoutWrapper>
      <h1>마이페이지</h1>
      <S.ContentWrapper>
        <MyPageTab activeMenu={activeMenu} handleActiveMenu={handleActiveMenu} />
        <MyPageContent activeMenu={activeMenu}>{children}</MyPageContent>
      </S.ContentWrapper>
    </S.LayoutWrapper>
  );
};

const MyPageContent = ({ activeMenu, children }: { activeMenu: number; children: ReactNode }) => {
  const activeLabel = MENU_LIST.find((menu) => menu.id === activeMenu)?.label;
  return (
    <S.ContentBox>
      <h2>{activeLabel}</h2>
      {children}
    </S.ContentBox>
  );
};

// MyPage 스타일
const S = {
  LayoutWrapper: styled.div`
    width: 104.6rem;
    margin: 0 auto;
    padding-bottom: 7.2rem;

    h1 {
      padding: 2.8rem 0;

      color: ${({ theme }) => theme.colors.black};

      ${({ theme }) => theme.fonts.body_24_b};
    }
  `,
  ContentWrapper: styled.div`
    display: flex;
    width: 104.6rem;
    height: 62.8rem;

    background-color: ${({ theme }) => theme.colors.white1};
    border-radius: 2rem;
  `,
  ContentBox: styled.section`
    padding-top: 2.8rem;
    padding-left: 3.6rem;

    h2 {
      color: ${({ theme }) => theme.colors.black};

      ${({ theme }) => theme.fonts.body_20_b};
    }
  `,
};
