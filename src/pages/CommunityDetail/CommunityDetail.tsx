import { IcCommentGray24, IcBookmark } from '@assets/svgs';
import SquareButton from '@components/button/squareButton/SquareButton';
import Card from '@components/postCard/PostCard';
import { POST_DATA } from '@pages/community/mocks';
import { handleScrollDown } from '@utils';
import { useRef, useEffect, useState } from 'react';

import * as S from './CommunityDetail.styled';
import CommentBoard from './components/comment/commentBoard/CommentBoard';
import CommnetInput from './components/input/commentInput/CommentInput';
import { Comment_DATA } from './mocks';

const CommunityDetail = () => {
  const [height, setHeight] = useState(694);
  const postareaRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (postareaRef.current) {
      const height = postareaRef.current.offsetHeight;
      setHeight(height);
    }
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await axios.get('https://www.daruda.site/api/v1/boards/board/6', {
  //       headers: {
  //         'Access-Token':
  //           'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3Mzc0NTA1NTYsImV4cCI6MTczODY2MDE1NiwidXNlcklkIjo2OH0.AgCu3QO3ost1WCy7W7D36O9GMVSdZvlxNuEdOpR95-_qP2QzNDu2DeLC0jTqSIMghxyHi9EvK-yJ8OfRvvHXHA',
  //       },
  //     });
  //     console.log(data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <S.WrapperLayout>
      <S.PageWrapper>
        <S.PageHeader>
          <h1>글 상세보기</h1>
        </S.PageHeader>
        <S.BoardContainer>
          <S.PostItem>
            <Card post={POST_DATA[1]} forDetail={true} ref={postareaRef} />
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
