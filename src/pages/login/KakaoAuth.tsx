import { ImgDarudalogo40 } from '@assets/svgs';

import SvgKakaoVector from './assets/KakaoVector';
import * as S from './KakaoAuth.styled';

const KakaoAuth = () => {
  return (
    <S.LogintWrapper>
      <S.Container>
        <S.LogoSection>
          <ImgDarudalogo40 width={407} height={120} />
        </S.LogoSection>
        <pre>모든 대학생이 찾는 솔루션, 다루다에서 만나보세요.</pre>
        <S.LoginButtonContainer>
          <S.LoginButton>
            <S.LoginButtonInput>
              <SvgKakaoVector />
              <p>카카오 로그인</p>
            </S.LoginButtonInput>
          </S.LoginButton>
        </S.LoginButtonContainer>
      </S.Container>
    </S.LogintWrapper>
  );
};

export default KakaoAuth;
