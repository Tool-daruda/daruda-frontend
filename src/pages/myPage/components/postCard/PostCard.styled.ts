import styled from '@emotion/styled';

export const CardWrapper = styled.article`
  display: inline-flex;
  gap: 3.8rem;
  align-items: center;
  width: 84.2rem;
  height: 8.4rem;

  background: ${({ theme }) => theme.colors.white1};
  cursor: pointer;
`;

export const Title = styled.h2`
  flex: 1;
  margin-left: -1rem;
  overflow: hidden;

  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
  text-overflow: ellipsis;

  ${({ theme }) => theme.fonts.body_16_b_1};
`;

export const Date = styled.p`
  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.fonts.caption_14_m};
`;

export const ButtonWrapper = styled.div`
  width: 7.3rem;

  .delete-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.8rem;
    padding: 1.2rem 2.4rem;

    color: ${({ theme }) => theme.colors.gray2};
    white-space: nowrap;

    background: ${({ theme }) => theme.colors.gray6};
    border-radius: 1.2rem;

    &:hover {
      color: ${({ theme }) => theme.colors.sys_red};

      background: ${({ theme }) => theme.colors.orange2};
    }
  }
`;

export const BookmarkBtn = styled.button<{ $isBookmark: boolean }>`
  ${({ $isBookmark, theme }) =>
    $isBookmark
      ? `
    background-color: ${theme.colors.white1};
    
    svg  {
      fill: ${theme.colors.iris1};
    }
    `
      : `
    svg {
      fill: none;
    }
  `};
`;
