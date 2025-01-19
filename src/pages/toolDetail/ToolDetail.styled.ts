import styled from '@emotion/styled';

export const ToolDetailWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.white2};
`;

export const ToolDetailContainer = styled.section`
  position: relative;
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
  justify-content: center;
  height: min-content;
  padding: 0.1rem 0;
`;

export const ToolDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.white1};
  border-radius: 1.6rem;
`;

export const ToolCommunityBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.white1};
  border-radius: 1.6rem;
`;
