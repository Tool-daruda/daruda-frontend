import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  gap: 14rem;
  width: 104.6rem;
  margin: 20.5rem auto;
`;

export const Left = styled.div`
  width: 34.5rem;

  & > span {
    ${({ theme }) => theme.fonts.body_20_b};
    color: ${({ theme }) => theme.colors.gray2};
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.title_48_b};
`;

export const Content = styled.p`
  ${({ theme }) => theme.fonts.body_20_m};
  color: ${({ theme }) => theme.colors.gray2};
`;

export const Right = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 561px;
  height: 482px;

  svg {
    position: absolute;
    right: 0;
  }
`;

export const Ellipse = styled.div`
  position: absolute;
  bottom: 9.6rem;
  left: 0;
  flex-shrink: 0;
  width: 491px;
  height: 229px;

  background: #dedff5;
  border-radius: 100%;
`;
