import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { postSearchResult, toolSearchResult } from './mock/response';
import * as S from './Search.styled';
import { PostResponse as Post } from '@apis/board/board.model';
import { Tool } from '@apis/tool';
import { IcChevron } from '@assets/svgs';
import Card from '@components/postCard/PostCard';
import Spacing from '@components/spacing/Spacing';
import ToolCard from '@components/toolCard/ToolCard';
import TopBanner from '@pages/toolList/components/topBanner/TopBanner';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [toolResult, setToolResult] = useState<Tool[]>([]);
  const [postResult, setPostResult] = useState<Post[]>([]);
  const navigate = useNavigate();
  const searchKeyword = searchParams.get('keyword');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setToolResult(toolSearchResult.slice(0, 2));
    setPostResult(postSearchResult);
  }, []);

  return (
    <S.SearchWrapper>
      <TopBanner />
      <S.SearchBox>
        <S.SearchResult>
          <h1>{searchKeyword ? `"${searchKeyword}"에 대한 검색결과입니다.` : '검색어를 입력해주세요.'}</h1>
          <h2>툴 리스트</h2>
          <Spacing size="2" />
          <S.CardContainer>
            {toolResult?.map((tool) => (
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
        <S.Toggle
          onClick={() => {
            setToolResult(isOpen ? toolSearchResult.slice(0, 2) : toolSearchResult);
            setIsOpen((prev) => !prev);
          }}
          $isOpen={isOpen}
        >
          {isOpen ? '검색결과 접기' : '검색결과 펼치기'}
          <IcChevron />
        </S.Toggle>
        <S.Divider />
        <S.SearchResult>
          <h2>커뮤니티 전체</h2>
          <Spacing size="2.8" />
          <S.CardContainer>{postResult?.map((post) => <Card key={post.boardId} post={post} />)}</S.CardContainer>
        </S.SearchResult>
      </S.SearchBox>
    </S.SearchWrapper>
  );
};

export default Search;
