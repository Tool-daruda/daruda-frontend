import styled from '@emotion/styled';

export const CardWrapper = styled.li<{ $forDetail: boolean }>`
  width: ${({ $forDetail }) => ($forDetail ? '70%' : '100%')};
  height: max-content;
  min-height: ${({ $forDetail }) => $forDetail && '694px'};

  background: ${({ theme }) => theme.colors.white1};

  a {
    cursor: ${({ $forDetail }) => $forDetail && 'default'};
  }
  border: 1px solid ${({ theme, $forDetail }) => ($forDetail ? 'none' : theme.colors.gray6)};
  border-radius: 1.6rem;
`;

export const CardLayout = styled.section`
  display: inline-flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-end;
  width: 100%;
  padding: 3rem 4.8rem 1.6rem;
`;

export const CardTopContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  align-self: stretch;
  width: 100%;

  header {
    display: flex;
    gap: 1.6rem;
    align-items: center;
  }
`;

export const MetaInfo = styled.span`
  ${({ theme }) => theme.fonts.caption_14_m};
  display: flex;
  gap: 0.6rem;
  align-items: center;

  color: ${({ theme }) => theme.colors.gray2};
`;

export const CardDivider = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 0.1rem;

  background-color: ${({ theme }) => theme.colors.gray4};

  stroke: ${({ theme }) => theme.colors.gray4};
`;

export const CardBottomBar = styled.section`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`;

export const CardTitleItem = styled.h1`
  margin-top: 0.8rem;

  ${({ theme }) => theme.fonts.body_20_b};
  color: ${({ theme }) => theme.colors.black};
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
`;

export const CardTextItem = styled.pre<{ $isImgInclude: boolean; $forDetail: boolean }>`
  display: -webkit-box;
  width: 100%;
  overflow: visible;

  ${({ theme }) => theme.fonts.caption_14_m};
  color: ${({ theme }) => theme.colors.gray1};
  white-space: pre-wrap;
  ${({ $forDetail, $isImgInclude }) =>
    !$forDetail &&
    `text-overflow: ellipsis;
    -webkit-line-clamp:${$isImgInclude ? 2 : 4};
    -webkit-box-orient: vertical;
    overflow: hidden;
    `}
  word-wrap: break-word;
  word-break: break-word;
`;

export const BottomBarLeft = styled.span`
  display: flex;
  gap: 1.9rem;
  align-items: center;
`;
export const ImageGrid = styled.div<{ $imageCount: number; $forDetail: boolean }>`
  display: grid;
  grid-template-rows: ${({ $imageCount }) => {
    switch ($imageCount) {
      case 4:
        return 'repeat(2, 1fr)';
      case 3:
        return '1fr';
      case 2:
        return '1fr';
      case 1:
        return '1fr';
      default:
        return 'none';
    }
  }};
  grid-template-columns: ${({ $imageCount }) => {
    switch ($imageCount) {
      case 4:
        return 'repeat(2, 1fr)';
      case 3:
        return 'repeat(3, 1fr)';
      case 2:
        return 'repeat(2, 1fr)';
      case 1:
        return '1fr';
      default:
        return 'none';
    }
  }};
  gap: 0.8rem;
  width: 100%;
  margin-top: 0.6rem;

  ${({ $imageCount }) =>
    $imageCount === 5 &&
    `
    & > *:nth-child(1) {
      grid-column: 1 / 4; 
      grid-row: 1 / 2; 
    }

    & > *:nth-of-type(2) {
      grid-column:  4 / 7;  
      grid-row: 1 / 2; 
    }

    & > *:nth-of-type(3) {
      grid-column: 1 / 3;  
      grid-row: 2 / 3;  
    }

    & > *:nth-of-type(4) {
      grid-column: 3 / 5;  
      grid-row: 2 / 3; 
    }

    & > *:nth-of-type(5) {
      grid-column: 5 / 7;
      grid-row: 2 / 3;  
    }
  `}

  img {
    width: 100%;

    border-radius: 0.8rem;
  }
`;
export const EachImgContainer = styled.div<{ $imageCount: number; $forDetail: boolean }>`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hover-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;

    transform: translate(-50%, -50%);
    cursor: pointer;
    opacity: 0;

    transition:
      opacity 0.3s ease,
      z-index 0.3s ease;
  }

  ${({ $forDetail, theme }) =>
    $forDetail &&
    `

  &:hover {
    .hover-icon {
      z-index: 1;

      opacity: 1;
    }

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      background-color: ${theme.colors.black_toast};
      opacity: 0.5;
      border-radius: 0.8rem;

      content: '';
    }`}
`;
