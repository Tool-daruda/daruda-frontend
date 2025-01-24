import styled from '@emotion/styled';

export const NullTextWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const NullText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.gray3};
  ${({ theme }) => theme.fonts.body_20_b};
`;

export const VideoWrapper = styled.div<{ $isPlay: boolean; $isReady: boolean }>`
  position: relative;
  width: 32rem;
  height: 18rem;
  overflow: hidden;

  border: 0.5px solid ${({ theme }) => theme.colors.gray5};
  border-radius: 1.2rem;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;

    visibility: ${({ $isPlay, $isReady }) => ($isPlay && $isReady ? 'visible' : 'hidden')};
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`;

export const ThumbnailWrapper = styled.div`
  width: 32rem;
  height: 18rem;

  img {
    width: 32rem;
    height: 18rem;
    object-fit: cover;
  }

  svg {
    opacity: 0;

    transition: opacity 0.3s ease;
  }

  &:hover {
    svg {
      z-index: 1;

      opacity: 1;
    }

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      background-color: ${({ theme }) => theme.colors.black_toast};

      transition: opacity 0.3s ease;

      content: '';
    }
  }
`;
