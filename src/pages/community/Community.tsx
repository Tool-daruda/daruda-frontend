import { IcPlusWhite20, IcChevron, ImgPopupNonebookmarkScraptool } from '@assets/svgs';
import ToolListBanner from '@components/banner/ToolListBanner';
import CircleButton from '@components/button/circleButton/CircleButton';
import Loading from '@components/lottie/Loading';
import Spacing from '@components/spacing/Spacing';
import Title from '@components/title/Title';
import { handleScrollUp } from '@utils';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

import * as S from './Community.style';
import Banner from './components/banner/Banner';
import { useToolCategorySelect } from './hooks';

import { usePostListQuery } from '../../apis/fetchPostList/queries';
import Card from '../../components/common/postCard/PostCard';

const Community = () => {
  const { handleToolSelect, pickedtool, setPickedtool, noTopic, initialTool } = useToolCategorySelect();

  const navigate = useNavigate();
  const { data, fetchNextPage, hasNextPage, isLoading } = usePostListQuery(pickedtool, noTopic);
  const { ref, inView } = useInView();

  const postList = data?.pages.map((item) => item.contents).flat();

  useEffect(() => {
    localStorage.setItem(
      'user',
      JSON.stringify({
        nickname: '곤이곤이',
        accessToken:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3NDA0NTI2NDcsImV4cCI6MTc0MTY2MjI0NywidXNlcklkIjoxMzJ9._y6LnG-MlZlR0t_qNAvH1hon_EGx3XuR7t8LuYcRG7L4yybHbERQBrgUpBR-l_5qhJyc461BtQEok9kqrLMJ4g',
        refreshToken:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3NDA0NTI2NDcsImV4cCI6MTc0MzA0NDY0NywidXNlcklkIjoxMzJ9.f_SBo1ii8_iINV8RlYcTw_gxG92o4Em1VwM5e7-z4eAHx_u06FzYzaOEo_13ogVYtZLtpxPKnmtuuPyuKJ2jMA',
      }),
    );
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  // 스크롤 관련 로직
  useEffect(() => {
    const storedToolType = sessionStorage.getItem('toolType');

    if (storedToolType) {
      const ToolType = storedToolType === 'null' ? null : Number(storedToolType);
      setPickedtool(ToolType);
      sessionStorage.removeItem('toolType');
    }
  }, []);

  return (
    <>
      <Title title="커뮤니티" />
      <S.CommunityWrapper>
        <Banner />
        <S.CommunityContainer>
          <ToolListBanner forCommunity onToolSelect={handleToolSelect} originTool={initialTool} />
          <S.CardList>
            {postList && postList.length >= 1
              ? postList?.map((post) => (
                  <Card key={`community-post-${post.boardId}`} post={post} noTopic={noTopic} pickedtool={pickedtool} />
                ))
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
            shadow
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
