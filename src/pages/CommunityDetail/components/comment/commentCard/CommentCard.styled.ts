import styled from '@emotion/styled';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
  align-self: stretch;
`;

export const MetaInfo = styled.span`
  ${({ theme }) => theme.fonts.caption_12_r};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  color: ${({ theme }) => theme.colors.gray2};
`;

export const MetaInfoItem = styled.span`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  color: ${({ theme }) => theme.colors.gray2};
`;

export const IntroImgBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17.8rem;
  height: 10rem;
  margin: 1rem 0;
  overflow: hidden;

  box-shadow: 0 0 1.2rem 0 ${({ theme }) => theme.colors.shadow1};
  border: 0.5px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 0.8rem;

  img {
    width: inherit;
    height: inherit;
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

      background-color: ${({ theme }) => theme.colors.black_toast};
      opacity: 0.5;

      transition: opacity 0.3s ease;

      content: '';
    }
  }
`;
export const CommentImg = styled.img`
  object-fit: cover;

  border: 0.75px solid ${({ theme }) => theme.colors.gray6};
  border-radius: 0.8rem;
`;

export const CommentContent = styled.pre`
  ${({ theme }) => theme.fonts.caption_14_m};
  padding-top: 0.8rem;

  color: ${({ theme }) => theme.colors.gray1};
  white-space: pre-wrap;
`;

export const ToastWrapper = styled.div`
  position: absolute;
  bottom: 10vh;
  left: 50%;

  transform: translateX(-50%);
`;
