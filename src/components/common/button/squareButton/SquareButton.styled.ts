import styled from '@emotion/styled';

export const ButtonWrapper = styled.button<{
  size: 'large' | 'small';
  stroke: boolean;
  $forBookMark: boolean;
}>`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: flex-start;

  ${({ theme }) => theme.fonts.body_16_m};
  color: ${({ theme, size }) => (size === 'large' ? theme.colors.gray2 : theme.colors.gray1)};
  line-height: 1;

  background-color: ${({ theme }) => theme.colors.white1};

  ${({ size }) => {
    switch (size) {
      case 'large':
        return `
          width: 14rem;
          height: 4.8rem;
          border-radius: 1.6rem;
        `;
      case 'small':
      default:
        return `
          width: 12rem;
          height: 4.8rem;
          padding: 1rem 0.8rem;
          border-radius: 1.2rem;
        `;
    }
  }}

  ${({ stroke, theme }) => {
    switch (stroke) {
      case true:
        return `border: 1px solid ${theme.colors.gray4};`;
      case false:
      default:
        return '';
    }
  }}

  &:hover {
    color: ${({ theme }) => theme.colors.iris1_hover};

    background-color: ${({ theme }) => theme.colors.white1};
  }

  &:hover svg path,
  &:hover svg rect {
    color: ${({ theme }) => theme.colors.iris1_hover};

    stroke: ${({ theme }) => theme.colors.iris1_hover};
  }

  &:active span svg path {
    fill: ${({ theme, $forBookMark }) => ($forBookMark ? theme.colors.iris1_click : theme.colors.white1)};
    stroke: ${({ theme }) => theme.colors.iris1_click};
  }

  &:active {
    color: ${({ theme }) => theme.colors.iris1_click};

    background-color: ${({ theme }) => theme.colors.white1};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.gray5};

    background-color: ${({ theme }) => theme.colors.gray3};
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
