import { useBoardDelete } from '@apis/board/queries.ts';
import { ImgPopupDelete84, ImgPopupNonebookmarkMypost } from '@assets/svgs/index.ts';
import { AlterModal } from '@components/modal/index.ts';
import Spacing from '@components/spacing/Spacing.tsx';
import Toast from '@components/toast/Toast.tsx';
import { useToastOpen } from '@hooks/index';
import { useState } from 'react';

import { useGetMyPost } from './apis/queries.ts';
import PostCard from './components/postCard/PostCard.tsx';
import * as S from './Post.styled.ts';

const MyPostPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: postData } = useGetMyPost(currentPage);
  const { mutateAsync: delMuatate } = useBoardDelete();

  const { isToastOpen, handleModalOpen: handleToastOpen } = useToastOpen();
  const [isModal, setIsModal] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState<number | null>(null);

  const handleDeleteModal = () => {
    setIsModal((prev) => !prev);
  };

  const deleteModalProps = {
    modalTitle: '선택한 글을 삭제하시겠어요??',
    isOpen: isModal,
    handleClose: async () => {
      handleDeleteModal();
      if (selectedBoard !== null) {
        await delMuatate(selectedBoard);
      }
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

  const handleDelete = (boardId: number) => {
    setSelectedBoard(boardId);
    handleDeleteModal();
    handleToastOpen();
  };

  if (postData) {
    return (
      <>
        {postData.boardList?.length > 0 ? (
          <S.PostWrapper>
            <S.PostContainer>
              {postData.boardList?.map((post, index) => (
                <>
                  {index !== 0 && <S.Divider />}
                  <PostCard
                    key={post.boardId}
                    boardId={post.boardId}
                    isMine={true}
                    title={post.title}
                    updatedAt={post.updatedAt}
                    toolLogo={post.toolLogo}
                    toolName={post.toolName}
                    onClick={() => handleDelete(post.boardId)}
                  />
                </>
              ))}
            </S.PostContainer>
            <S.Pagination>
              <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}>
                &lt;
              </button>
              {Array.from(Array(postData.pageInfo.totalPages), (_, index) => (
                <S.PageNum key={index} $isCurrent={currentPage === index + 1} onClick={() => setCurrentPage(index + 1)}>
                  {index + 1}
                </S.PageNum>
              ))}
              <button
                disabled={currentPage === postData.pageInfo.totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                &gt;
              </button>
            </S.Pagination>
          </S.PostWrapper>
        ) : (
          <S.NonTool>
            <ImgPopupNonebookmarkMypost />
            <Spacing size="4.2" />
            <p>작성한 글이 없어요</p>
            <Spacing size="1" />
            <p>커뮤니티에서 궁금한 점을 물어보세요</p>
          </S.NonTool>
        )}
        <AlterModal {...deleteModalProps} />
        {isToastOpen && (
          <Toast isVisible={isToastOpen} isWarning={false}>
            삭제가 완료되었어요.
          </Toast>
        )}
      </>
    );
  }
};

export default MyPostPage;
