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
`;

export const WriteTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 64px;
  margin: 0.8rem 0;
  padding: 16px;

  ${({ theme }) => theme.fonts.body_24_b};
  color: ${({ theme }) => theme.colors.black};
`;
