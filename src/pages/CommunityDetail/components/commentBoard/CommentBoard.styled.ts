import SvgDividerCommunityCmt from '@assets/svgs/DividerCommunityCmt';
import styled from '@emotion/styled';

export const CommnetWrapper = styled.section`
  width: 30%;

  background: ${({ theme }) => theme.colors.white2};
  border-radius: 0 1.6rem 1.6rem 0;
`;

export const CommentLayout = styled.div`
  width: 100%;
  padding: 2.9rem 3.3rem 3rem 3rem;
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
  height: ${({ height }) => `${height}px`};
  padding-right: 1rem;
  overflow-y: scroll;

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

export const Divider = styled(SvgDividerCommunityCmt)`
  margin: 1.2rem 0;
`;
