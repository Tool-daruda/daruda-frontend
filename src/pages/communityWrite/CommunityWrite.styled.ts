import styled from '@emotion/styled';

export const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WriteContainer = styled.div`
  display: flex;
`;

export const WriteBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const WriteTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 104.8rem;
  height: 64px;
  margin: 0.8rem 0;

  ${({ theme }) => theme.fonts.body_24_b};
  color: ${({ theme }) => theme.colors.black};

  cursor: pointer;
`;
