import { useToolScrap } from '@apis/tool/queries';
import { IcArrowRightupWhite24, IcBookmarkIris121Default, IcShareIris125 } from '@assets/svgs';
import Chip from '@components/chip/Chip';
import { useToastOpen } from '@pages/CommunityDetail/hooks';
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

  const { handleModalOpen, isToastOpen } = useToastOpen(); // useToastOpen 훅 사용

  const toolScrapMutation = useToolScrap();

  const darudaToolLink = useLocation();
  const baseURL = import.meta.env.VITE_CLIENT_URL;

  const handleCopyClipBoard = async (darudaToolLink: string) => {
    try {
      await navigator.clipboard.writeText(darudaToolLink);
      setToastMessage('클립보드에 링크가 복사되었어요.');
      setIsToastWarning(false);
      handleModalOpen();
    } catch (err) {
      console.error('클립보드 복사 실패:', err);
      setToastMessage('링크 복사에 실패했어요.');
      setIsToastWarning(true);
      handleModalOpen();
    }
  };

  const isUserLoggedIn = () => {
    try {
      const user = localStorage.getItem('user');
      if (!user) return false;

      const parsedUser = JSON.parse(user);
      return !!parsedUser.accessToken;
    } catch (error) {
      console.error('로그인 상태 확인 중 오류 발생:', error);
      return false;
    }
  };

  const handleClickBtn = () => {
    setIsClickBtn((prev) => !prev);
    window.location.href = toolLink;
  };

  const handleBookmark = async () => {
    if (!isUserLoggedIn()) {
      setIsToastWarning(true);
      setToastMessage('로그인 후 이용해주세요');
      handleModalOpen();
      return;
    }

    setIsBookmark((prev) => !prev);
    try {
      await toolScrapMutation.mutateAsync(toolId);
      if (isBookmark) {
        setToastMessage('북마크가 취소되었어요');
      } else {
        setToastMessage('북마크가 추가되었어요');
      }
      setIsToastWarning(false);
      handleModalOpen();
    } catch (error) {
      console.error('북마크 업데이트 실패:', error);
      setIsBookmark((prev) => !prev);
      setIsToastWarning(true);
      setToastMessage('북마크 업데이트 실패');
      handleModalOpen();
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
            <S.License>
              <span>라이센스</span>
              <Chip size="xsmall" active={true} $forNoCursor={true}>
                <Chip.RectContainer>
                  <Chip.Label>{license}</Chip.Label>
                </Chip.RectContainer>
              </Chip>
            </S.License>
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
                  .filter(([, value]) => value)
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
      {toastMessage && isToastOpen && (
        <S.StyledToast isVisible={!!toastMessage} isWarning={isToastWarning}>
          {toastMessage}
        </S.StyledToast>
      )}
    </>
  );
};

export default ToolInfoCard;
