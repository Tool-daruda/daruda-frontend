import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation(); // useLocation 사용

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 상단으로 스크롤
  }, [location.pathname]); // pathname이 변경될 때마다 실행

  return null;
};

export default ScrollToTop;
