import { IcPlusWhite20, IcChevron, ImgPopupNonebookmarkScraptool } from '@assets/svgs';
import ToolListBanner from '@components/banner/ToolListBanner';
import CircleButton from '@components/button/circleButton/CircleButton';
import Spacing from '@components/spacing/Spacing';
import Title from '@components/title/Title';
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

  const postList = data?.pages.map((item) => item.contents).flat();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

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
          <ToolListBanner forCommunity={true} onToolSelect={handleToolSelect} />
          <S.CardList>
            {postList && postList.length > 1 ? (
              postList?.map((post) => <Card key={`community-post-${post.boardId}`} post={post} />)
            ) : (
              <S.NonTool>
                <ImgPopupNonebookmarkScraptool />
                <Spacing size="4.2" />
                <p>작성된 글이 없어요</p>
                <Spacing size="1" />
                <p>해당 툴에 대한 글을 작성해 정보를 공유해 보세요.</p>
              </S.NonTool>
            )}
            {hasNextPage ? <div ref={ref} /> : null}
          </S.CardList>
        </S.CommunityContainer>
        <S.FollowingBtns>
          <CircleButton
            onClick={() => navigate(`/community/write`)}
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
    </>
  );
};

export default Community;
