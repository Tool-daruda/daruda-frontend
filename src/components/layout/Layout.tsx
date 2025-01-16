import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import { HEADER_STATE, HeaderState } from '@constants/headerState';
import styled from '@emotion/styled';
import { Outlet } from 'react-router';

const Layout = () => {
  // Header 상태 설정 (로그인 전)
  const headerState: HeaderState = HEADER_STATE.LOGGED_OUT;

  return (
    <S.LayoutWrapper>
      <Header headerState={headerState} />
      <S.ContentWrapper>
        <Outlet />
      </S.ContentWrapper>
      <Footer />
    </S.LayoutWrapper>
  );
};

export default Layout;

const S = {
  LayoutWrapper: styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `,
  ContentWrapper: styled.div`
    flex: 1;
  `,
};
