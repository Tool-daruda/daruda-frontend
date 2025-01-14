import styled from '@emotion/styled';

export const ButtonWrapper = styled.button<{ state: 'act' | 'dact' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.1rem;
  padding: 1.2rem 2.1rem;

  color: ${({ state, theme }) => (state === 'act' ? theme.colors.white1 : theme.colors.gray2)};

  background-color: ${({ state, theme }) => (state === 'act' ? theme.colors.gray1 : theme.colors.gray4)};
  border-radius: 1.2rem;
`;

export const TextWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.9rem;
  height: 2rem;

  ${({ theme }) => theme.fonts.caption_14_m};
`;
