import styled from '@emotion/styled';

export const ToolListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ToolCardWrapper = styled.div`
  width: 104.6rem;
  margin-bottom: 5rem;

  background: ${({ theme }) => theme.colors.white1};
  border-radius: 1.6rem;
`;

export const ToolCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3.2rem 9.3rem 2.8rem;
`;

export const ToolCardTitleRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.fonts.body_16_b_1};

  color: ${({ theme }) => theme.colors.gray2};
`;

export const ToolCardTitleLeft = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.fonts.body_24_b};
  color: ${({ theme }) => theme.colors.black};
`;

export const SortButton = styled.button<{ isActive: boolean }>`
  margin: 0 0.8rem;
  padding: 0.4rem 0.8rem;

  color: ${({ theme }) => theme.colors.gray2};

  ${({ isActive, theme }) => (isActive ? theme.fonts.body_16_b_1 : theme.fonts.body_16_m)};
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  position: relative;
  display: flex;

  cursor: pointer;
`;

export const HoverComponent = styled.div`
  position: absolute;
  top: -1.2rem;
  left: 4rem;
  z-index: 10;
`;
