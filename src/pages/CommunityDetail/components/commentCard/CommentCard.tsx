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
        <span>{comment.nickName}</span>
        <span>|</span>
        <span>{comment.updatedAt}</span>
      </S.MetaInfo>
      <S.CommentImg src={comment.image} alt={`commnet-img-${comment.commentId}`} />
      <S.CommentContent>{comment.content}</S.CommentContent>
    </S.Wrapper>
  );
};

export default CommentCard;
