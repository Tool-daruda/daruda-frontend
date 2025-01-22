import styled from '@emotion/styled';

export const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 7.5rem;
`;

export const WriteContainer = styled.div`
  display: flex;
`;

export const WriteBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-right: 2rem;
`;

export const WriteTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 104.8rem;
  height: 6.4rem;
  margin: 0.8rem 0;

  ${({ theme }) => theme.fonts.body_24_b};
  color: ${({ theme }) => theme.colors.black};

  cursor: pointer;
`;

export const SideBanner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const ToastBox = styled.div`
  position: absolute;
  top: 74rem;
  left: 38rem;
  z-index: 3;
`;
