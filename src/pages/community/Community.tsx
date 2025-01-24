import { IcPlusWhite20, IcChevron, ImgPopupNonebookmarkScraptool } from '@assets/svgs';
import ToolListBanner from '@components/banner/ToolListBanner';
import CircleButton from '@components/button/circleButton/CircleButton';
import Loading from '@components/lottie/Loading';
import Spacing from '@components/spacing/Spacing';
import Title from '@components/title/Title';
import { handleScrollUp } from '@utils';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate, useLocation } from 'react-router-dom';

import * as S from './Community.style';
import Banner from './components/banner/Banner';

import { usePostListQuery } from '../../apis/fetchPostList/queries';
import Card from '../../components/common/postCard/PostCard';

const Community = () => {
  const navigate = useNavigate();
  const [pickedtool, setPickedtool] = useState<number | null>(null);
  const [noTopic, setIsNoTopic] = useState<boolean>(false);
  const { data, fetchNextPage, hasNextPage, isLoading } = usePostListQuery(pickedtool, noTopic);
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

  const postList = data?.pages.map((item) => item.contents).flat();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  useEffect(() => {
    handleScrollUp();
  }, [pickedtool, noTopic]);

  const handleToolSelect = (toolId: number | null, noTopic: boolean) => {
    setPickedtool(toolId);
    setIsNoTopic(toolId === null && noTopic);
  };
  return (
    <>
      <Title title="커뮤니티" />
      <S.CommunityWrapper>
        <Banner />
        <S.CommunityContainer>
          <ToolListBanner forCommunity={true} onToolSelect={handleToolSelect} originTool={initialTool} />
          <S.CardList>
            {postList && postList.length > 1
              ? postList?.map((post) => <Card key={`community-post-${post.boardId}`} post={post} />)
              : !isLoading && (
                  <S.NonTool>
                    <ImgPopupNonebookmarkScraptool />
                    <Spacing size="4.2" />
                    <p>작성된 글이 없어요</p>
                    <Spacing size="1" />
                    <p>해당 툴에 대한 글을 작성해 정보를 공유해 보세요.</p>
                  </S.NonTool>
                )}
            {isLoading && (
              <S.LoadingSection>
                <Loading />
              </S.LoadingSection>
            )}
            {hasNextPage ? <div ref={ref} /> : null}
          </S.CardList>
        </S.CommunityContainer>
        <S.FollowingBtns>
          <CircleButton
            onClick={() => {
              const user = localStorage.getItem('user');
              if (user) {
                navigate(`/community/write`);
              }
            }}
            size="small"
            shadow={true}
            icon={<IcPlusWhite20 />}
            disabled={!localStorage.getItem('user')}
          >
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
