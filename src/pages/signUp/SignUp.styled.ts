import styled from '@emotion/styled';

export const SignUpWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3.2rem 16rem;
`;

export const Container = styled.div`
  display: flex;
  width: 104.6rem;
  height: 66.5rem;

  background-color: ${({ theme }) => theme.colors.white1};
  border: 0.1rem solid ${({ theme }) => theme.colors.gray6};
  border-radius: 2rem;
`;

export const LeftContainer = styled.section`
  flex-shrink: 0;
  width: 40.5rem;
  height: inherit;

  color: ${({ theme }) => theme.colors.white1};
  text-align: left;

  background-image: url('/images/background_img.png');
  background-size: cover;

  /* background-image: url('data:image/jpeg;base64,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'); */
  border-radius: 2rem 0 0 2rem;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  padding: 8rem 4.7rem 39.7rem;
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
  height: 4.8rem;
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
