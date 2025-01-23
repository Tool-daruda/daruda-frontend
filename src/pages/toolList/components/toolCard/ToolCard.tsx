import Chip from '@components/chip/Chip';
import LoadingLottie from '@components/lottie/Loading';
import { toolMockData, Tool } from '@pages/toolList/mocks/toolCard/ToolMockData';
import { useEffect, useState, useCallback } from 'react';

import * as S from './ToolCard.styled';

import { getLicenseBadgeContent } from '../../utils/toolCard/ToolCard.utils';

const ToolCard = () => {
  const [tools, setTools] = useState<Tool[]>(toolMockData.data.tools);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(toolMockData.data.scrollPaginationDto.nextCursor !== -1);

  const fetchTools = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    try {
      const nextCursor = toolMockData.data.scrollPaginationDto.nextCursor;
      if (nextCursor === -1) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching tools:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight } = document.documentElement;
    const clientHeight = window.innerHeight;

    if (scrollHeight - scrollTop === clientHeight && hasMore) {
      fetchTools();
    }
  }, [isLoading, hasMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const toggleBookmark = (toolId: number) => {
    setTools((prevTools) =>
      prevTools?.map((tool) => (tool.toolId === toolId ? { ...tool, bookmarked: !tool.bookmarked } : tool)),
    );
  };

  return (
    <S.Container>
      <S.CardList>
        {tools?.map((tool) => (
          <S.Card key={tool.toolId}>
            <S.CardFront bgColor={tool.backgroundColor}>
              <S.ToolLogo src={tool.toolLogo} alt={`${tool.toolName} 로고`} />
              <S.ToolFront>
                <S.ToolNameFront textColor={tool.textColor}>{tool.toolName}</S.ToolNameFront>
              </S.ToolFront>
              <S.KeywordsFront>
                {tool.keywords?.map((keyword, index) => (
                  <Chip key={index} size="xsmall" stroke={false} active={false}>
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
                  <S.BookMark onClick={() => toggleBookmark(tool.toolId)} bookmarked={tool.bookmarked} />
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
