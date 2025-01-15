import Spacing from '@components/spacing/Spacing.tsx';
import Toast from '@components/toast/Toast.tsx';
import { useEffect, useState } from 'react';

import PostCard from './components/postCard/PostCard.tsx';
import { MYPOST_RESPONSE } from './mocks/myPostList.ts';
import * as S from './Post.styled.ts';

interface Post {
  boardId: number;
  title: string;
  content: string;
  updatedAt: string;
  toolId: number;
  toolLogo: string;
  toolName: string;
  scrapId: number;
}

const MyFavoritePostPage = () => {
  const [postList, setPostList] = useState<Post[]>(MYPOST_RESPONSE.boardList);
  const [pages, setPages] = useState(MYPOST_RESPONSE.pagination.totalPages);
  const [currentPage, setCurrentPage] = useState(1);
  const [isToast, setIsToast] = useState(false);

  // 추후에 API 연결을 위해 useState를 사용하기 위해 set함수를 임의로 넣었습니다!!!
  // API 연결할 때 삭제하겠습니다.
  useEffect(() => {
    setPostList((prevToolList) => [...prevToolList]);
    setPages((prev) => prev);
  }, []);

  const handleScrap = () => {
    setIsToast(true);
    setTimeout(() => setIsToast(false), 3000);
  };

  return (
    <>
      <S.PostWrapper>
        {postList.length > 0 ? (
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
            {/* TODO: 이미지 갈아끼우기 */}
            <img
              src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTFfNjEg/MDAxNTcwNzg1ODM3Nzc0.zxDXm20VlPdQv8GQi9LWOdPwkqoBdiEmf8aBTWTsPF8g.FqMQTiF6ufydkQxrLBgET3kNYAyyKGJTWTyi1qd1-_Ag.PNG.kkson50/sample_images_01.png?type=w800"
              alt=""
            />
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
