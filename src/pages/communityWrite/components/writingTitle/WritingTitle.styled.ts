import styled from '@emotion/styled';

export const Container = styled.div<{
  isActive: boolean;
  isExceedingLimit: boolean;
  triggerShake: boolean;
}>`
  display: inline-flex;
  width: 78rem;
  height: 7.7rem;
  padding: 2.4rem 4rem;

  background: ${({ theme }) => theme.colors.white1};
  border: ${({ isExceedingLimit, isActive, theme }) =>
    isExceedingLimit
      ? `2px solid ${theme.colors.sys_red}`
      : isActive
        ? `2px solid ${theme.colors.gray1}`
        : `1px solid ${theme.colors.gray6}`};
  border-radius: 1.6rem;

  animation: ${({ triggerShake }) => (triggerShake ? `shake 0.3s ease` : 'none')};

  @keyframes shake {
    0% {
      transform: translateX(0);
    }

    25% {
      transform: translateX(-0.2rem);
    }

    50% {
      transform: translateX(0.2rem);
    }

    75% {
      transform: translateX(-0.2rem);
    }

    100% {
      transform: translateX(0);
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.fonts.body_20_b};
  background-color: ${({ theme }) => theme.colors.white1};
  border-radius: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray3};
  }
`;
