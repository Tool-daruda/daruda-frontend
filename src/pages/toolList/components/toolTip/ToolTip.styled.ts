import styled from '@emotion/styled';

export const ToolTipWrapper = styled.div`
  display: flex;
`;
export const ToolTipFrame = styled.div`
  position: relative;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.8rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ theme }) => theme.fonts.body_16_b_2};
  color: ${({ theme }) => theme.colors.orange1};
  text-align: center;
`;

export const Content = styled.div`
  ${({ theme }) => theme.fonts.caption_12_r};
  color: ${({ theme }) => theme.colors.gray6};
  text-align: left;
`;

export const ToolContentFrame = styled.div`
  position: absolute;
  top: 2.6rem;
  left: 5.1rem;
`;

export const TitleImg = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
`;
