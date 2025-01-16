import styled from '@emotion/styled';

export const SignUpWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3.2rem 16rem 4.8rem;
`;

export const Container = styled.div`
  display: flex;
  width: 104.6rem;
  height: 66.5rem;

  background-color: ${({ theme }) => theme.colors.white1};
  box-shadow: 0 0 1.2rem 0 ${({ theme }) => theme.colors.shadow1};
  border: 0.1rem solid ${({ theme }) => theme.colors.gray4};
  border-radius: 2rem;
`;

export const LeftContainer = styled.section`
  flex-shrink: 0;
  width: 40.5rem;
  height: inherit;

  color: ${({ theme }) => theme.colors.white1};
  text-align: left;

  background-color: ${({ theme }) => theme.colors.iris1};
  border-radius: 2rem 0 0 2rem;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  padding: 16.3rem 4.1rem 31.4rem 5.3rem;
`;

export const TitleBox = styled.div`
  display: flex;
  width: 100%;

  ${({ theme }) => theme.fonts.head_32_b};
`;

export const CommentBox = styled.div`
  display: flex;
  width: 100%;

  ${({ theme }) => theme.fonts.body_16_m};
`;

export const RightContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 5rem auto 4rem;

  text-align: left;

  h1 {
    display: flex;
    margin-bottom: 4rem;

    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body_24_b};
  }
`;

export const AffiliationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: flex-start;
  width: 45.6rem;
  margin-bottom: 4rem;

  h2 {
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body_16_b_1};
  }
`;

export const AffiliationBtnBox = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  align-self: stretch;
  width: 100%;
  height: 5.6rem;
`;

export const NicknameInputBox = styled.div`
  display: flex;
  gap: 1.2rem;
  width: 40.8rem;
`;

export const SignUpBtn = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 12.3rem;
`;
