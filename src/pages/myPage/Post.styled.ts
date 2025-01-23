import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: space-between;
  height: 52.6rem;
  padding-top: 1.2rem;
  padding-left: 3.6rem;
`;

export const PostContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

export const Divider = styled.div`
  width: 84.2rem;
  height: 0.1rem;

  background-color: ${({ theme }) => theme.colors.gray5};
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
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transform: translate(-50%, -50%);

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
  bottom: 3.9rem;
  left: 50%;

  transform: translateX(-50%);
`;
