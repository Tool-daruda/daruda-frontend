import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import ScrollToTop from '@components/scrollTop/ScrollTop';
import styled from '@emotion/styled';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <S.LayoutWrapper>
        <Header forOnboarding={false} />
        <S.ContentWrapper>
          <Outlet />
        </S.ContentWrapper>
        <Footer />
      </S.LayoutWrapper>
    </>
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
