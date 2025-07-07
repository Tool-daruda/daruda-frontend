import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import * as S from './Search.styled';
import { useSearchBoardQuery, useSearchToolQuery } from '@apis/search';
import { IcChevron } from '@assets/svgs';
import Card from '@components/postCard/PostCard';
import Spacing from '@components/spacing/Spacing';
import ToolCard from '@components/toolCard/ToolCard';
import TopBanner from '@pages/toolList/components/topBanner/TopBanner';

const Search = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchKeyword = searchParams.get('keyword') || '';
  const [isOpen, setIsOpen] = useState(false);

  // 툴 검색
  const { data: toolData } = useSearchToolQuery(searchKeyword);
  // 커뮤니티 검색
  const { data: boardData } = useSearchBoardQuery(searchKeyword);

  const allBoards = boardData?.pages.flatMap((page) => page?.contents || []) || [];
  // 툴 검색 결과 처리
  const allTools = toolData || [];
  const visibleTools = isOpen ? allTools : allTools.slice(0, 2);

  return (
    <S.SearchWrapper>
      <TopBanner />
      <S.SearchBox>
        <S.SearchResult>
          <h1>{searchKeyword ? `"${searchKeyword}"에 대한 검색결과입니다.` : '검색어를 입력해주세요.'}</h1>
          <h2>툴 리스트</h2>
          <Spacing size="2" />
          <S.CardContainer>
            {visibleTools?.map((tool) => (
              <S.ToolCardWrapper key={tool.toolId}>
                <ToolCard tool={tool} />
                <S.Button
                  onClick={() => {
                    sessionStorage.setItem(
                      'originTool',
                      JSON.stringify({ toolId: tool.toolId, toolLogo: tool.toolLogo, toolName: tool.toolName }),
                    );
                    navigate('/community');
                  }}
                >
                  관련 글 모아보기
                </S.Button>
              </S.ToolCardWrapper>
            ))}
          </S.CardContainer>
        </S.SearchResult>
        {toolData?.length > 2 && (
          <S.Toggle
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            $isOpen={isOpen}
          >
            {isOpen ? '검색결과 접기' : '검색결과 펼치기'}
            <IcChevron />
          </S.Toggle>
        )}
        <S.Divider />
        <S.SearchResult>
          <h2>커뮤니티 전체</h2>
          <Spacing size="2.8" />
          <S.CardContainer>
            {allBoards?.map((board) => (
              <Card
                key={board.boardId}
                post={{
                  ...board,
                  images: board.imageUrl,
                }}
              />
            ))}
          </S.CardContainer>
        </S.SearchResult>
      </S.SearchBox>
    </S.SearchWrapper>
  );
};

export default Search;
