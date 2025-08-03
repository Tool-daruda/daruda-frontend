import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router';

import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import { useAnalytics } from 'src/hoc/useAnalytics';

const Layout = () => {
  const location = useLocation();
  const { trackPageView, isReady } = useAnalytics();

  useEffect(() => {
    if (isReady) {
      console.log('[TRACKING] Page URL', location.pathname);
      trackPageView();
    } else {
      console.log('Mixpanel이 아직 준비되지 않았습니다');
    }
  }, [location.pathname, isReady, trackPageView]);

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
