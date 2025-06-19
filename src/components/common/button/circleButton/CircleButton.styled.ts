import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ButtonWrapper = styled.button<{
  shadow: boolean;
  $whiteBtn: boolean;
  size: 'large' | 'medium' | 'small' | 'mini' | 'xs';
  $disabled: boolean; //클릭은 반응하지만, 결과적으로 작동하지 않는 버튼
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

      xs: css`
        gap: 1.6rem;
        padding: 1.4rem 3.2rem;

        ${theme.fonts.body_16_b_2};
        border-radius: 5rem;
      `,
    };

    return sizeStyles[size];
  }}

  color: ${({ theme, $whiteBtn }) => ($whiteBtn ? theme.colors.iris1 : theme.colors.white1)};
  line-height: 1;
  white-space: nowrap;

  background-color: ${({ theme, $whiteBtn }) => ($whiteBtn ? theme.colors.white1 : theme.colors.iris1)};
  cursor: pointer;

  transition: background-color 0.3s ease;

  &:hover {
    color: ${({ theme, $whiteBtn }) => $whiteBtn && theme.colors.white1};

    background-color: ${({ theme, $disabled }) => !$disabled && theme.colors.iris1_hover};
    box-shadow: 0 0 12px 0 ${({ theme, $whiteBtn, $disabled }) => !$disabled && $whiteBtn && theme.colors.shadow1};
  }

  &:active {
    background-color: ${({ theme, $disabled }) => !$disabled && theme.colors.iris1_click};
  }

  ${({ $disabled, theme }) =>
    $disabled &&
    `
    color: ${theme.colors.gray4};
    background-color: ${theme.colors.gray2};
  `}

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
