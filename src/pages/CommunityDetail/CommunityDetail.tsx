import { IcCommentGray24, IcBookmark } from '@assets/svgs';
import SquareButton from '@components/button/squareButton/SquareButton';
import Card from '@components/postCard/PostCard';
import Title from '@components/title/Title';
import { handleScrollDown, handleScrollUp } from '@utils';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useParams } from 'react-router-dom';

import useGetComment from './apis/fetchComment/queries';
import useGetDetailPost from './apis/fetchDetailPost/queries';
import * as S from './CommunityDetail.styled';
import CommentBoard from './components/comment/commentBoard/CommentBoard';
import CommnetInput from './components/input/commentInput/CommentInput';

const CommunityDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [height, setHeight] = useState(694);
  const postareaRef = useRef<HTMLLIElement>(null);
  const { ref, inView } = useInView();

  const { data } = useGetDetailPost(id);
  const { data: CommentData, fetchNextPage, hasNextPage } = useGetComment(id);

  useEffect(() => {
    if (postareaRef.current) {
      const height = postareaRef.current.offsetHeight;
      setHeight(height);
    }
  }, []);

  useEffect(() => {
    handleScrollUp();
  }, []);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  const comments = CommentData?.pages.flatMap((page) => page.commentList) || [];
  return (
    <>
      <Title title={data?.title as string} />
      <S.PageWrapper>
        <S.PageHeader>
          <h1>글 상세보기</h1>
        </S.PageHeader>
        <S.BoardContainer>
          <S.PostItem>
            {data && <Card post={data} forDetail={true} ref={postareaRef} />}
            {CommentData && (
              <>
                <CommentBoard
                  ref={ref}
                  commentList={comments}
                  height={height}
                  hasNextPage={hasNextPage}
                  commentCount={data?.commentCount}
                />
              </>
            )}
          </S.PostItem>
          <CommnetInput />
        </S.BoardContainer>
      </S.PageWrapper>
      {height > 695 && (
        <S.BottomBar>
          <S.FloatingBtns>
            <SquareButton
              type="button"
              icon={<IcCommentGray24 />}
              size="small"
              stroke={false}
              handleClick={handleScrollDown}
            >{`${comments.length}개`}</SquareButton>
            <SquareButton icon={<IcBookmark />} size="small" stroke={false}>
              북마크
            </SquareButton>
          </S.FloatingBtns>
        </S.BottomBar>
      )}
    </>
  );
};

export default CommunityDetail;
