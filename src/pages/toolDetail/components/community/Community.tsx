import { usePostListQuery } from '@apis/fetchPostList/queries';
import { forwardRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

import * as S from './Community.styled';

type ToolCommunityProps = {
  toolId: number;
  boardId: number;
};

const ToolCommunity = forwardRef<HTMLDivElement, ToolCommunityProps>(({ toolId }, ref) => {
  const { data, fetchNextPage, hasNextPage } = usePostListQuery(toolId, false);
  const { ref: inViewRef, inView } = useInView();
  const navigate = useNavigate();

  const postList = data?.pages.map((item) => item.contents).flat();

  const handlePostClick = (boardId: number) => {
    navigate(`/community/${boardId}`); // 개별 게시물의 boardId를 사용
  };

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <div ref={ref}>
      <S.CardSectionWrapper>
        <S.CardTitle>
          <h1>사람들은 이런 이야기를 하고 있습니다</h1>
          <h2>커뮤니티 글 보기 &gt;</h2>
        </S.CardTitle>
        <S.CardSection>
          {postList?.map((post) => {
            const firstImage = post.images[0];

            return (
              <S.CardWrapper key={post.boardId} onClick={() => post.boardId && handlePostClick(post.boardId)}>
                <S.CardBox>
                  <S.Title>{post.title}</S.Title>
                  <S.NickName>
                    {post.author} | {post.updatedAt}
                  </S.NickName>
                </S.CardBox>
                <S.ContentWrapper imageUrl={firstImage}>
                  {firstImage && <S.ImageWrapper imageUrl={firstImage} />}
                  <S.Description imageUrl={firstImage}>{post.content}</S.Description>
                </S.ContentWrapper>
              </S.CardWrapper>
            );
          })}
          {hasNextPage && <div ref={inViewRef} />}
        </S.CardSection>
      </S.CardSectionWrapper>
    </div>
  );
});

ToolCommunity.displayName = 'ToolCommunity';

export default ToolCommunity;
