import { forwardRef } from 'react';

import * as S from './CommentBoard.styled';

import CommentCard from '../commentCard/CommentCard';

interface Comment {
  commentId: number;
  nickname: string;
  content: string;
  image: string | null;
  updatedAt: string;
}

interface CommentProp {
  commentList: Comment[];
  height?: number;
  hasNextPage: boolean;
  commentCount: number | undefined;
}

const CommentBoard = forwardRef<HTMLDivElement, CommentProp>(
  ({ commentList, height = 694, hasNextPage, commentCount }: CommentProp, ref) => {
    return (
      <S.CommnetWrapper>
        <S.CommentLayout>
          <S.CommentHeader>
            <div>
              <p>댓글</p>
              <p>{`${commentCount}개`}</p>
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
                <>
                  <li key={comment.commentId}>
                    {idx > 0 && <S.Divider />}
                    <CommentCard comment={comment} />
                  </li>
                </>
              ))}
            {hasNextPage && <div ref={ref} />}
          </S.CommentList>
        </S.CommentLayout>
      </S.CommnetWrapper>
    );
  },
);

CommentBoard.displayName = 'CommentBoard';

export default CommentBoard;
