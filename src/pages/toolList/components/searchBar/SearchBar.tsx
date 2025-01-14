import { IcSearchGray32 } from '@assets/svgs';

import * as S from './SearchBar.styled';

const SearchBar = () => {
  return (
    <S.SearchBarWrapper>
      <S.SearchBarContainer>
        <S.SearchBarTitle>필요한 툴을 쉽고 빠르게 찾아보세요.</S.SearchBarTitle>
        <S.Search>
          <IcSearchGray32 />
          지금은 준비 중이에요
        </S.Search>
        <S.SearchChip>냥</S.SearchChip>
      </S.SearchBarContainer>
    </S.SearchBarWrapper>
  );
};

export default SearchBar;
