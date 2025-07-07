import styled from '@emotion/styled';

export const NotiWrapper = styled.button`
  width: 100%;
`;

export const CardItem = styled.section<{ $isRead: boolean }>`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  padding: 1.5rem 2.4rem;

  background-color: ${({ $isRead, theme }) => ($isRead ? theme.colors.white2 : theme.colors.white1)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};

  & > svg {
    min-width: fit-content;
  }

  & div {
    width: 84%;

    text-align: start;
  }

  & h2 {
    width: 98%;
    overflow: hidden;

    ${({ theme }) => theme.fonts.caption_14_b};
    color: ${({ theme }) => theme.colors.gray1};
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & p {
    ${({ theme }) => theme.fonts.caption_12_m};
    color: ${({ theme }) => theme.colors.gray4};
  }
`;
