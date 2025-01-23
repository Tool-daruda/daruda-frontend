import { IcArrowDownBlack24 } from '@assets/svgs';
import theme from '@styles/theme';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetCategory } from './apis/queries';
import * as S from './Category.styled';

const HEADER_TEXTS = {
  category: '카테고리',
} as const;

export const Category = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  // 카테고리 데이터 가져오기
  const { data: categoryList } = useGetCategory();
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleCategoryClick = (categoryName: string) => {
    setIsHover(false);

    // 카테고리 이름을 URL에 맞게 인코딩
    const encodedCategoryName = encodeURIComponent(categoryName);

    // '전체'일 경우 기본 경로로 이동, 그렇지 않으면 쿼리 파라미터 추가
    const url = categoryName === '전체' ? '/toollist' : `/toollist?category=${encodedCategoryName}`;

    // 해당 URL로 이동
    navigate(url);
  };

  const shouldDisplayDropdown = isHover || isOpen;

  return (
    <S.CategoryNav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <S.CategorySection aria-label="카테고리 열기" onClick={() => setIsOpen(!isOpen)}>
        {HEADER_TEXTS.category}
        <S.ToggleIcon $isOpen={shouldDisplayDropdown}>
          <IcArrowDownBlack24 stroke={shouldDisplayDropdown ? theme.colors.iris1_click : theme.colors.black} />
        </S.ToggleIcon>
      </S.CategorySection>

      {shouldDisplayDropdown && (
        <S.OpenedCategoryWrapper>
          <S.OpenedCategory>
            {HEADER_TEXTS.category}
            <S.ToggleIcon $isOpen={shouldDisplayDropdown}>
              <IcArrowDownBlack24 stroke={shouldDisplayDropdown ? theme.colors.iris1_click : theme.colors.black} />
            </S.ToggleIcon>
          </S.OpenedCategory>

          <S.CategoryDropdown>
            {categoryList?.map((category) => (
              <CategoryItem
                key={category.name}
                category={category.koreanName}
                onClick={() => handleCategoryClick(category.name)}
              />
              // 여기 온클릭 부분만 한국어말고 영어로 되게 수정했는데 괜찮을까요오?
            ))}
          </S.CategoryDropdown>
        </S.OpenedCategoryWrapper>
      )}
    </S.CategoryNav>
  );
};

// 카테고리 아이템
interface CategoryItemProps {
  category: string;
  onClick: () => void;
}

const CategoryItem = ({ category, onClick }: CategoryItemProps) => {
  return <S.CategoryItem onClick={onClick}>{category || '값 없음'}</S.CategoryItem>;
};
