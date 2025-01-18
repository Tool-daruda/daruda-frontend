import styled from '@emotion/styled';

export const ToolDetailWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 1.2rem 16rem 7.2rem;

  background-color: ${({ theme }) => theme.colors.white2};
`;

export const ToolDetailContainer = styled.section`
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
  justify-content: center;
  padding: 0.1rem 0;
`;

export const ToolDetailBox = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 1.6rem;
`;
// test
