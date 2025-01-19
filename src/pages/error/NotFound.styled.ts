import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  gap: 14rem;
  width: 104.6rem;
  margin: 20.5rem auto;
`;

export const Left = styled.div`
  width: 34.5rem;
  margin-top: 3.3rem;

  & > span {
    ${({ theme }) => theme.fonts.body_20_b};
    color: ${({ theme }) => theme.colors.gray2};
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.title_48_b};
  width: max-content;
`;

export const Content = styled.p`
  ${({ theme }) => theme.fonts.body_20_m};
  color: ${({ theme }) => theme.colors.gray2};
`;

export const Right = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 56.1rem;
  height: 48.2rem;

  img {
    position: absolute;
    right: 0;
  }
`;

export const Ellipse = styled.div`
  position: absolute;
  bottom: 9.6rem;
  left: 0;
  z-index: -1;
  flex-shrink: 0;
  width: 49.1rem;
  height: 22.9rem;

  background: #dedff5;
  border-radius: 100%;
`;
