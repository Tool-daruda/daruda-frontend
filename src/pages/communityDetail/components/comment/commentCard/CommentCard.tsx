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

interface Comment {
  comment: CommentContent;
}

const CommentCard = ({ comment }: Comment) => {
  const { isOwnPost, isOpen, modalType, isWarning, handleModalOpen, handleModalClose, handleReport } = usePostActions(
    comment.nickname,
  );
  const { id } = useParams<{ id: string }>();
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);
  const { mutate, isError } = useCommentDeleteMutation(comment.commentId, id);
  const [IsToastOpen, setIsToastOpen] = useState(false);

  useEffect(() => {
    if (isError) {
      setIsToastOpen(true);
      setTimeout(() => setIsToastOpen(false), 3000);
    }
  }, [isError]);

  const handleModalDelete = async () => {
    mutate();
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
        <DropDown position="end">
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
        <ReportModal isOpen={isOpen} handleClose={handleModalDelete} commentId={comment.commentId} />
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
      {IsToastOpen && (
        <Toast isVisible={IsToastOpen} isWarning={true}>
          삭제 불가합니다. 권한을 확인해주세요
        </Toast>
      )}
      {isWarning && (
        <Toast isVisible={isWarning} isWarning>
          로그인 후 가능한 서비스입니다.
        </Toast>
      )}
    </S.Wrapper>
  );
};

export default CommentCard;
