import { IcArrowLeftBlack32 } from '@assets/svgs';
import Card from '@pages/community/components/card/Card';
import { POST_DATA } from '@pages/community/mocks';

import * as S from './CommunityDetail.styled';
import CommentBoard from './components/commentBoard/CommentBoard';
import CommnetInput from './components/commentInput/CommentInput';
import { Comment_DATA } from './mocks';

const CommunityDetail = () => {
  // TODO:: 추후에 세부 '게시글과 댓글'을 추가해서 레이아웃 잡을 예정입니다! 일단 여기에 두겠습니다
  return (
    <S.PageWrapper>
      <S.PageHeader>
        <IcArrowLeftBlack32 />
      </S.PageHeader>
      <S.BoardContainer>
        <S.PostItem>
          <Card post={POST_DATA[0]} forComment={true} />
          <CommentBoard commentList={Comment_DATA} />
        </S.PostItem>
        <CommnetInput />
      </S.BoardContainer>
    </S.PageWrapper>
  );
};

export default CommunityDetail;
