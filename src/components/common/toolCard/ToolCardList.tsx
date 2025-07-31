import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ToolCard from './ToolCard';
import * as S from './ToolCard.styled';
import { useToolListQuery } from '@apis/tool';
import LoadingLottie from '@components/lottie/Loading';

interface ToolCardListProps {
  selectedCategory: string;
  isFree: boolean;
  criteria: 'popular' | 'createdAt';
  onCategoryChange: (category: string) => void;
}

const ToolCardList = ({ selectedCategory, isFree, criteria }: ToolCardListProps) => {
  const { inView, ref } = useInView();

  const {
    data: fetchListData,
    fetchNextPage,
    isLoading,
    hasNextPage,
    isFetching,
  } = useToolListQuery({ category: selectedCategory, isFree, criteria });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const ToolList = fetchListData?.pages.map((item) => item.tools).flat();

  return (
    <S.Container>
      <S.CardList>
        {ToolList?.length === 0 && !isLoading && <S.EmptyMessage>등록된 무료 툴이 없어요</S.EmptyMessage>}
        {ToolList?.map((tool) => (
          <ToolCard
            key={tool.toolId}
            tool={tool}
            selectedCategory={selectedCategory}
            isFree={isFree}
            criteria={criteria}
          />
        ))}
      </S.CardList>
      {(isLoading || isFetching) && (
        <S.Lottie>
          <LoadingLottie />
        </S.Lottie>
      )}
      {hasNextPage ? <div ref={ref} /> : null}
    </S.Container>
  );
};

export default ToolCardList;
