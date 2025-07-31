import styled from '@emotion/styled';

export const PlanBoxWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 76.8rem;
  padding: 5.2rem 3.8rem 7.2rem;

  background-color: ${({ theme }) => theme.colors.white1};

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.4rem;

    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body_24_b};
  }
`;

export const ReferenceVideoContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  width: 100%;
  height: 18rem;
`;

export const DividingLine = styled.span`
  display: flex;
  flex-direction: column;
  width: 68.8rem;
  height: 0.2rem;
  margin: 0 4rem;

  background-color: ${({ theme }) => theme.colors.gray5};
`;
