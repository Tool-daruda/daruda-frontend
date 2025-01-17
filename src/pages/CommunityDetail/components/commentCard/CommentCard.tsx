import { IcOverflowGray24 } from '@assets/svgs';
import DropDown from '@components/dropdown/DropDown';

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
            <DropDown.Item
              onClick={() => {
                alert('첫번째 클릭!');
              }}
            >
              드롭다운 목록
            </DropDown.Item>
            <DropDown.Item
              status="danger"
              onClick={() => {
                alert('두번째 클릭!');
              }}
            >
              드롭다운 목록
            </DropDown.Item>
          </DropDown.Content>
        </DropDown>
      </S.MetaInfo>
      <div>
        <S.CommentImg src={comment.image} alt={`commnet-img-${comment.commentId}`} />
        <S.CommentContent>{comment.content}</S.CommentContent>
      </div>
    </S.Wrapper>
  );
};

export default CommentCard;
