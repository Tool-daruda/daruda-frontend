import styled from '@emotion/styled';

export const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  align-items: center;
  width: 104.6rem;
  padding: 3.2rem 13.3rem 3.6rem;

  background: ${({ theme }) => theme.colors.iris1};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray6};
  border-radius: 1.6rem;
`;
//백그라운드 색 수정하기

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

export const SearchBarTitle = styled.p`
  ${({ theme }) => theme.fonts.head_32_b};
  color: ${({ theme }) => theme.colors.black};
`;

export const Search = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  align-self: stretch;
  width: 78rem;
  height: 6.4rem;
  padding-left: 2.4rem;

  color: ${({ theme }) => theme.colors.gray2};

  background: ${({ theme }) => theme.colors.white2};
  border: 1.5px solid ${({ theme }) => theme.colors.gray5};
  border-radius: 6rem;
  ${({ theme }) => theme.fonts.body_16_m};
`;

export const SearchChip = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  place-content: flex-start center;
  align-items: flex-start;
  width: 74.4rem;

  ${({ theme }) => theme.fonts.body_16_b_1};
  color: ${({ theme }) => theme.colors.gray2};
`;
