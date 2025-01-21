import { ImgPopupDelete84, ImgPopupNonebookmarkMypost } from '@assets/svgs/index.ts';
import { AlterModal } from '@components/modal/index.ts';
import Spacing from '@components/spacing/Spacing.tsx';
import Toast from '@components/toast/Toast.tsx';
import { useEffect, useState } from 'react';

import { useGetMyPost } from './apis/queries.ts';
import PostCard from './components/postCard/PostCard.tsx';
import * as S from './Post.styled.ts';
import { Board } from './types/board.ts';

const MyPostPage = () => {
  const { data } = useGetMyPost();

  const [postList, setPostList] = useState<Board[]>([]);
  const [pages, setPages] = useState(1);

  const [currentPage, setCurrentPage] = useState(1);
  const [isToast, setIsToast] = useState(false);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    if (data) {
      setPostList(data.boardList);
      setPages(data.pageInfo.pageNo);
    }
  }, [data]);

  const handleDeleteModal = () => {
    setIsModal((prev) => !prev);
  };

  const deleteModalProps = {
    modalTitle: '선택한 글을 삭제하시겠어요??',
    isOpen: isModal,
    handleClose: () => {
      handleDeleteModal();
      setIsToast(true);
    },
    ImgPopupModal: ImgPopupDelete84,
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
        {postList?.length > 0 ? (
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
            <ImgPopupNonebookmarkMypost />
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
