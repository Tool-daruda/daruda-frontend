import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

import * as S from './ToolCard.styled';
import { useToolScrapMutation, useToolListQuery } from '@apis/tool';
import Chip from '@components/chip/Chip';
import LoadingLottie from '@components/lottie/Loading';
import Toast from '@components/toast/Toast';
import { useToastOpen } from '@hooks/index';
import { useAnalytics } from 'src/hoc/useAnalytics';

import { getLicenseBadgeContent } from '../../utils/ToolCard.utils';

interface ToolCardProps {
  selectedCategory: string;
  isFree: boolean;
  criteria: 'popular' | 'createdAt';
  onCategoryChange: (category: string) => void;
}

const ToolCard = ({ selectedCategory, isFree, criteria }: ToolCardProps) => {
  const navigate = useNavigate();
  const { trackEvent } = useAnalytics();
  const { mutate: addBookmark, isError: bookmarkFailed } = useToolScrapMutation(isFree, selectedCategory, criteria);
  const { isToastOpen, handleModalOpen, toastMessage, handleMessageChange } = useToastOpen();
  const { inView, ref } = useInView();

  const {
    data: fetchListData,
    fetchNextPage,
    isLoading,
    hasNextPage,
    isFetching,
  } = useToolListQuery({ category: selectedCategory, isFree, criteria });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const ToolList = fetchListData?.pages.map((item) => item.tools).flat();

  const isKorean = (text: string): boolean => /[가-힣]/.test(text);

  const toggleBookmark = async (e: React.MouseEvent, toolId: number, isScraped: boolean, toolName: string) => {
    e.stopPropagation();

    const isLoggedIn = localStorage.getItem('user') !== null;

    addBookmark(toolId, {
      onSuccess: () => {
        handleModalOpen();
        handleMessageChange(!isScraped ? '북마크가 되었어요' : '북마크가 취소되었어요');
        trackEvent('Tool_Click', {
          [!isScraped ? 'Bookmark' : 'Bookmark_Cancel']: toolName,
        });
      },
      onError: (error) => {
        if (!isLoggedIn) {
          handleMessageChange('로그인 후 이용가능합니다.');
          handleModalOpen();
          return;
        }
        console.error('북마크 추가 실패:', error);
      },
    });
  };

  const navigateToDetail = (toolId: number) => {
    sessionStorage.setItem('toolListScrollY', String(window.scrollY));
    navigate(`/toollist/${toolId}`);
  };

  return (
    <S.Container>
      <S.CardList>
        {ToolList?.length === 0 && !isLoading && <S.EmptyMessage>등록된 무료 툴이 없어요</S.EmptyMessage>}
        {ToolList?.map((tool) => (
          <S.Card
            key={tool.toolId}
            onClick={() => {
              trackEvent('Tool_Click', { Tool_Card: tool.toolName });
              navigateToDetail(tool.toolId);
            }}
          >
            <S.CardFront bgColor={tool.bgColor}>
              <S.ToolLogo src={tool.toolLogo} alt={`${tool.toolName} 로고`} />
              <S.ToolNameFront fontColor={tool.fontColor} isKorean={isKorean(tool.toolName)}>
                {tool.toolName}
              </S.ToolNameFront>
              <S.KeywordsFront>
                {tool.keywords?.map((keyword, index) => (
                  <Chip
                    key={index}
                    size={tool.bgColor === '#FFFFFF' ? 'custom' : 'xsmall'}
                    stroke={false}
                    active={false}
                  >
                    <Chip.RectContainer>
                      <Chip.Label>{keyword}</Chip.Label>
                    </Chip.RectContainer>
                  </Chip>
                ))}
              </S.KeywordsFront>
            </S.CardFront>
            <S.CardBack>
              <S.CardBackBox>
                <S.ToolNameBack>
                  <S.ToolBackTitle isKorean={isKorean(tool.toolName)}>{tool.toolName}</S.ToolBackTitle>
                  <S.BookMark
                    onClick={(e) => toggleBookmark(e, tool.toolId, tool.isScraped, tool.toolName)}
                    bookmarked={tool.isScraped}
                  />
                </S.ToolNameBack>
                <S.Description>{tool.description}</S.Description>
                <S.LicenseBadge>
                  {getLicenseBadgeContent(tool.license).icon}
                  {getLicenseBadgeContent(tool.license).text}
                </S.LicenseBadge>
                <S.Keywords>
                  {tool.keywords?.map((keyword, index) => (
                    <Chip key={index} size="xsmall" stroke={true} active={true}>
                      <Chip.RectContainer>
                        <Chip.Label>{keyword}</Chip.Label>
                      </Chip.RectContainer>
                    </Chip>
                  ))}
                </S.Keywords>
              </S.CardBackBox>
            </S.CardBack>
          </S.Card>
        ))}
      </S.CardList>
      {(isLoading || isFetching) && (
        <S.Lottie>
          <LoadingLottie />
        </S.Lottie>
      )}
      {hasNextPage ? <div ref={ref} /> : null}
      {isToastOpen && (
        <Toast isVisible={isToastOpen} isWarning={bookmarkFailed}>
          {toastMessage}
        </Toast>
      )}
    </S.Container>
  );
};

export default ToolCard;
