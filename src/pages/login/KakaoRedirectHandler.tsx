import { useEffect } from 'react';

import { sendAuthorization } from './apis/api';

const KakaoRedirectHandler = () => {
  const handleAuthorization = async () => {
    const code = new URL(window.location.href).searchParams.get('code');

    if (code) {
      try {
        // 인가 코드를 서버로 전송
        await sendAuthorization(code);
      } catch (error: unknown) {
        console.error('인가 코드 처리 중 에러 발생:', error);

        if (error instanceof Error) {
          if (error.message === 'Authorization code가 만료되었습니다.') {
            alert('인가 코드가 만료되었습니다. 다시 로그인해주세요.');
            // 카카오 로그인 페이지로 리다이렉트
            window.location.href = '/kakao-login';
          } else {
            alert('로그인 처리 중 문제가 발생했습니다. 다시 시도해주세요.');
          }
        } else {
          alert('예상치 못한 오류가 발생했습니다.');
        }
      }
    } else {
      alert('인가 코드가 없습니다. 로그인 페이지로 돌아갑니다.');
      window.location.href = '/kakao-login';
    }
  };

  useEffect(() => {
    handleAuthorization();
  }, []);

  return <></>;
};

export default KakaoRedirectHandler;
