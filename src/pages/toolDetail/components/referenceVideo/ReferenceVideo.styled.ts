import styled from '@emotion/styled';

export const ReferenceVideoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 76.8rem;
  padding: 5.2rem 5.8rem 6.2rem;

  background-color: ${({ theme }) => theme.colors.white1};

  h2 {
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    ${({ theme }) => theme.fonts.body_24_b};
  }
`;

export const ReferenceVideoContainer = styled.div<{ count: number }>`
  display: flex;
  gap: ${({ count }) => (count === 1 ? '0' : '1.2rem')};
  justify-content: ${({ count }) => (count === 1 ? 'center' : 'flex-start')};
  width: 100%;
  height: 18rem;
`;

export const DividingLine = styled.span`
  display: flex;
  width: 68.8rem;
  height: 0.2rem;
  margin: 0 4rem;

  background-color: ${({ theme }) => theme.colors.gray5};
`;
