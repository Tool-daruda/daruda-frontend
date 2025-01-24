import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40.8rem;
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 1.2rem;

  ${({ theme }) => theme.fonts.body_16_b_1};
  color: ${({ theme }) => theme.colors.black};
`;

export const InputBox = styled.div`
  display: flex;
  gap: 1.6rem;
  width: 100%;
  height: 4.8rem;
  margin-bottom: 0.6rem;
`;

export const DescriptionBox = styled.div<{ $description: boolean }>`
  display: flex;
  flex-direction: ${({ $description }) => ($description ? '' : 'row-reverse')};
  justify-content: space-between;
  width: 30.1rem;
  height: 1.8rem;
  margin-bottom: 0.6rem;
`;

export const Input = styled.input<{ state: 'default' | 'act' | 'error' | 'success' }>`
  width: 100%;
  padding: 1.4rem 2.2rem;

  border: 0.1rem solid;
  ${({ theme }) => theme.fonts.caption_14_m};
  border-color: ${({ state, theme }) => {
    switch (state) {
      case 'act':
        return theme.colors.gray1;
      case 'error':
        return theme.colors.sys_red;
      case 'success':
        return theme.colors.sys_green;
      default:
        return theme.colors.gray4;
    }
  }};
  border-radius: 1.2rem;
`;

export const Description = styled.span<{ state: 'default' | 'act' | 'error' | 'success' }>`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.fonts.caption_12_m};
  color: ${({ state, theme }) => {
    switch (state) {
      case 'act':
        return theme.colors.gray1;
      case 'error':
        return theme.colors.sys_red;
      case 'success':
        return theme.colors.sys_green;
      default:
        return null;
    }
  }};
`;

export const LetterCount = styled.pre`
  display: flex;

  ${({ theme }) => theme.fonts.caption_14_m};
  color: ${({ theme }) => theme.colors.black};
`;

export const InputRestrictions = styled.pre`
  width: 31.4rem;
  height: 6rem;

  ${({ theme }) => theme.fonts.caption_14_m};
  color: ${({ theme }) => theme.colors.black};
`;
