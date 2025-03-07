import { useToolScrap } from '@apis/tool/queries';
import Chip from '@components/chip/Chip';
import LoadingLottie from '@components/lottie/Loading';
import Toast from '@components/toast/Toast';
import { useToastOpen } from '@pages/CommunityDetail/hooks';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './ToolCard.styled';

import { fetchToolsByCategory } from '../../apis/api';
import { Tool, getLicenseBadgeContent, FetchToolsResponse } from '../../utils/toolCard/ToolCard.utils';

interface ToolCardProps {
  selectedCategory: string;
  isFree: boolean;
  criteria: 'popular' | 'createdAt';
  onCategoryChange: (category: string) => void;
}

const ToolCard = ({ selectedCategory, isFree, criteria }: ToolCardProps) => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [cursor, setCursor] = useState<number | null>(null);
  const navigate = useNavigate();
  const { mutate: addBookmark } = useToolScrap();
  const { isToastOpen, handleModalOpen } = useToastOpen();

  const [isFailed, setIsFailed] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const isKorean = (text: string): boolean => /[가-힣]/.test(text);

  const fetchTools = async (isReset = false) => {
    if (isLoading || (!hasMore && !isReset)) return;

    setIsLoading(true);

    try {
      const response = await fetchToolsByCategory(selectedCategory, isFree, criteria, isReset ? null : cursor);
      const { tools: newTools, scrollPaginationDto } = response.data as FetchToolsResponse;
      const formattedTools: Tool[] = newTools.map((tool) => ({
        toolId: tool.toolId,
        toolLogo: tool.toolLogo,
        toolName: tool.toolName,
        license: tool.license || 'unknown',
        keywords: tool.keywords || [],
        isScraped: tool.isScraped || false,
        bgColor: tool.bgColor || '#FFFFFF',
        fontColor: tool.fontColor || false,
        description: tool.description || '',
      }));

      setTools((prevTools: Tool[]) => (isReset ? formattedTools : [...prevTools, ...formattedTools]));
      setCursor(scrollPaginationDto.nextCursor);
      setHasMore(scrollPaginationDto.nextCursor !== -1);
    } catch (error) {
      console.error('Error fetching tools:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight } = document.documentElement;
    const clientHeight = window.innerHeight;

    if (scrollHeight - scrollTop <= clientHeight + 10 && hasMore) {
      fetchTools();
    }
  }, [isLoading, hasMore, selectedCategory, isFree, criteria, cursor]);

  useEffect(() => {
    fetchTools(true);
  }, [selectedCategory, isFree, criteria]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const toggleBookmark = async (e: React.MouseEvent, toolId: number, isScraped: boolean) => {
    e.stopPropagation();

    const isLoggedIn = localStorage.getItem('user') !== null;

    if (!isLoggedIn) {
      setIsFailed(true);
      setToastMessage('로그인 후 이용가능합니다.');
      handleModalOpen();
      return;
    }

    try {
      await addBookmark(toolId);
      setTools((prevTools) =>
        prevTools.map((tool) => (tool.toolId === toolId ? { ...tool, isScraped: !isScraped } : tool)),
      );
      setIsFailed(false);
      setToastMessage(!isScraped ? '북마크가 되었어요' : '북마크가 취소되었어요');
      handleModalOpen();
    } catch (error) {
      console.error('북마크 처리 중 오류 발생:', error);
    }
  };

  const navigateToDetail = (toolId: number) => {
    navigate(`/toollist/${toolId}`);
  };

  return (
    <S.Container>
      <S.CardList>
        {tools.length === 0 && !isLoading && <S.EmptyMessage>등록된 무료 툴이 없어요</S.EmptyMessage>}
        {tools?.map((tool) => (
          <S.Card key={tool.toolId} onClick={() => navigateToDetail(tool.toolId)}>
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
                    onClick={(e) => toggleBookmark(e, tool.toolId, tool.isScraped)}
                    bookmarked={tool.isScraped}
                    isToastOpen={isToastOpen}
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
      <S.Lottie>{isLoading && <LoadingLottie />}</S.Lottie>
      {isToastOpen && (
        <Toast isVisible={isToastOpen} isWarning={isFailed}>
          {toastMessage}
        </Toast>
      )}
    </S.Container>
  );
};

export default ToolCard;
