import imgBanner from '@assets/images/img_banner_attached.png';
import { ImgTextlogo } from '@assets/svgs';
import { BANNER_CHIP } from '@pages/community/constants/constants';

import * as S from './Banner.styles';

const Banner = () => {
  return (
    <S.BannerWrapper>
      <S.MainImgBanner src={imgBanner} />
      <S.BannerContainer>
        <S.BannerTitle>
          자유로운 정보 공유, <br />
          <ImgTextlogo /> 커뮤니티에서 살펴보세요.
        </S.BannerTitle>
        <S.ModalChipsContainer>
          {BANNER_CHIP.map((item, i) => (
            <S.ModalChip key={i}>
              <S.ModalChipText>{item.text}</S.ModalChipText>
            </S.ModalChip>
          ))}
        </S.ModalChipsContainer>
      </S.BannerContainer>
    </S.BannerWrapper>
  );
};

export default Banner;
