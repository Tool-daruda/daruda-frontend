import styled from '@emotion/styled';

export const PageWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14rem;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-top: 10rem;
  overflow: hidden;

  span {
    padding: 0 1.55rem;
  }
`;

export const PageContainer = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;

  background: linear-gradient(
    90deg,
    rgb(245 245 245 / 0%) 22.69%,
    rgb(245 245 245 / 70%) 46.85%,
    rgb(245 245 245 / 93%) 56.37%,
    #f5f5f5 73.21%
  );

  h1 {
    ${({ theme }) => theme.fonts.title_40_b};
    margin: 0.4rem;
  }

  p {
    margin-bottom: 0.8rem;

    ${({ theme }) => theme.fonts.head_28_b};
    color: ${({ theme }) => theme.colors.iris1};
  }

  svg {
    width: 176.055px;
    height: 40px;
  }

  svg path {
    fill: ${({ theme }) => theme.colors.black};
  }
`;

const scrollLeft = `

  @keyframes leftscroll {
    0% {
    transform: translateX(-40rem);
    }
    100% {
      transform: translateX(20rem);
    }
}
`;

const scrollRight = `@keyframes rightsroll {
  0% {
    transform: translateX(40rem);
  }
  100% {
    transform: translateX(-180rem);
  }
}
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;

export const MainContent = styled.div`
  padding: 16.7rem 19rem 25.3rem 0;
`;

export const DetailText = styled.div`
  margin-top: 2.8rem;

  ${({ theme }) => theme.fonts.body_20_m_34};
  color: ${({ theme }) => theme.colors.gray2};
`;

export const Image = styled.img<{ direction?: 'left' | 'right' }>`
  min-width: fit-content;
  height: 20rem;
  object-fit: cover;

  &.animation {
    animation: ${({ direction }) =>
      direction === 'left'
        ? `
        leftscroll  3s ease-out forwards 
        `
        : `
          rightsroll 3s ease-out forwards
        `};

    ${({ direction }) =>
      direction === 'left'
        ? `
        ${scrollLeft}
        `
        : `
        ${scrollRight}
        `};
  }
`;
