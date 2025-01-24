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
  gap: 2.4rem;
  align-items: center;
  justify-content: center;
  width: 100%;

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
export const cursorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 40%;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 5rem;
`;
