import { IcCommentGray24, IcBookmark } from '@assets/svgs';
import SquareButton from '@components/button/squareButton/SquareButton';
import Card from '@components/postCard/PostCard';
import { handleScrollDown } from '@utils';
import { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useGetDetailPost from './apis/fetchDetailPost/queries';
import * as S from './CommunityDetail.styled';
import CommentBoard from './components/comment/commentBoard/CommentBoard';
import CommnetInput from './components/input/commentInput/CommentInput';
import { Comment_DATA } from './mocks';

const CommunityDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [height, setHeight] = useState(694);
  const postareaRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (postareaRef.current) {
      const height = postareaRef.current.offsetHeight;
      setHeight(height);
    }
  }, []);

  const { data } = useGetDetailPost(id);
  return (
    <S.WrapperLayout>
      <S.PageWrapper>
        <S.PageHeader>
          <h1>글 상세보기</h1>
        </S.PageHeader>
        <S.BoardContainer>
          <S.PostItem>
            {data && <Card post={data} forDetail={true} ref={postareaRef} />}
            <CommentBoard commentList={Comment_DATA} height={height} />
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
            >{`${Comment_DATA.length}개`}</SquareButton>
            <SquareButton icon={<IcBookmark />} size="small" stroke={false}>
              북마크
            </SquareButton>
          </S.FloatingBtns>
        </S.BottomBar>
      )}
    </S.WrapperLayout>
  );
};

export default CommunityDetail;
