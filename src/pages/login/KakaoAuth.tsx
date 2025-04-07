import SvgKakaoVector from './assets/KakaoVector';
import * as S from './KakaoAuth.styled';
import { getKakaoLogin } from '@apis/auth';
import { ImgDarudalogo40 } from '@assets/svgs';
import Title from '@components/title/Title';

const KakaoAuth = () => {
  const handleKakaoLogin = async () => {
    try {
      // 기존 로그인 정보 제거
      localStorage.removeItem('user');
      await getKakaoLogin();
    } catch (error) {
      console.error('카카오 로그인 요청 처리 중 에러 발생:', error);
    }
  };
  return (
    <>
      <Title title="로그인" />
      <S.LogintWrapper>
        <S.Container>
          <S.LogoSection>
            <ImgDarudalogo40 width={407} height={120} />
          </S.LogoSection>
          <span>모든 대학생이 찾는 솔루션, 다루다에서 만나보세요.</span>
          <S.LoginButtonContainer>
            <S.LoginButton aria-label="카카오 로그인" onClick={handleKakaoLogin}>
              <SvgKakaoVector />
              <p>카카오 로그인</p>
            </S.LoginButton>
          </S.LoginButtonContainer>
        </S.Container>
      </S.LogintWrapper>
    </>
  );
};

export default KakaoAuth;
