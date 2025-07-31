import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import * as S from './BreadCrumb.styled';
import { IcArrowRightGray20 } from '@assets/svgs';
import { CategorList } from '@components/header/category/types';

interface BreadCrumbPropTypes {
  activeTopic: string;
  activeTool: string;
}

const BreadCrumb = ({ activeTopic, activeTool }: BreadCrumbPropTypes) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const categories = queryClient.getQueryData<CategorList[]>(['category']);

  const matchedCategory = categories?.find((category) => category.koreanName === activeTopic);
  const categoryName = matchedCategory ? matchedCategory.name : '';

  return (
    <S.BreadCrumbWrapper>
      <S.BreadCrumbContainer aria-label="툴 카테고리 메뉴">
        {/* 카테고리 버튼 */}
        <S.CategoryItem
          onClick={() => {
            navigate('/toollist');
            window.scrollTo({ top: 0 });
          }}
        >
          카테고리
        </S.CategoryItem>

        {/* 활성화된 주제를 클릭하면 주제별 리스트로 이동 */}
        {activeTopic && (
          <S.CategoryItem
            onClick={() => {
              navigate(`/toollist?category=${categoryName}`);
              window.scrollTo({ top: 0 });
            }}
          >
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
