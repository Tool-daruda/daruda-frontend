import { ImgModalcheck } from '@assets/svgs/index.ts';
import { AlterModal } from '@components/modal/index.ts';
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

const MyPostPage = () => {
  const [postList, setPostList] = useState<Post[]>(MYPOST_RESPONSE.boardList);
  const [pages, setPages] = useState(MYPOST_RESPONSE.pagination.totalPages);
  const [currentPage, setCurrentPage] = useState(1);
  const [isToast, setIsToast] = useState(false);
  const [isModal, setIsModal] = useState(false);

  // 추후에 API 연결을 위해 useState를 사용하기 위해 set함수를 임의로 넣었습니다!!!
  // API 연결할 때 삭제하겠습니다.
  useEffect(() => {
    setPostList((prevToolList) => [...prevToolList]);
    setPages((prev) => prev);
  }, []);

  const handleDeleteModal = () => {
    setIsModal((prev) => !prev);
  };

  const deleteModalProps = {
    modalTitle: '선택한 글을 삭제하시겠어요??',
    isOpen: isModal,
    handleClose: () => {
      handleDeleteModal();
      setIsToast(true);
    }, // TODO: 로그아웃 로직 구현하기
    ImgPopupModal: ImgModalcheck,
    isSingleModal: false,
    modalContent: '삭제된 글은 다시 볼 수 없어요',
    DoublebtnProps: {
      isPrimaryRight: true,
      primaryBtnContent: '한 번 더 생각할게요',
      secondaryBtnContent: '삭제하기',
      handleSecondClose: handleDeleteModal,
    },
  };

  const handleDelete = () => {
    handleDeleteModal();
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
                  isMine={true}
                  title={post.title}
                  updatedAt={post.updatedAt}
                  toolLogo={post.toolLogo}
                  toolName={post.toolName}
                  onClick={handleDelete}
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
      <AlterModal {...deleteModalProps} />
      <S.ToastWrapper>
        <Toast isVisible={isToast} isWarning={false}>
          삭제가 완료되었어요.
        </Toast>
      </S.ToastWrapper>
    </>
  );
};

export default MyPostPage;
