import styled from '@emotion/styled';

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14rem;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-left: 80rem;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;
  width: 100%;
  margin-bottom: 15rem;
  overflow: hidden;

  transform: translateX(0);

  transition: transform 3s ease-in-out;
`;

export const Image = styled.img`
  flex-shrink: 0;
  object-fit: cover;

  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
`;

export const PageContainer = styled.div`
  position: absolute;
  left: 16rem;
  z-index: 2;
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

export const MainContent = styled.div`
  padding: 6.7rem 19rem 25.3rem 0;
`;

export const DetailText = styled.div`
  margin-top: 2.8rem;

  ${({ theme }) => theme.fonts.body_20_m_34};
  color: ${({ theme }) => theme.colors.gray2};
`;
