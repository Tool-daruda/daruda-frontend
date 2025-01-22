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
    <S.CommnetWrapper>
      <S.CommentLayout>
        <S.CommentHeader>
          <div>
            <p>댓글</p>
            <p>{`${commentList.length}개`}</p>
          </div>
        </S.CommentHeader>
        <S.Divider />
        <S.CommentList height={height}>
          {commentList.length === 0 && (
            <S.EmptySpaceWrapper>
              <div>
                <S.EmptySpaceTitle>작성된 댓글이 없어요</S.EmptySpaceTitle>
                <S.EmptySpaceText>댓글을 남겨 의견을 공유해보세요.</S.EmptySpaceText>
              </div>
            </S.EmptySpaceWrapper>
          )}
          {commentList.length > 0 &&
            commentList.map((comment, idx) => (
              <li key={comment.commentId}>
                {idx > 0 && <S.Divider />}
                <CommentCard comment={comment} />
              </li>
            ))}
        </S.CommentList>
      </S.CommentLayout>
    </S.CommnetWrapper>
  );
};

export default CommentBoard;
