import { ImgTextlogo } from '@assets/svgs';

import * as S from './TopBanner.styled';

const TopBanner = () => {
  return (
    <S.BannerWrapper>
      <S.BackCards />
      <S.BannerContainer>
        <S.BannerTitle>
          대학생활에 필요한 툴을 다루다, <ImgTextlogo />{' '}
        </S.BannerTitle>
        공부, 과제, 팀플, 동아리, 대외활동에서 주로 사용하는 인기 툴부터 무료 툴까지 <br />
        한눈에 파악하고 지금 내게 필요한 툴을 선택하세요.
      </S.BannerContainer>
    </S.BannerWrapper>
  );
};

export default TopBanner;
