import { IcOverflowGray24, ImgModalexit, IcWatchWhite40, ImgModalcheck } from '@assets/svgs';
import DropDown from '@components/dropdown/DropDown';
import ImgDetail from '@components/imgDetail/ImgDetail';
import { AlterModal } from '@components/modal';
import Toast from '@components/toast/Toast';
import useCommentDelete from '@pages/CommunityDetail/apis/deletePost/queries';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './CommentCard.styled';

interface Comment {
  comment: {
    commentId: number;
    nickname: string;
    content: string;
    image: string | null;
    updatedAt: string;
  };
}

const CommentCard = ({ comment }: Comment) => {
  const { id } = useParams<{ id: string }>();
  const [isOpen, setIsOpen] = useState(false);
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);
  const { mutate, isError } = useCommentDelete(comment.commentId, id);
  const [IsToastOpen, setIsToastOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const [isOwnPost, setIsOwnPost] = useState(false);

  useEffect(() => {
    const postOwner = localStorage.getItem('user');

    if (postOwner) {
      const user = JSON.parse(postOwner);
      const ownPost = user.nickname === comment.nickname;
      setIsOwnPost(ownPost);
    }
  }, [id, comment.nickname]);

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

  const handleModalOpen = (type: string) => {
    setModalType(type);
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
            {isOwnPost ? (
              <DropDown.Item status="danger" onClick={() => handleModalOpen('삭제')}>
                삭제하기
              </DropDown.Item>
            ) : (
              <DropDown.Item status="danger" onClick={() => handleModalOpen('신고')}>
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
        <AlterModal
          modalTitle="신고 접수가 완료되었어요"
          isOpen={isOpen}
          handleClose={handleModalClose}
          isSingleModal={true}
          ImgPopupModal={ImgModalcheck}
          singleBtnContent="확인했어요"
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
      {isImgModalOpen && (
        <Toast isVisible={IsToastOpen} isWarning={true}>
          삭제 불가합니다. 권한을 확인해주세요
        </Toast>
      )}
    </S.Wrapper>
  );
};

export default CommentCard;
