import styled from '@emotion/styled';

export const LogintWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 7.2rem);
  padding: 3.2rem 16rem;
`;

export const Container = styled.div`
  width: 104.6rem;
  height: 58.3rem;

  text-align: center;
  ${({ theme }) => theme.fonts.body_20_m};

  background-color: ${({ theme }) => theme.colors.white1};
  border: 0.1rem solid ${({ theme }) => theme.colors.gray6};
  border-radius: 2rem;
`;

export const LogoSection = styled.div`
  height: 12rem;
  margin: 14rem 33.9rem 2.5rem 30rem;
`;

export const LoginButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6.4rem 0 auto;
`;

export const LoginButton = styled.button`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;
  width: 40rem;
  height: 6rem;

  color: ${({ theme }) => theme.colors.kakao_black};

  background-color: ${({ theme }) => theme.colors.kakao_yellow};
  border-radius: 0.8rem;
`;
