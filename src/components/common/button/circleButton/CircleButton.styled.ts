import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ButtonWrapper = styled.button<{
  variant: 'default' | 'hover' | 'click' | 'dact';
  shadow: boolean;
  size: 'large' | 'medium' | 'small';
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: none;

  ${({ size, theme }) => {
    const sizeStyles = {
      large: css`
        padding: 2.4rem 5.9rem;

        background-color: ${theme.colors.gray4};
        border-radius: 5.3rem;

        ${theme.fonts.head_28_b};
      `,
      medium: css`
        gap: 0.8rem;
        ${theme.fonts.body_20_b};
        padding: 0.8rem 3.2rem 0.8rem 2rem;

        border-radius: 4.8rem;
      `,
      small: css`
        gap: 1.2rem;
        padding: 1.6rem 3.6rem;

        ${theme.fonts.body_20_b};
        border-radius: 3.2rem;
      `,
    };
    return sizeStyles[size];
  }}

  ${({ variant, theme }) =>
    variant === 'default' &&
    css`
      color: ${theme.colors.white1};

      background-color: ${theme.colors.iris1};
    `}

  ${({ variant, theme }) =>
    variant === 'hover' &&
    css`
      color: ${theme.colors.white1};

      background-color: ${theme.colors.iris_hover};
    `}

  ${({ variant, theme }) =>
    variant === 'dact' &&
    css`
      color: ${theme.colors.gray4};

      background-color: ${theme.colors.gray2};
    `}

  ${({ variant, theme }) =>
    variant === 'click' &&
    css`
      color: ${theme.colors.white1};

      background-color: ${theme.colors.iris_click};
    `}

  ${({ shadow, theme }) =>
    shadow &&
    css`
      box-shadow: 0 0 1.2rem 0 ${theme.colors.shadow1};
    `}
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
