import { useEffect } from 'react';

import { sendAuthorization } from './apis/postKakaoToken';

const KakaoRedirectHandler = () => {
  useEffect(() => {
    const handleAuthorization = async () => {
      const code = new URL(window.location.href).searchParams.get('code');

      if (!code) {
        alert('인가 코드가 없습니다. 로그인 페이지로 돌아갑니다.');
        window.location.href = '/login';
        return;
      }

      try {
        const response = await sendAuthorization(code);

        if (response.isUser) {
          // 기존 유저
          localStorage.setItem(
            'user',
            JSON.stringify({
              accessToken: response.jwtTokenResponse?.accessToken,
              refreshToken: response.jwtTokenResponse?.refreshToken,
            }),
          );
          window.location.href = '/';
        } else {
          // 신규 유저
          localStorage.setItem('user', JSON.stringify({ email: response.data?.email }));
          alert('회원가입이 필요합니다. 회원가입 페이지로 이동합니다.');
          window.location.href = '/signup';
        }
      } catch (error) {
        console.error('인가 코드 처리 중 에러 발생:', error);
        alert('로그인 처리 중 문제가 발생했습니다. 다시 시도해주세요.');
        window.location.href = '/login';
      }
    };

    handleAuthorization();
  }, []);

  return <></>;
};

export default KakaoRedirectHandler;
