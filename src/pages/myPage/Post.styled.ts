import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PostWrapper = styled.div`
  padding-top: 1.2rem;
  padding-left: 3.6rem;
`;

export const PostContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Pagination = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body_16_m};
`;

export const PageNum = styled.button<{ $isCurrent: boolean }>`
  ${({ $isCurrent, theme }) =>
    $isCurrent &&
    css`
      ${theme.fonts.body_16_b_1};
    `}
`;

export const NonTool = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inheriht;

  & p:first-of-type {
    color: ${({ theme }) => theme.colors.gray1};

    ${({ theme }) => theme.fonts.body_20_b};
  }

  & p:last-of-type {
    color: ${({ theme }) => theme.colors.gray2};

    ${({ theme }) => theme.fonts.caption_14_m};
  }
`;

export const ToastWrapper = styled.div`
  position: absolute;
  top: 9.2rem;
  left: 50%;

  transform: translateX(-50%);
`;
