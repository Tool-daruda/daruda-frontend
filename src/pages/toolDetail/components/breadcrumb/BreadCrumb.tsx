import { IcArrowRightGray20, IcChevronLeftBlack32 } from '@assets/svgs';
import { useNavigate } from 'react-router-dom';

import * as S from './BreadCrumb.styled';

interface BreadCrumbPropTypes {
  topicsState: { name: string; active: boolean }[];
  toolsState: { name: string; active: boolean }[];
}

const BreadCrumb = ({ topicsState, toolsState }: BreadCrumbPropTypes) => {
  const navigate = useNavigate();

  // TODO: 클릭된 경로에 맞게 보여주도록 구현하기
  const activeTopic = topicsState.find((topic) => topic.active)?.name || '';
  const activeTool = toolsState.find((tool) => tool.active)?.name || '';

  return (
    <S.BreadCrumbWrapper>
      <IcChevronLeftBlack32 cursor={'pointer'} onClick={() => navigate(-1)} />
      <S.BreadCrumbContainer>
        {/* 카테고리 버튼 */}
        <S.CategoryItem onClick={() => navigate('/toollist')}>카테고리</S.CategoryItem>

        {/* 활성화된 주제를 클릭하면 주제별 리스트로 이동 */}
        {activeTopic && (
          <S.CategoryItem onClick={() => navigate(`/toollist?category=${activeTopic}`)}>
            <IcArrowRightGray20 />
            {activeTopic}
          </S.CategoryItem>
        )}

        {/* 활성화된 도구 표시 */}
        {activeTool && (
          <S.ToolNameBox>
            <IcArrowRightGray20 />
            {activeTool}
          </S.ToolNameBox>
        )}
      </S.BreadCrumbContainer>
    </S.BreadCrumbWrapper>
  );
};

export default BreadCrumb;
