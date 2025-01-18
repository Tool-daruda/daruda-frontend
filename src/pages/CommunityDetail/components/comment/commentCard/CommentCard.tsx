import { IcOverflowGray24, ImgModalexit } from '@assets/svgs';
import DropDown from '@components/dropdown/DropDown';
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

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  return (
    <S.Wrapper>
      <S.MetaInfo>
        <S.MetaInfoItem>
          <span>{comment.nickName}</span>
          <span>|</span>
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
        <S.CommentImg src={comment.image} alt={`commnet-img-${comment.commentId}`} />
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
    </S.Wrapper>
  );
};

export default CommentCard;
