import styled from '@emotion/styled';

export const PageWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 100vh;
  padding: 1rem 4rem;
  overflow: hidden;

  background: linear-gradient(105deg, #f77b1b -23.37%, #4d4ecd 67.91%);

  span {
    padding: 0 1.55rem;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 9.6rem;

  h1 {
    ${({ theme }) => theme.fonts.head_28_b};
    color: ${({ theme }) => theme.colors.white1};
    text-align: center;
  }

  p {
    margin-bottom: 0.8rem;

    ${({ theme }) => theme.fonts.head_28_b};
    color: ${({ theme }) => theme.colors.iris1};
  }
`;
