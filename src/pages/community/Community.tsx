import { IcPlusWhite20, IcChevron } from '@assets/svgs';
import ToolListBanner from '@components/banner/ToolListBanner';
import CircleButton from '@components/button/circleButton/CircleButton';
import { handleScrollUp } from '@utils';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

import * as S from './Community.style';
import Banner from './components/banner/Banner';

import { usePostListQuery } from '../../apis/fetchPostList/queries';
import Card from '../../components/common/postCard/PostCard';

const Community = () => {
  const navigate = useNavigate();
  const [pickedtool, setPickedtool] = useState<number | null>(null);
  const [noTopic, setIsNoTopic] = useState<boolean>(false);
  const { data, fetchNextPage, hasNextPage } = usePostListQuery(pickedtool, noTopic);
  const { ref, inView } = useInView();

  // 자유페이지만 랜더링 하는 로직이 필요함. 다음 이슈때 추가 바로 하겠습니다
  const postList = data?.pages.map((item) => item.contents).flat();

  const user = {
    accessToken:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3Mzc1ODE0NzQsImV4cCI6MTczODc5MTA3NCwidXNlcklkIjo4OX0.XoxYqtPPeq484M1nXQSYFhO5Wg2vJ8PfcXMi3dfvwwnxZOdWSUsCCm1wElQOcL0rtrvU9gafYKjNyOw4l0_HzA',
  };

  localStorage.setItem('user', JSON.stringify(user));

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const handleToolSelect = (toolId: number | null) => {
    setPickedtool(toolId);
    setIsNoTopic(toolId === null);
  };
  return (
    <S.CommunityWrapper>
      <Banner />
      <S.CommunityContainer>
        <ToolListBanner forCommunity={true} onToolSelect={handleToolSelect} />
        <S.CardList>
          {postList?.map((post) => <Card key={`community-post-${post.boardId}`} post={post} />)}
          {hasNextPage ? <div ref={ref} /> : null}
        </S.CardList>
      </S.CommunityContainer>
      <S.FollowingBtns>
        <CircleButton
          onClick={() => navigate(`/community/write#target-sectio`)}
          size="small"
          shadow={true}
          icon={<IcPlusWhite20 />}
        >
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
