import styled from '@emotion/styled';

export const ButtonWrapper = styled.button<{ isActive: boolean }>`
  display: flex;
  gap: 3.6rem;
  align-items: center;
  padding: 1.8rem 2rem;

  color: ${({ isActive, theme }) => (isActive ? theme.colors.iris1 : theme.colors.gray1)};

  background: ${({ theme }) => theme.colors.white1};
  border: ${({ isActive, theme }) =>
    isActive ? `2px solid ${theme.colors.iris1}` : `1px solid ${theme.colors.gray4}`};
  border-radius: 12px;

  &:active {
    border: 2px solid ${({ theme }) => theme.colors.iris1};
  }
`;

export const ToggleBtn = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ isActive, theme }) => (isActive ? theme.colors.iris1 : theme.colors.white2)};
    stroke: ${({ isActive, theme }) => (isActive ? theme.colors.iris2 : theme.colors.gray4)};
    stroke-width: 4px;
  }
`;

export const Label = styled.span`
  display: flex;
  width: 4.8rem;
  ${({ theme }) => theme.fonts.caption_14_m};
`;
