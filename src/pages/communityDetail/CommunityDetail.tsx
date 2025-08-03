import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useParams } from 'react-router-dom';

import * as S from './CommunityDetail.styled';
import CommentBoard from './components/comment/commentBoard/CommentBoard';
import CommnetInput from './components/input/commentInput/CommentInput';
import { useDetailBoardQuery } from '@apis/board';
import { useCommentListQuery } from '@apis/comment';
import { IcCommentGray24, IcBookmark } from '@assets/svgs';
import SquareButton from '@components/button/squareButton/SquareButton';
import Meta from '@components/meta/Meta';
import Card from '@components/postCard/PostCard';
import NotFound from '@pages/error/NotFound';
import { handleScrollDown } from '@utils';

const CommunityDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [height, setHeight] = useState(694);
  const postareaRef = useRef<HTMLLIElement>(null);
  const { ref, inView } = useInView();
  const [opendedId, setOpenedId] = useState<number | null>(null); // 현재 열려있는 드롭다운의 ID 상태관리

  const handleDropdownToggle = (id: number) => {
    setOpenedId((prev) => (prev === id ? null : id));
  };

  const handleDropdownClose = () => {
    setOpenedId(null);
  };

  const { data, isError } = useDetailBoardQuery(id);
  const { data: CommentData, fetchNextPage, hasNextPage } = useCommentListQuery(id);

  useEffect(() => {
    if (postareaRef.current) {
      const height = postareaRef.current.offsetHeight;
      setHeight(height);
    }
  }, []);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  const comments = CommentData?.pages.flatMap((page) => page.commentList) || [];

  if (isError) {
    return <NotFound />;
  }

  return (
    <>
      <Meta title={data?.title as string} tool={data?.toolName} image={data?.toolLogo} description={data?.content} />
      <S.PageWrapper>
        <S.PageHeader>
          <h1>글 상세보기</h1>
        </S.PageHeader>
        <S.BoardContainer>
          <S.PostItem>
            {data && (
              <Card
                post={data}
                forDetail={true}
                ref={postareaRef}
                isDropdownOpen={opendedId === data.boardId}
                onDropdownClose={handleDropdownClose}
                onDropdownToggle={() => handleDropdownToggle(data.boardId)}
              />
            )}
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
