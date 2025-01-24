import styled from '@emotion/styled';

export const CoreFeatureWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 76.8rem;
  padding: 5.2rem 3.8rem;

  background-color: ${({ theme }) => theme.colors.white1};

  h1 {
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body_24_b};
    text-align: center;
  }
`;

export const CoreFeatureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  width: 69.2rem;

  ${({ theme }) => theme.fonts.body_16_b_2};
`;

export const DividingLine = styled.span`
  display: flex;
  flex-direction: column;
  width: 68.8rem;
  height: 0.2rem;
  margin: 0 4rem;

  background-color: ${({ theme }) => theme.colors.gray5};
`;
