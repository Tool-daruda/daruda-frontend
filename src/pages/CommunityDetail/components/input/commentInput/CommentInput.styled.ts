import styled from '@emotion/styled';

export const CardWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  align-items: center;
  padding: 2rem 3.2rem;

  background: ${({ theme }) => theme.colors.white1};
  border: 1px solid ${({ theme }) => theme.colors.gray6};
  border-radius: 1.6rem;
`;

export const CardSendContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
  width: 100%;
`;

const errAnimation = `
  @keyframes err {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-0.4rem);
    }
    50% {
      transform: translateX(0.4rem);
    }
    75% {
      transform: translateX(-0.4rem);
    }
    100% {
      transform: translateX(0.4rem);
    }
  }
`;

export const CardInputWrapper = styled.section<{ $isOverflowed: boolean; $isFocus: boolean }>`
  width: 100%;
  padding: 2.2rem 5rem 3rem 2rem;

  background: ${({ theme }) => theme.colors.white2};
  border: 1px solid
    ${({ theme, $isOverflowed, $isFocus }) =>
      $isOverflowed ? theme.colors.sys_red : $isFocus ? theme.colors.gray4 : 'none'};
  border-radius: 0.8rem;

  animation: ${({ $isOverflowed }) => ($isOverflowed ? 'err 0.5s infinite' : 'none')};
  ${errAnimation}
`;

export const CardInput = styled.textarea`
  display: flex;
  width: 100%;
  height: auto;
  max-height: 13.5rem;
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
  justify-content: space-between;
  width: 100%;

  p {
    color: ${({ theme }) => theme.colors.gray2};
  }

  & div {
    display: flex;
    gap: 2rem;
  }
`;

export const ImgNameItem = styled.div<{ $imageSelected: boolean }>`
  display: flex;
  align-items: center;

  p {
    ${({ $imageSelected, theme }) => ($imageSelected ? theme.fonts.caption_14_m : theme.fonts.caption_12_r)};
    ${({ $imageSelected }) =>
      $imageSelected &&
      `
      margin-right: -0.7rem;
      padding-bottom: 0.7rem;
    `}
    color: ${({ $imageSelected, theme }) => ($imageSelected ? theme.colors.iris1 : theme.colors.gray2)};
    text-decoration: ${({ $imageSelected }) => ($imageSelected ? 'underline' : 'none')};
  }
`;

export const ToastWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;

  transform: translateX(-50%);
`;

export const CautionWrpper = styled.div`
  display: flex;
  width: 100%;

  & > p {
    ${({ theme }) => theme.fonts.caption_12_m};
    color: ${({ theme }) => theme.colors.gray2};
    text-align: center;
  }
`;
