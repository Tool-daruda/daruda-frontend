import { IcOverflowGray24, ImgModalexit, IcWatchWhite40 } from '@assets/svgs';
import DropDown from '@components/dropdown/DropDown';
import ImgDetail from '@components/imgDetail/ImgDetail';
import { AlterModal } from '@components/modal';
import Toast from '@components/toast/Toast';
import useCommentDelete from '@pages/CommunityDetail/apis/DeletePost/queries';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './CommentCard.styled';

interface Comment {
  comment: {
    commentId: number;
    nickname: string;
    content: string;
    image: string;
    updatedAt: string;
  };
}

const CommentCard = ({ comment }: Comment) => {
  const { id } = useParams<{ id: string }>();
  const [isOpen, setIsOpen] = useState(false);
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);
  const { mutate, isError } = useCommentDelete(comment.commentId, id);
  const [IsToastOpen, setIsToastOpen] = useState(false);

  useEffect(() => {
    if (isError) {
      setIsToastOpen(true);
      setTimeout(() => setIsToastOpen(false), 3000);
    }
  }, [isError]);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModalDelete = async () => {
    mutate();
    setIsOpen(false);
  };

  const handleModalOpen = () => {
    setIsOpen(true);
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
            <DropDown.Item status="danger" onClick={handleModalOpen}>
              삭제하기
            </DropDown.Item>
          </DropDown.Content>
        </DropDown>
      </S.MetaInfo>
      <div>
        <S.IntroImgBox>
          <S.CommentImg src={comment.image} alt={`commnet-img-${comment.commentId}`} />
          <IcWatchWhite40 className="hover-icon" onClick={handleImgFocus} />
        </S.IntroImgBox>
        <S.CommentContent>{comment.content}</S.CommentContent>
      </div>
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
      {isImgModalOpen && <ImgDetail handleModalClose={handleImgModalClose} imgList={[comment.image]} index={0} />}
      <S.ToastWrapper>
        <Toast isVisible={IsToastOpen} isWarning={true}>
          삭제 불가합니다. 권한을 확인해주세요
        </Toast>
      </S.ToastWrapper>
    </S.Wrapper>
  );
};

export default CommentCard;
