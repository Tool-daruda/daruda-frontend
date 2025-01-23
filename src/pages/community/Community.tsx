import { IcPlusWhite20, IcChevron } from '@assets/svgs';
import ToolListBanner from '@components/banner/ToolListBanner';
import CircleButton from '@components/button/circleButton/CircleButton';
import Title from '@components/title/Title';
import { handleScrollUp } from '@utils';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';

import * as S from './Community.style';
import Banner from './components/banner/Banner';

import { usePostListQuery } from '../../apis/fetchPostList/queries';
import Card from '../../components/common/postCard/PostCard';

const Community = () => {
  const [pickedtool, setPickedtool] = useState<number | null>(null);
  const [noTopic, setIsNoTopic] = useState<boolean>(false);
  const { data, fetchNextPage, hasNextPage } = usePostListQuery(pickedtool, noTopic);
  const { ref, inView } = useInView();
  const location = useLocation();
  const [originTool, setOriginTool] = useState<{
    toolId: number | null;
    toolLogo: string;
    toolMainName: string;
  }>();
  const [initialTool, setInitialTool] = useState<{
    toolId: number | null;
    toolLogo: string;
    toolName: string;
  }>();

  useEffect(() => {
    if (location.state) {
      setOriginTool(location.state);
      if (originTool) {
        setPickedtool(originTool?.toolId);
      }
    }
  }, [location.state, originTool]);

  useEffect(() => {
    if (originTool) {
      setInitialTool({
        toolId: originTool.toolId,
        toolName: originTool.toolMainName,
        toolLogo: originTool.toolLogo,
      });
    }
  }, [originTool]);

  // 자유페이지만 랜더링 하는 로직이 필요함. 다음 이슈때 추가 바로 하겠습니다
  const postList = data?.pages.map((item) => item.contents).flat();

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
    <>
      <Title title="커뮤니티" />
      <S.CommunityWrapper>
        <Banner />
        <S.CommunityContainer>
          <ToolListBanner forCommunity={true} onToolSelect={handleToolSelect} originTool={initialTool} />
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
    </>
  );
};

export default Community;
