import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation(); // useLocation 사용

  useEffect(() => {
    const storedScrollPos = sessionStorage.getItem('scrollPosition');

    if (location.pathname === '/community' || location.pathname === '/toollist') {
      window.scroll(0, parseInt(storedScrollPos || '0', 10));
      sessionStorage.removeItem('scrollPosition');
    } else {
      window.scrollTo(0, 10);
    }
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
