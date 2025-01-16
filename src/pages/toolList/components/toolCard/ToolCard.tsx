import Chip from '@components/chip/Chip';
import LoadingLottie from '@components/lottie/LoadingLottie';
import { toolMockData, Tool } from '@pages/toolList/mocks/toolCard/ToolMockData';
import { useEffect, useState, useCallback } from 'react';

import * as S from './ToolCard.styled';

import { getLicenseBadgeContent } from '../../utils/toolCard/ToolCard.utils';

const ToolCard = () => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchTools = async () => {
    if (isLoading) return;
    setIsLoading(true);

    const data = toolMockData;

    if (data.status === 200 && data.data.tools.length > 0) {
      setTools((prevTools) => [...prevTools, ...data.data.tools]);
      setHasMore(true);
    } else {
      setHasMore(false);
    }

    setIsLoading(false);
  };

  const handleScroll = useCallback(() => {
    const bottom = document.documentElement.scrollHeight === document.documentElement.scrollTop + window.innerHeight;
    if (bottom && !isLoading && hasMore) {
      fetchTools();
    }
  }, [isLoading, hasMore]);

  useEffect(() => {
    fetchTools();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const toggleBookmark = (toolId: number) => {
    setTools((prevTools) =>
      prevTools.map((tool) => (tool.toolId === toolId ? { ...tool, bookmarked: !tool.bookmarked } : tool)),
    );
  };

  return (
    <S.Container>
      <S.CardList>
        {tools.map((tool) => (
          <S.Card key={tool.toolId}>
            <S.CardFront bgColor={tool.backgroundColor}>
              <S.ToolLogo src={tool.toolLogo} alt={`${tool.toolName} 로고`} />
              <S.ToolNameFront textColor={tool.textColor}>{tool.toolName}</S.ToolNameFront>
              <S.KeywordsFront>
                {tool.keywords.map((keyword, index) => (
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
                  {tool.toolName}
                  <S.BookMark onClick={() => toggleBookmark(tool.toolId)} bookmarked={tool.bookmarked} />
                </S.ToolNameBack>
                <S.Description>{tool.description}</S.Description>
                <S.LicenseBadge>
                  {getLicenseBadgeContent(tool.license).icon}
                  {getLicenseBadgeContent(tool.license).text}
                </S.LicenseBadge>
                <S.Keywords>
                  {tool.keywords.map((keyword, index) => (
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
