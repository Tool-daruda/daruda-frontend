import styled from '@emotion/styled';

export const ButtonWrapper = styled.div<{ $disabled: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14rem;
  height: 4.8rem;
  padding: 1rem 1.8rem;

  white-space: nowrap;

  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 1.6rem;
  ${({ theme }) => theme.fonts.body_16_m};

  &:hover span svg path,
  &:hover span svg rect {
    stroke: ${({ theme }) => theme.colors.white1};
  }

  ${({ $disabled }) =>
    $disabled &&
    `
    cursor: not-allowed;
  `}

  &:hover,
  &:hover label span {
    color: ${({ theme }) => theme.colors.white1};

    background-color: ${({ theme }) => theme.colors.iris1};
  }

  input[type='file'] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    cursor: pointer;
    opacity: 0;
  }
`;

export const Label = styled.label<{ $disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.colors.gray1};

  &:hover span {
    color: ${({ theme }) => theme.colors.white1};
  }

  ${({ theme, $disabled }) =>
    $disabled &&
    `
    color: ${theme.colors.gray2};
  `}
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.8rem;
`;
