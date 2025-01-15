import { useEffect, useState, useCallback } from 'react';

import * as S from './ToolCard.styled';

import Chip from '../../../../components/common/chip/Chip';
import { getLicenseBadgeContent } from '../../utils/toolCard/ToolCard.utils';

interface Tool {
  toolId: number;
  toolName: string;
  toolLogo: string;
  description: string;
  license: string;
  keywords: string[];
  backgroundColor: string;
  textColor: boolean;
}

const ToolCard = () => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [bookmarked, setBookmarked] = useState<boolean>(false);

  const mockData = () => {
    return {
      status: 200,
      data: {
        tools: [
          {
            toolId: 1,
            toolName: 'ElevenLabs',
            toolLogo: './svgs/img_modalexit2.svg',
            description: 'AI 오디오 플ssssssssssssssss랫폼으로 가장 현실적인 음성을 만들어보세요',
            license: 'PAID',
            keywords: ['AI', '음성', '생산성'],
            backgroundColor: '#fed687',
            textColor: true,
          },
          {
            toolId: 2,
            toolName: 'ChatGPT',
            toolLogo: './svgs/img_modalcheck.svg',
            description: '즉각적인 답변, 더 높은 생산성, 무한한 영감',
            license: 'FREE',
            keywords: ['그래픽 제작', '디자인', '3D'],
            backgroundColor: '#badcf9',
            textColor: false,
          },
          {
            toolId: 3,
            toolName: 'Figma',
            toolLogo: './svgs/img_modalexit.svg',
            description: '디자인 협업의 새로운 표준',
            license: 'PAID',
            keywords: ['AI', '음성', '생산성'],
            backgroundColor: '#c3f9c7',
            textColor: true,
          },
        ],
      },
    };
  };

  const fetchTools = async () => {
    if (isLoading) return;
    setIsLoading(true);

    const data = mockData();

    setTools((prevTools) => [...prevTools, ...data.data.tools]);
    setHasMore(data.data.tools.length > 0);
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

  const toggleBookmark = () => {
    setBookmarked((prev) => !prev);
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
                  <S.BookMark onClick={toggleBookmark} bookmarked={bookmarked} />
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
      {isLoading && <S.LoadingSpinner>Loading...</S.LoadingSpinner>}
    </S.Container>
  );
};

export default ToolCard;
