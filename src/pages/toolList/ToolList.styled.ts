import styled from '@emotion/styled';

export const ToolListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ToolCardWrapper = styled.div`
  width: 104.6rem;
  margin-bottom: 30rem;

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

export const FollowingBtns = styled.div`
  position: fixed;
  right: 8.7rem;
  bottom: 8rem;
  z-index: 999;
  display: inline-flex;
  flex-direction: column;
  gap: 1.4rem;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const TopBtn = styled.button`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;
  width: 5.6rem;
  height: 5.6rem;

  background: ${({ theme }) => theme.colors.black_toast};
  box-shadow: 0 0 12px 0 ${({ theme }) => theme.colors.shadow1};
  border-radius: 3.2rem;
`;
