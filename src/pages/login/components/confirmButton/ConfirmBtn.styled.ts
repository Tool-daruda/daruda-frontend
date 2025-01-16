import styled from '@emotion/styled';

export const ButtonWrapper = styled.button`
  min-width: 9.1rem;
  padding: 1.2rem 0;

  color: ${({ theme }) => theme.colors.white1};
  white-space: nowrap;

  background-color: ${({ theme }) => theme.colors.gray1};
  cursor: pointer;
  border: none;
  border-radius: 1.2rem;
  ${({ theme }) => theme.fonts.caption_14_m};

  &:disabled {
    color: ${({ theme }) => theme.colors.gray2};

    background-color: ${({ theme }) => theme.colors.gray4};
    cursor: not-allowed;
  }
`;
