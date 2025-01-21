import { IcPlusWhite20, IcChevron } from '@assets/svgs';
import ToolListBanner from '@components/banner/ToolListBanner';
import CircleButton from '@components/button/circleButton/CircleButton';
import { handleScrollUp } from '@utils';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import * as S from './Community.style';
import Banner from './components/banner/Banner';

import { usePostListQuery } from '../../apis/fetchPostList/queries';
import Card from '../../components/common/postCard/PostCard';

const Community = () => {
  //TODO: 툴리스트 값을 받아와, 필터링이 가능하도록 로직 필요, 추후 공통 API 머지 후 추가 예정
  const { data, fetchNextPage, hasNextPage } = usePostListQuery();
  const { ref, inView } = useInView();

  const postList = data?.pages.map((item) => item.contents).flat();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <S.CommunityWrapper>
      <Banner />
      <S.CommunityContainer>
        <ToolListBanner forCommunity={true} />
        <S.CardList>
          {postList?.map((post) => <Card key={`community-post-${post.boardId}`} post={post} />)}
          {hasNextPage ? <div ref={ref} /> : null}
        </S.CardList>
      </S.CommunityContainer>
      <S.FollowingBtns>
        <CircleButton size="small" shadow={true} icon={<IcPlusWhite20 />}>
          글쓰기
        </CircleButton>
        <S.TopBtn type="button" onClick={handleScrollUp}>
          <IcChevron />
        </S.TopBtn>
      </S.FollowingBtns>
    </S.CommunityWrapper>
  );
};

export default Community;
