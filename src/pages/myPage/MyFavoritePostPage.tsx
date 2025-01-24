import { useBoardScrap } from '@apis/board/queries.ts';
import { ImgPopupNonebookmarkScrappost } from '@assets/svgs/index.ts';
import Spacing from '@components/spacing/Spacing.tsx';
import Toast from '@components/toast/Toast.tsx';
import { useToastOpen } from '@pages/CommunityDetail/hooks/index.ts';
import { useState } from 'react';

import { useGetFavoritePost } from './apis/queries.ts';
import PostCard from './components/postCard/PostCard.tsx';
import * as S from './Post.styled.ts';

const MyFavoritePostPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: favoritePostData } = useGetFavoritePost(currentPage);
  const { mutateAsync: scrapMutate } = useBoardScrap();
  const { isToastOpen, handleModalOpen: handleToastOpen } = useToastOpen();

  const handleScrap = async (boardId: number) => {
    await scrapMutate(boardId);
    handleToastOpen();
  };

  if (favoritePostData) {
    return (
      <>
        <S.PostWrapper>
          {favoritePostData.boardList?.length > 0 ? (
            <>
              <S.PostContainer>
                {favoritePostData.boardList.map((post, index) => (
                  <>
                    {index !== 0 && <S.Divider />}
                    <PostCard
                      key={post.boardId}
                      boardId={post.boardId}
                      isMine={false}
                      title={post.title}
                      updatedAt={post.updatedAt}
                      toolLogo={post.toolLogo}
                      toolName={post.toolName}
                      onClick={() => handleScrap(post.boardId)}
                    />
                  </>
                ))}
              </S.PostContainer>
              <S.Pagination>
                <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}>
                  &lt;
                </button>
                {Array.from(Array(favoritePostData.pageInfo.totalPages), (_, index) => (
                  <S.PageNum
                    key={index}
                    $isCurrent={currentPage === index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </S.PageNum>
                ))}
                <button
                  disabled={currentPage === favoritePostData.pageInfo.totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  &gt;
                </button>
              </S.Pagination>
            </>
          ) : (
            <S.NonTool>
              <ImgPopupNonebookmarkScrappost />
              <Spacing size="4.2" />
              <p>관심있는 글이 없어요</p>
              <Spacing size="1" />
              <p>커뮤니티에서 관심있는 글을 찾아보세요</p>
            </S.NonTool>
          )}
        </S.PostWrapper>
        {isToastOpen && (
          <Toast isVisible={isToastOpen} isWarning={false}>
            북마크가 취소되었어요.
          </Toast>
        )}
      </>
    );
  }
};

export default MyFavoritePostPage;
