import { ImgPopupNonebookmarkScrappost } from '@assets/svgs/index.ts';
import Spacing from '@components/spacing/Spacing.tsx';
import Toast from '@components/toast/Toast.tsx';
import { useEffect, useState } from 'react';

import { useGetFavoritePost } from './apis/queries.ts';
import PostCard from './components/postCard/PostCard.tsx';
import * as S from './Post.styled.ts';
import { Board } from './types/board.ts';

const MyFavoritePostPage = () => {
  const [postList, setPostList] = useState<Board[]>([]);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isToast, setIsToast] = useState(false);
  const { data } = useGetFavoritePost();

  useEffect(() => {
    if (data) {
      setPostList(data.boardList);
      setPages(data.pageInfo?.pageNo);
    }
  }, []);

  const handleScrap = () => {
    setIsToast(true);
    setTimeout(() => setIsToast(false), 3000);
  };

  return (
    <>
      <S.PostWrapper>
        {postList?.length > 0 ? (
          <>
            <S.PostContainer>
              {postList.map((post) => (
                <PostCard
                  key={post.boardId}
                  isMine={false}
                  title={post.title}
                  updatedAt={post.updatedAt}
                  toolLogo={post.toolLogo}
                  toolName={post.toolName}
                  onClick={handleScrap}
                />
              ))}
            </S.PostContainer>
            <Spacing size="3" />
            <S.Pagination>
              <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}>
                &lt;
              </button>
              {Array.from(Array(pages), (_, index) => (
                <S.PageNum key={index} $isCurrent={currentPage === index + 1}>
                  {index + 1}
                </S.PageNum>
              ))}
              <button disabled={currentPage === pages} onClick={() => setCurrentPage((prev) => prev + 1)}>
                &gt;
              </button>
            </S.Pagination>
          </>
        ) : (
          <S.NonTool>
            <ImgPopupNonebookmarkScrappost />
            <Spacing size="4.2" />
            <p>작성한 글이 없어요</p>
            <Spacing size="1" />
            <p>커뮤니티에서 궁금한 점을 물어보세요</p>
          </S.NonTool>
        )}
      </S.PostWrapper>
      <S.ToastWrapper>
        <Toast isVisible={isToast} isWarning={false}>
          북마크가 취소되었어요.
        </Toast>
      </S.ToastWrapper>
    </>
  );
};

export default MyFavoritePostPage;
