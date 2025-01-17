import { IcArrowLeftBlack32 } from '@assets/svgs';
import Card from '@components/postCard/PostCard';
import { POST_DATA } from '@pages/community/mocks';
import { useRef, useEffect, useState } from 'react';

import * as S from './CommunityDetail.styled';
import CommentBoard from './components/commentBoard/CommentBoard';
import CommnetInput from './components/commentInput/CommentInput';
import { Comment_DATA } from './mocks';

const CommunityDetail = () => {
  const [height, setHeight] = useState<number>(694);
  const postareaRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (postareaRef.current) {
      const height = postareaRef.current.offsetHeight;
      setHeight(height);
      console.log(`Card height: ${height}px`);
    }
  }, []);

  return (
    <S.PageWrapper>
      <S.PageHeader>
        <IcArrowLeftBlack32 />
      </S.PageHeader>
      <S.BoardContainer>
        <S.PostItem>
          <Card post={POST_DATA[6]} forDetail={true} ref={postareaRef} />
          <CommentBoard commentList={Comment_DATA} height={height} />
        </S.PostItem>
        <CommnetInput />
      </S.BoardContainer>
    </S.PageWrapper>
  );
};

export default CommunityDetail;
