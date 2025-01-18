import { IcArrowRightGray20 } from '@assets/svgs';
import { useNavigate } from 'react-router-dom';

import * as S from './BreadCrumb.styled';

interface BreadCrumbPropTypes {
  activeTopic: string;
  activeTool: string;
}

const BreadCrumb = ({ activeTopic, activeTool }: BreadCrumbPropTypes) => {
  const navigate = useNavigate();

  return (
    <S.BreadCrumbWrapper>
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
