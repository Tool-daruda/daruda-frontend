import styled from '@emotion/styled';

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  width: 86rem;
  margin: 2.4rem;
  padding: 4rem 9.3rem;

  background: ${({ theme }) => theme.colors.white1};
  border-radius: 16px;
`;

export const SearchResult = styled.section`
  width: 100%;

  h1 {
    ${({ theme }) => theme.fonts.body_24_b};
    margin-bottom: 2.8rem;
  }

  h2 {
    ${({ theme }) => theme.fonts.body_20_b};
    color: ${({ theme }) => theme.colors.gray1};
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.2rem;

  background: ${({ theme }) => theme.colors.gray5};
`;
