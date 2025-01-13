import styled from '@emotion/styled';

export const ButtonWrapper = styled.button<{
  variant: 'default' | 'hover' | 'dact';
  stroke: boolean;
  size: 'large' | 'small';
}>`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: none;
  border-radius: 1.6rem;
  ${({ theme }) => theme.fonts.body_16_m};

  ${({ size }) =>
    size === 'large' &&
    `
    width: 14rem;
    height: 4.8rem;
  `}

  ${({ size }) =>
    size === 'small' &&
    `
    width: 12rem;
    height: 4.8rem;
  `}

  ${({ variant, theme }) =>
    variant === 'default' &&
    `
    color: ${theme.colors.gray1};
    background-color: ${theme.colors.white1};
  `}

  ${({ variant, theme }) =>
    variant === 'hover' &&
    `
    color: ${theme.colors.white1};
    background-color: ${theme.colors.iris1};
  `}

  ${({ variant, theme }) =>
    variant === 'dact' &&
    `
    color: ${theme.colors.gray2};
    background-color: ${theme.colors.white1};
  `}

  ${({ stroke, theme }) =>
    stroke &&
    `
    border: 0.1rem solid ${theme.colors.gray4};
  `}
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
