import { IcArrowRightupWhite24, IcBookmarkIris121Default, IcShareIris125 } from '@assets/svgs';
import Chip from '@components/chip/Chip';
import { useState } from 'react';

import * as S from './ToolInfoCard.styled';

export interface ToolInfoCardProps {
  toolImage: string;
  description: string;
  license: string;
  koreanSupport: boolean;
  platforms: string[];
}

const ToolInfoCard = ({ toolImage, description, license, koreanSupport, platforms }: ToolInfoCardProps) => {
  const [isBookmark, setIsBookmark] = useState(false);
  const handleChipClick = (label: string) => {
    alert(`${label} 버튼 클릭!`);
  };

  const handleBookmark = () => {
    setIsBookmark((prev) => !prev);
  };

  return (
    <S.ToolInfoCardWrapper>
      <S.LeftContainer>
        <S.ToolImgBox>{toolImage ? <img src={toolImage} alt="툴 이미지" /> : '툴 이미지'}</S.ToolImgBox>
        <S.ToolInfoBox>
          <S.Description>
            <S.ToolNameBox>
              <span>Adobe Premiere Pro</span>
              <span>어도비 프리미어 프로</span>
            </S.ToolNameBox>
            {description}
            <S.UpdateBox>
              <p>최근 업데이트</p>
              <p>2025.01.10</p>
            </S.UpdateBox>
          </S.Description>
          <S.ButtonBox>
            <S.GoSiteBtn>
              <IcArrowRightupWhite24 />
              직접 체험해보기
            </S.GoSiteBtn>
            <S.BookmarkIconBox $isBookmark={isBookmark} onClick={() => handleBookmark()}>
              <IcBookmarkIris121Default />
            </S.BookmarkIconBox>
            <S.ShareIconBox>
              <IcShareIris125 />
            </S.ShareIconBox>
          </S.ButtonBox>
        </S.ToolInfoBox>
      </S.LeftContainer>
      <S.RightContainer>
        <S.TopBox>
          {/* 라이센스 정보 */}
          <S.License>
            <span>라이센스</span>
            <Chip size="xsmall" active={true} onClick={() => handleChipClick(license)}>
              <Chip.RectContainer>
                <Chip.Label>{license}</Chip.Label>
              </Chip.RectContainer>
            </Chip>
          </S.License>

          {/* 한국어 지원 여부 */}
          <S.KoreanSupport>
            <span>한국어 지원</span>
            <Chip size="xsmall" active={true} onClick={() => handleChipClick(koreanSupport ? '지원 O' : '지원 X')}>
              <Chip.RectContainer>
                <Chip.Label>{koreanSupport ? 'O' : 'X'}</Chip.Label>
              </Chip.RectContainer>
            </Chip>
          </S.KoreanSupport>
        </S.TopBox>

        <S.BottomBox>
          <span>플랫폼</span>
          <S.PlatformBtn>
            {platforms.map((platform) => (
              <Chip key={platform} size="xsmall" active={true} onClick={() => handleChipClick(platform)}>
                <Chip.RectContainer>
                  <Chip.Label>{platform}</Chip.Label>
                </Chip.RectContainer>
              </Chip>
            ))}
          </S.PlatformBtn>
        </S.BottomBox>
      </S.RightContainer>
    </S.ToolInfoCardWrapper>
  );
};

export default ToolInfoCard;
