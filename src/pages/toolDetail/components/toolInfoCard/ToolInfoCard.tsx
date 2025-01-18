import { IcArrowRightupWhite24, IcBookmarkIris121Default, IcShareIris125 } from '@assets/svgs';
import Chip from '@components/chip/Chip';
import { ToolType } from '@pages/toolDetail/types';
import { useState } from 'react';

import * as S from './ToolInfoCard.styled';

export interface ToolInfoCardPropTypes {
  toolData: ToolType;
}

const ToolInfoCard = ({ toolData }: ToolInfoCardPropTypes) => {
  const { toolMainName, toolSubName, description, toolLink, supportKorea, platform, toolLogo, license, updatedAt } =
    toolData;
  const [isClickBtn, setIsClickBtn] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);

  const handleClickBtn = () => {
    setIsClickBtn((prev) => !prev);
    window.location.href = toolLink;
  };

  const handleBookmark = () => {
    setIsBookmark((prev) => !prev);
  };

  return (
    <S.ToolInfoCardWrapper>
      <S.LeftContainer>
        <S.ToolImgBox>{toolLogo ? <img src={toolLogo} alt="툴 이미지" /> : '툴 이미지'}</S.ToolImgBox>
        <S.ToolInfoBox>
          <S.Description>
            <S.ToolNameBox>
              <span>{toolMainName}</span>
              <span>{toolSubName}</span>
            </S.ToolNameBox>
            {description}
            <S.UpdateBox>
              <p>최근 업데이트</p>
              <p>{updatedAt}</p>
            </S.UpdateBox>
          </S.Description>
          <S.ButtonBox>
            <S.GoSiteBtn $isClickBtn={isClickBtn} onClick={() => handleClickBtn()}>
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
            <Chip size="xsmall" active={true}>
              <Chip.RectContainer>
                <Chip.Label>{license}</Chip.Label>
              </Chip.RectContainer>
            </Chip>
          </S.License>

          {/* 한국어 지원 여부 */}
          <S.KoreanSupport>
            <span>한국어 지원</span>
            <Chip size="xsmall" active={true}>
              <Chip.RectContainer>
                <Chip.Label>{supportKorea ? 'O' : 'X'}</Chip.Label>
              </Chip.RectContainer>
            </Chip>
          </S.KoreanSupport>
        </S.TopBox>

        <S.BottomBox>
          <span>플랫폼</span>
          <S.PlatformBtn>
            {platform.length > 0 &&
              Object.entries(platform[0])
                .filter(([_, value]) => {
                  void _;
                  return value;
                })
                .map(([key]) => (
                  <Chip key={key} size="xsmall" active={true}>
                    <Chip.RectContainer>
                      <Chip.Label>{key}</Chip.Label>
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
