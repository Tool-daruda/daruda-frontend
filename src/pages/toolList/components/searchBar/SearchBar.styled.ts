import styled from '@emotion/styled';

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  align-items: center;
  width: 104.6rem;
  padding: 3.2rem 13.3rem 3.6rem;

  background: ${({ theme }) => theme.colors.white1};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray6};
  border-radius: 1.6rem;
`;

export const SearchBarBox = styled.div`
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

export const SearchBar = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  width: 78rem;
  height: 6.4rem;
  padding-left: 2.4rem;

  background: ${({ theme }) => theme.colors.white2};
  border: 1.5px solid ${({ theme }) => theme.colors.gray5};
  border-radius: 6rem;
  ${({ theme }) => theme.fonts.body_16_m};
`;

export const Search = styled.input`
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray2};
    ${({ theme }) => theme.fonts.body_16_m};
  }
  background: ${({ theme }) => theme.colors.white2};
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

export const RoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1.6rem;
`;

export const Label = styled.span`
  ${({ theme }) => theme.fonts.body_16_b_1};
  color: ${({ theme }) => theme.colors.gray2};
`;
