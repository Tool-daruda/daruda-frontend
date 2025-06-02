import { useSearchParams } from 'react-router-dom';

import * as S from './Search.styled';
import Spacing from '@components/spacing/Spacing';
import TopBanner from '@pages/toolList/components/topBanner/TopBanner';

const Search = () => {
  const [searchParams] = useSearchParams();

  const searchKeyword = searchParams.get('keyword');

  return (
    <S.SearchWrapper>
      <TopBanner />
      <S.SearchBox>
        <S.SearchResult>
          <h1>{searchKeyword ? `"${searchKeyword}"에 대한 검색결과입니다.` : '검색어를 입력해주세요.'}</h1>
          <h2>툴 리스트</h2>
          <Spacing size="2" />
        </S.SearchResult>
        <S.Divider />
        <S.SearchResult>
          <h2>커뮤니티 전체</h2>
          <Spacing size="2.8" />
        </S.SearchResult>
      </S.SearchBox>
    </S.SearchWrapper>
  );
};

export default Search;
