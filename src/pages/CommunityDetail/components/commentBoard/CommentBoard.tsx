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
  height?: number;
}

const CommentBoard = ({ commentList, height = 694 }: CommentProp) => {
  return (
    <S.CommnetWrapper height={height}>
      <S.CommentLayout>
        <S.CommentHeader>
          <div>
            <p>댓글</p>
            <p>{`${commentList.length}개`}</p>
          </div>
        </S.CommentHeader>
        <S.CommentList>
          {commentList.map((comment, idx) => (
            <>
              <CommentCard key={comment.commentId} comment={comment} />
              {idx < commentList.length - 1 && <S.Divider />}
            </>
          ))}
        </S.CommentList>
      </S.CommentLayout>
    </S.CommnetWrapper>
  );
};

export default CommentBoard;
