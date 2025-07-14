import styled from '@emotion/styled';
import { Outlet, ScrollRestoration } from 'react-router';

import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';

const Layout = () => {
  return (
    <>
      <ScrollRestoration getKey={(location) => location.pathname} />
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
