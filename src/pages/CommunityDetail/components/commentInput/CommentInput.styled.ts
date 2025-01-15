import styled from '@emotion/styled';

export const CardWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  align-items: center;
  width: 104.5rem;
  padding: 2rem 3.2rem;

  background: ${({ theme }) => theme.colors.white1};
  box-shadow: ${({ theme }) => theme.colors.shadow1};
  border: 1px solid ${({ theme }) => theme.colors.gray6};
  border-radius: 1.6rem;
`;

export const CardSendContainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: flex-start;
`;

const shakeAnimation = `
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-4px);
    }
    50% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
    100% {
      transform: translateX(4px);
    }
  }
`;

export const CardInputWrapper = styled.section<{ $isOverflowed: boolean }>`
  width: 81.3rem;
  padding: 2.2rem 5rem 3rem 2rem;

  background: ${({ theme }) => theme.colors.white2};
  border: 1px solid ${({ theme, $isOverflowed }) => ($isOverflowed ? theme.colors.sys_red : theme.colors.gray4)};
  border-radius: 1.6rem;

  animation: ${({ $isOverflowed }) => ($isOverflowed ? 'shake 0.5s ease-in-out' : 'none')};
  ${shakeAnimation}
`;

export const CardInput = styled.textarea`
  display: flex;
  width: 100%;
  height: auto;
  max-height: 11.2rem;
  ${({ theme }) => theme.fonts.body_16_m};
  overflow-y: auto;

  color: ${({ theme }) => theme.colors.gray2};

  background: ${({ theme }) => theme.colors.white2};

  resize: none;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.white2};
    cursor: pointer;
    border: 4px solid ${({ theme }) => theme.colors.gray4};
    border-radius: 0.4rem;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.white2};
  }

  &::-webkit-scrollbar-button:vertical:start:decrement,
  &::-webkit-scrollbar-button:vertical:start:increment,
  &::-webkit-scrollbar-button:vertical:end:decrement {
    display: block;
    height: 0.1rem;
  }
`;

export const CountingWords = styled.div<{ $isOverflowed: boolean }>`
  right: 5rem;
  bottom: 2.2rem;
  display: flex;
  gap: 0.4rem;
  justify-content: flex-end;

  ${({ theme }) => theme.fonts.caption_12_r};
  color: ${({ theme, $isOverflowed }) => ($isOverflowed ? theme.colors.sys_red : theme.colors.gray3)};
`;

export const CardBottom = styled.section`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  p {
    color: ${({ theme }) => theme.colors.gray2};
  }
`;
