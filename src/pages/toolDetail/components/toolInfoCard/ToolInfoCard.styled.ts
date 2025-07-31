import styled from '@emotion/styled';

import Toast from '@components/toast/Toast';

export const ToolInfoCardWrapper = styled.div`
  display: flex;
  width: 104.6rem;
  height: 22.8rem;

  background-color: ${({ theme }) => theme.colors.white1};
  border-radius: 1.6rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  gap: 3.4rem;
  align-items: flex-start;
  padding: 3.2rem 10.7rem 3.2rem 4rem;
`;

export const ToolImgBox = styled.div`
  width: 10rem;
  height: 10rem;
  overflow: hidden;

  border-radius: 2.4rem;

  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
  }
`;

export const ToolInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  width: 49.9rem;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: flex-start;
  align-self: stretch;
  ${({ theme }) => theme.fonts.body_16_m};
`;

export const ToolNameBox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  color: ${({ theme }) => theme.colors.gray1};
  ${({ theme }) => theme.fonts.body_16_m};

  h1 {
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.head_28_b_48};
  }

  span {
    color: ${({ theme }) => theme.colors.gray2};
    ${({ theme }) => theme.fonts.body_16_m};
  }
`;

export const UpdateBox = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  height: 1.6rem;
  margin-top: -0.4rem;

  color: ${({ theme }) => theme.colors.orange1};
  ${({ theme }) => theme.fonts.caption_12_r};
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  width: 29.8rem;
  height: 4.8rem;
`;

export const GoSiteBtn = styled.button<{ $isClickBtn: boolean }>`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  height: 4.8rem;
  padding: 0.8rem 2.4rem;

  color: ${({ theme }) => theme.colors.white1};

  background-color: ${({ theme }) => theme.colors.iris1};
  border-radius: 4.8rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.iris1_hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.iris1_click};
  }

  ${({ $isClickBtn, theme }) =>
    $isClickBtn &&
    `
    background-color: ${theme.colors.iris1_click};
    
    `};
`;

export const IconBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.8rem;
  height: 4.8rem;

  border: 0.15rem solid ${({ theme }) => theme.colors.iris1};
  border-radius: 2.4rem;
`;

export const BookmarkIconBox = styled(IconBox)<{ $isBookmark: boolean }>`
  &:hover {
    background-color: ${({ theme, $isBookmark }) => !$isBookmark && theme.colors.iris2_hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.white1};
  }

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

  svg {
    transition: fill 0.3s ease;
  }
`;

export const ShareIconBox = styled(IconBox)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.iris2_hover};
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: flex-start;
  padding: 5.3rem 5.9rem 4.5rem 3.2rem;

  color: ${({ theme }) => theme.colors.gray1};

  ${({ theme }) => theme.fonts.caption_14_b};
  border-left: 0.1rem solid ${({ theme }) => theme.colors.gray6};
`;

export const TopBox = styled.div`
  display: flex;
  gap: 4.8rem;
  align-items: flex-start;
`;

export const License = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
  width: 6.2rem;
`;

export const KoreanSupport = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
  width: 6.5rem;
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
  width: 17.3rem;
`;

export const PlatformBtn = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  align-self: stretch;
`;

export const StyledToast = styled(Toast)`
  top: 10rem;
  z-index: 1000;
`;
