import styled from '@emotion/styled';

export const PageWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10rem;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  padding: 1rem 4rem;
  overflow: hidden;
`;

const scrollAnimation = `
  @keyframes scrollDown {
    0% {
      transform: translateY(70%);
    }

    100% {
      transform: translateY(-38%);
    }
  }
`;

export const Image = styled.img`
  flex-shrink: 0;
  width: 60rem;
  object-fit: cover;

  &.animation {
    transform: translateY(0);

    animation: scrollDown 4s ease-out forwards;
  }
  ${scrollAnimation}
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  h1 {
    ${({ theme }) => theme.fonts.title_40_b};
    margin: 0.4rem;
  }

  p {
    margin-bottom: 0.8rem;

    ${({ theme }) => theme.fonts.head_28_b};
    color: ${({ theme }) => theme.colors.iris1};
  }
`;

export const DetailText = styled.div`
  margin-top: 2.8rem;

  ${({ theme }) => theme.fonts.body_20_m_34};
  color: ${({ theme }) => theme.colors.gray2};
`;
