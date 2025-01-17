import * as S from './CommentBoard.styled';

import CommentCard from '../commentCard/CommentCard';

interface Comment {
  commentId: number;
  nickName: string;
  content: string;
  image: string;
  updatedAt: string;
}

interface CommentProp {
  commentList: Comment[];
}

const CommentBoard = ({ commentList }: CommentProp) => {
  const COMMNET_COUNT = 20;
  return (
    <S.CommnetWrapper>
      <S.CommentLayout>
        <S.CommentHeader>
          <div>
            <p>댓글</p>
            <p>{`${COMMNET_COUNT}개`}</p>
          </div>
        </S.CommentHeader>
        <S.CommentList>
          {commentList.map((comment) => (
            <CommentCard key={comment.commentId} comment={comment} />
          ))}
        </S.CommentList>
      </S.CommentLayout>
    </S.CommnetWrapper>
  );
};

export default CommentBoard;
