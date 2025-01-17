import styled from '@emotion/styled';

export const CommnetWrapper = styled.section`
  width: 30%;

  background: ${({ theme }) => theme.colors.white2};
  border-radius: 0 1.6rem 1.6rem 0;
`;

export const CommentLayout = styled.div`
  width: 100%;
  padding: 2.9rem 3.3rem 0 3rem;
`;

export const CommentHeader = styled.section`
  display: flex;
  width: 100%;

  div {
    display: flex;
    gap: 0.4rem;

    ${({ theme }) => theme.fonts.body_16_b_1}
    color:     ${({ theme }) => theme.colors.gray1};
  }
`;

export const CommentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
