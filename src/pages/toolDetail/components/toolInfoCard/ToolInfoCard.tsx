import { useToolScrap } from '@apis/tool/queries';
import { IcArrowRightupWhite24, IcBookmarkIris121Default, IcShareIris125 } from '@assets/svgs';
import Chip from '@components/chip/Chip';
import { ToolType } from '@pages/toolDetail/types';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import * as S from './ToolInfoCard.styled';

export interface ToolInfoCardPropTypes {
  toolData: ToolType;
}

const ToolInfoCard = ({ toolData }: ToolInfoCardPropTypes) => {
  const {
    toolMainName,
    toolSubName,
    description,
    supportKorea,
    platform,
    toolLogo,
    license,
    updatedAt,
    toolId,
    isScrapped,
    toolLink,
  } = toolData;

  const [isClickBtn, setIsClickBtn] = useState(false);
  const [isBookmark, setIsBookmark] = useState(isScrapped);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isToastWarning, setIsToastWarning] = useState(false);

  const toolScrapMutation = useToolScrap();

  const darudaToolLink = useLocation();
  const baseURL = import.meta.env.VITE_CLIENT_URL;

  const handleCopyClipBoard = async (darudaToolLink: string) => {
    try {
      await navigator.clipboard.writeText(darudaToolLink);
      setToastMessage('클립보드에 링크가 복사되었어요.');
      setIsToastWarning(false);
    } catch (err) {
      console.error('클립보드 복사 실패:', err);
      setToastMessage('링크 복사에 실패했어요.');
      setIsToastWarning(true);
    }
  };

  const isUserLoggedIn = () => {
    try {
      const user = localStorage.getItem('user');
      if (!user) return false;

      const parsedUser = JSON.parse(user);
      // accessToken이 존재하면 true 반환
      return !!parsedUser.accessToken;
    } catch (error) {
      console.error('로그인 상태 확인 중 오류 발생:', error);
      return false; // 파싱 오류 시 false 반환
    }
  };

  const handleClickBtn = () => {
    setIsClickBtn((prev) => !prev);
    window.location.href = toolLink;
  };

  const handleBookmark = async () => {
    if (!isUserLoggedIn()) {
      // 로그인하지 않은 경우
      setIsToastWarning(true);
      setToastMessage('로그인 후 이용해주세요');
      return;
    }

    // 로그인한 경우 북마크 상태 토글
    setIsBookmark((prev) => !prev);
    try {
      await toolScrapMutation.mutateAsync(toolId);
      if (isBookmark) {
        setToastMessage('북마크가 취소되었어요');
      } else {
        setToastMessage('북마크가 추가되었어요');
      }
      setIsToastWarning(false);
    } catch (error) {
      console.error('북마크 업데이트 실패:', error);
      setIsBookmark((prev) => !prev);
      setIsToastWarning(true);
      setToastMessage('북마크 업데이트 실패');
    }
  };

  return (
    <>
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
              <S.ShareIconBox onClick={() => handleCopyClipBoard(`${baseURL}${darudaToolLink.pathname}`)}>
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
              <Chip size="xsmall" active={true} $forNoCursor={true}>
                <Chip.RectContainer>
                  <Chip.Label>{license}</Chip.Label>
                </Chip.RectContainer>
              </Chip>
            </S.License>

            {/* 한국어 지원 여부 */}
            <S.KoreanSupport>
              <span>한국어 지원</span>
              <Chip size="xsmall" active={true} $forNoCursor={true}>
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
                    <Chip key={key} size="xsmall" active={true} $forNoCursor={true}>
                      <Chip.RectContainer>
                        <Chip.Label>{key}</Chip.Label>
                      </Chip.RectContainer>
                    </Chip>
                  ))}
            </S.PlatformBtn>
          </S.BottomBox>
        </S.RightContainer>
      </S.ToolInfoCardWrapper>
      {toastMessage && (
        <S.StyledToast isVisible={!!toastMessage} isWarning={isToastWarning}>
          {toastMessage}
        </S.StyledToast>
      )}
    </>
  );
};

export default ToolInfoCard;
