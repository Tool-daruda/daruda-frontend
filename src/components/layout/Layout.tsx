import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import { HEADER_STATE, HeaderState } from '@constants/headerState';
import { Outlet } from 'react-router';

const Layout = () => {
  // Header 상태 설정 (로그인 전)
  const headerState: HeaderState = HEADER_STATE.LOGGED_OUT;

  return (
    <>
      <Header headerState={headerState} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
