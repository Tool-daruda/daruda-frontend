import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate, useSearchParams } from 'react-router-dom';

import * as S from './Search.styled';
import { useSearchBoardQuery, useSearchToolQuery } from '@apis/search';
import { IcChevron, ImgPopupNonebookmark120 } from '@assets/svgs';
import Card from '@components/postCard/PostCard';
import Spacing from '@components/spacing/Spacing';
import ToolCard from '@components/toolCard/ToolCard';
import TopBanner from '@pages/toolList/components/topBanner/TopBanner';

const Search = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchKeyword = searchParams.get('keyword') || '';
  const [isOpen, setIsOpen] = useState(false);
  const [opendedId, setOpenedId] = useState<number | null>(null); // 현재 열려있는 드롭다운의 ID 상태관리

  const handleDropdownToggle = (id: number) => {
    setOpenedId((prev) => (prev === id ? null : id));
  };

  // 툴 검색
  const { data: toolData } = useSearchToolQuery(searchKeyword);
  // 커뮤니티 검색
  const { data: boardData, fetchNextPage, hasNextPage } = useSearchBoardQuery(searchKeyword);

  const allBoards = boardData?.pages.flatMap((page) => page?.contents || []) || [];
  // 툴 검색 결과 처리
  const allTools = toolData || [];
  const visibleTools = isOpen ? allTools : allTools.slice(0, 2);

  const { ref: inViewRef, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  if (toolData)
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
                      navigate('/community', {
                        state: { toolId: tool.toolId, toolLogo: tool.toolLogo, toolName: tool.toolName },
                      });
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
              {allBoards.length > 0 ? (
                <>
                  {allBoards.map((board) => (
                    <Card
                      isDropdownOpen={opendedId === board.boardId}
                      onDropdownToggle={() => handleDropdownToggle(board.boardId)}
                      key={board.boardId}
                      post={{
                        ...board,
                        images: board.imageUrl,
                      }}
                    />
                  ))}
                  {hasNextPage && <div ref={inViewRef} />}
                </>
              ) : (
                <S.NullBox>
                  <ImgPopupNonebookmark120 />
                  <S.NullAlertText>작성된 글이 없습니다.</S.NullAlertText>
                  <S.NullText>해당 툴에 대한 글을 작성해 정보를 공유해 보세요.</S.NullText>
                </S.NullBox>
              )}
            </S.CardContainer>
          </S.SearchResult>
        </S.SearchBox>
      </S.SearchWrapper>
    );
};

export default Search;
