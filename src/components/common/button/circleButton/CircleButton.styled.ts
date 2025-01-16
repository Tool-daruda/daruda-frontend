import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ButtonWrapper = styled.button<{
  shadow: boolean;
  size: 'large' | 'medium' | 'small' | 'mini';
}>`
  display: flex;
  align-items: center;
  justify-content: center;

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
        padding: 1.6rem 3rem;

        ${theme.fonts.body_20_b};
        border-radius: 3.2rem;
      `,
      mini: css`
        gap: 2rem;
        padding: 1.6rem 3.6rem;

        ${theme.fonts.body_20_b};
        border-radius: 5.6rem;
      `,
    };
    return sizeStyles[size];
  }}

  color: ${({ theme }) => theme.colors.white1};

  background-color: ${({ theme }) => theme.colors.iris1};
  cursor: pointer;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.iris1_hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.iris1_click};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.gray4};

    background-color: ${({ theme }) => theme.colors.gray2};
  }

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
