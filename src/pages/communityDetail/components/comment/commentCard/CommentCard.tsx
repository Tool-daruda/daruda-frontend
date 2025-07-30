import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './CommentCard.styled';
import { useCommentDeleteMutation, Comment as CommentContent } from '@apis/comment';
import { IcOverflowGray24, ImgModalexit, IcWatchWhite40 } from '@assets/svgs';
import DropDown from '@components/dropdown/DropDown';
import ImgDetail from '@components/imgDetail/ImgDetail';
import { AlterModal, ReportModal } from '@components/modal';
import Toast from '@components/toast/Toast';
import usePostActions from '@hooks/usePostControl';
import useToastOpen from '@hooks/useToastOpen';

interface Comment {
  comment: CommentContent;
  isDropdownOpen: boolean;
  onDropdownToggle: () => void;
  onDropdownClose: () => void;
}

const CommentCard = ({ comment, isDropdownOpen, onDropdownToggle, onDropdownClose }: Comment) => {
  const {
    isOwnPost,
    isOpen,
    modalType,
    isWarning: authError,
    handleModalOpen,
    handleModalClose,
    handleReport,
  } = usePostActions(comment.nickname, onDropdownClose);
  const { id } = useParams<{ id: string }>();
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);
  const { mutate, isError: deleteError } = useCommentDeleteMutation(comment.commentId, id);
  const { isToastOpen, handleModalOpen: handleToastOpen, handleMessageChange, toastMessage } = useToastOpen();

  useEffect(() => {
    if (deleteError) {
      handleToastOpen();
      handleMessageChange('삭제 불가합니다. 권한을 확인해주세요');
    } else if (authError) {
      handleToastOpen();
      handleMessageChange('로그인 후 가능한 서비스입니다.');
    }
  }, [deleteError, authError, handleToastOpen, handleMessageChange]);

  const handleModalDelete = async () => {
    mutate(undefined, {
      onSuccess: () => {
        handleToastOpen();
        handleMessageChange('댓글이 삭제되었어요');
      },
    });
    handleModalClose();
  };

  const handleImgFocus = () => {
    setIsImgModalOpen(true);
  };

  const handleImgModalClose = () => {
    setIsImgModalOpen(false);
  };

  return (
    <S.Wrapper>
      <S.MetaInfo>
        <S.MetaInfoItem>
          <span>{comment.nickname}</span>
          <span>{comment.updatedAt}</span>
        </S.MetaInfoItem>
        <DropDown position="end" isDropdownOpen={isDropdownOpen} onDropdownToggle={onDropdownToggle}>
          <DropDown.ToggleBtn>
            <IcOverflowGray24 />
          </DropDown.ToggleBtn>
          <DropDown.Content>
            {isOwnPost ? (
              <DropDown.Item status="danger" onClick={() => handleModalOpen('삭제')}>
                삭제하기
              </DropDown.Item>
            ) : (
              <DropDown.Item status="danger" onClick={handleReport}>
                신고하기
              </DropDown.Item>
            )}
          </DropDown.Content>
        </DropDown>
      </S.MetaInfo>
      <div>
        {comment.image && (
          <S.IntroImgBox>
            <S.CommentImg src={comment.image} alt={`commnet-img-${comment.commentId}`} />
            <IcWatchWhite40 className="hover-icon" onClick={handleImgFocus} />
          </S.IntroImgBox>
        )}

        <S.CommentContent>{comment.content}</S.CommentContent>
      </div>
      {modalType === '신고' ? (
        <ReportModal
          content={comment.content}
          isOpen={isOpen}
          handleClose={handleModalClose}
          commentId={comment.commentId}
          handleToastMsg={handleMessageChange}
          handleToastOpen={handleToastOpen}
        />
      ) : (
        <AlterModal
          modalTitle="글을 삭제하시겠어요?"
          isOpen={isOpen}
          handleClose={handleModalDelete}
          isSingleModal={false}
          ImgPopupModal={ImgModalexit}
          modalContent="삭제된 글은 다시 볼 수 없어요"
          DoublebtnProps={{
            isPrimaryRight: false,
            primaryBtnContent: '한 번 더 생각할게요',
            secondaryBtnContent: '삭제하기',
            handleSecondClose: handleModalClose,
          }}
        />
      )}
      {isImgModalOpen && comment.image && (
        <ImgDetail handleModalClose={handleImgModalClose} imgList={[comment.image]} index={0} />
      )}
      {toastMessage !== '' && (
        <Toast isVisible={isToastOpen} isWarning={true}>
          {toastMessage}
        </Toast>
      )}
    </S.Wrapper>
  );
};

export default CommentCard;
