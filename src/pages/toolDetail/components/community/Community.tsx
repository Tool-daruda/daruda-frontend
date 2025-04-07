import { forwardRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

import * as S from './Community.styled';
import { useBoardListQuery } from '@apis/board';
import { ImgPopupNonebookmark120 } from '@assets/svgs';

type ToolCommunityProps = {
  toolId: number;
  boardId: number;
  onClick: () => void;
};

const ToolCommunity = forwardRef<HTMLDivElement, ToolCommunityProps>(({ toolId, onClick }, ref) => {
  const { data, fetchNextPage, hasNextPage } = useBoardListQuery(toolId, false);
  const { ref: inViewRef, inView } = useInView();
  const navigate = useNavigate();

  const postList = data?.pages.map((item) => item.contents).flat();

  const handlePostClick = (boardId: number) => {
    // 스크롤 위치 저장
    sessionStorage.setItem('toolDetailScrollY', String(window.scrollY));

    navigate(`/community/${boardId}`);
  };

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <div ref={ref}>
      <S.CardSectionWrapper $forShort={postList && postList?.length < 6}>
        <S.CardTitle>
          <h1>사람들은 이런 이야기를 하고 있습니다</h1>
          <button onClick={onClick}>커뮤니티 글 더보기&gt;</button>
        </S.CardTitle>
        <S.CardSection>
          {postList && postList.length > 0 ? (
            postList.map((post) => {
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
            })
          ) : (
            <S.NullBox>
              <ImgPopupNonebookmark120 />
              <S.NullAlertText>작성된 글이 없습니다.</S.NullAlertText>
              <S.NullText>해당 툴에 대한 글을 작성해 정보를 공유해 보세요.</S.NullText>
            </S.NullBox>
          )}
          {hasNextPage && <div ref={inViewRef} />}
        </S.CardSection>
      </S.CardSectionWrapper>
    </div>
  );
});

ToolCommunity.displayName = 'ToolCommunity';

export default ToolCommunity;
