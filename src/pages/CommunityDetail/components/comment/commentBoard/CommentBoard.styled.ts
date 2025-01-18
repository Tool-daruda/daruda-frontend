import styled from '@emotion/styled';

export const CommnetWrapper = styled.section`
  width: 30%;

  background: ${({ theme }) => theme.colors.white2};
  border-radius: 0 1.6rem 1.6rem 0;
`;

export const CommentLayout = styled.div`
  width: 100%;
  padding: 2.9rem 3.3rem 3rem 2rem;
`;

export const CommentHeader = styled.section`
  display: flex;
  width: 100%;

  div {
    display: flex;
    gap: 0.4rem;

    ${({ theme }) => theme.fonts.body_16_b_1}
    color:     ${({ theme }) => theme.colors.gray1};
  }
`;

export const CommentList = styled.ul<{ height: number }>`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: ${({ height }) => `${height - 93}px`};
  padding-right: 1.3rem;
  overflow: clip scroll;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.white2};
    cursor: pointer;
    border: 4px solid ${({ theme }) => theme.colors.gray4};
    border-radius: 0.4rem;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.white2};
  }

  &::-webkit-scrollbar-button:vertical:start:decrement,
  &::-webkit-scrollbar-button:vertical:start:increment,
  &::-webkit-scrollbar-button:vertical:end:decrement {
    display: block;
    height: 0.1rem;
  }
`;

export const Divider = styled.div`
  width: inherit;
  height: 0.15rem;
  margin: 1.2rem 0;

  background: ${({ theme }) => theme.colors.gray4};
  border-radius: 0.7rem;
`;

export const EmptySpaceWrapper = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  padding-top: 25.8rem;
`;

export const EmptySpaceTitle = styled.section`
  ${({ theme }) => theme.fonts.body_20_b};
  color: ${({ theme }) => theme.colors.gray1};
  text-align: center;
`;

export const EmptySpaceText = styled.section`
  ${({ theme }) => theme.fonts.caption_14_m};
  color: ${({ theme }) => theme.colors.gray2};
`;
