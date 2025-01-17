import styled from '@emotion/styled';

export const PageHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 51%;
  margin: 0.8rem 0;
  padding: 1.6rem;

  h1 {
    ${({ theme }) => theme.fonts.body_24_b};
  }
`;

export const PageWrapper = styled.section`
  padding: 0 16rem 8.2rem;
`;
export const BoardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  min-height: 694px;
`;

export const PostItem = styled.section`
  display: flex;
  width: 100%;

  background: ${({ theme }) => theme.colors.white1};
  box-shadow: 0 0 1.2rem 0 ${({ theme }) => theme.colors.shadow1};
  border: 1px solid ${({ theme }) => theme.colors.gray6};
  border-radius: 1.6rem;
`;
