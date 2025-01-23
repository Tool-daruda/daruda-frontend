import Chip from '@components/chip/Chip';
import LoadingLottie from '@components/lottie/Loading';
import { useEffect, useState, useCallback } from 'react';

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

  const toggleBookmark = (toolId: number) => {
    setTools((prevTools) =>
      prevTools?.map((tool) => (tool.toolId === toolId ? { ...tool, isScraped: !tool.isScraped } : tool)),
    );
  };

  return (
    <S.Container>
      <S.CardList>
        {tools?.map((tool) => (
          <S.Card key={tool.toolId}>
            <S.CardFront bgColor={tool.bgColor}>
              <S.ToolLogo src={tool.toolLogo} alt={`${tool.toolName} 로고`} />
              <S.ToolFront>
                <S.ToolNameFront fontColor={tool.fontColor}>{tool.toolName}</S.ToolNameFront>
              </S.ToolFront>
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
                  <S.ToolBackTitle>{tool.toolName}</S.ToolBackTitle>
                  <S.BookMark onClick={() => toggleBookmark(tool.toolId)} bookmarked={tool.isScraped} />
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
      {isLoading && <LoadingLottie />}
    </S.Container>
  );
};

export default ToolCard;
