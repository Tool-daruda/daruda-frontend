import { IcOverflowGray24, ImgModalexit, IcWatchWhite40 } from '@assets/svgs';
import DropDown from '@components/dropdown/DropDown';
import ImgDetail from '@components/imgDetail/ImgDetail';
import { AlterModal } from '@components/modal';
import { useState } from 'react';

import * as S from './CommentCard.styled';

interface Comment {
  comment: {
    commentId: number;
    nickName: string;
    content: string;
    image: string;
    updatedAt: string;
  };
}

const CommentCard = ({ comment }: Comment) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);

  const handleModalClose = () => {
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
          <span>{comment.nickName}</span>
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
        handleClose={handleModalClose}
        isSingleModal={false}
        ImgPopupModal={ImgModalexit}
        modalContent="삭제된 글은 다시 볼 수 없어요"
        DoublebtnProps={{
          isPrimaryRight: false,
          primaryBtnContent: '한 번 더 생각할게요',
          secondaryBtnContent: '삭제하기',
        }}
      />
      {isImgModalOpen && <ImgDetail handleModalClose={handleImgModalClose} imgList={[comment.image]} index={0} />}
    </S.Wrapper>
  );
};

export default CommentCard;
