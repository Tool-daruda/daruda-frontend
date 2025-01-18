import styled from '@emotion/styled';

export const Container = styled.div<{
  isActive: boolean;
  isExceedingLimit: boolean;
  triggerShake: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  width: 780px;
  height: 525px;
  overflow: hidden;

  box-shadow: 0 4px 6px rgb(0 0 0 / 10%);
  box-shadow: 0 0 12px 0 rgb(211 211 211 / 63%);
  border: ${({ isExceedingLimit, isActive, theme }) =>
    isExceedingLimit
      ? `2px solid ${theme.colors.sys_red}`
      : isActive
        ? `0.2rem solid ${theme.colors.gray1}`
        : `0.1rem solid ${theme.colors.gray4}`} !important;
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

export const Divider = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 2rem;
  height: 46.5rem;

  background-color: ${({ theme }) => theme.colors.white2};
  border-left: 1px solid ${({ theme }) => theme.colors.gray4};
`;

export const TextArea = styled.textarea`
  position: absolute;
  top: 0;
  flex-shrink: 0;
  width: calc(100% - 0.1rem);
  height: 463px;
  padding: 3.2rem 6rem 0 4rem;
  overflow-y: scroll;

  font-size: 14px;
  line-height: 1.5;

  background-color: transparent;
  ${({ theme }) => theme.fonts.body_16_m};
  border-radius: 1.6rem 1.6rem 0 0;

  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.body_16_m};
  }

  &::-webkit-scrollbar {
    width: 1.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray4};
    cursor: pointer;
    border: 5px solid ${({ theme }) => theme.colors.white2};
    border-radius: 2.3rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray3};
    }
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const CharCount = styled.span<{ isExceedingLimit: boolean }>`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 780px;
  height: 62px;
  padding-right: 3.2rem;

  color: ${({ isExceedingLimit, theme }) => (isExceedingLimit ? theme.colors.sys_red : theme.colors.gray3)};
  text-align: right;
  ${({ theme }) => theme.fonts.body_20_r};

  background: ${({ theme }) => theme.colors.white1};
  border: 0.1rem solid ${({ theme }) => theme.colors.gray4};
  border-top: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 0 0 1.6rem 1.6rem;
`;
