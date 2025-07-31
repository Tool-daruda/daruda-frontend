import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15.3rem;
  padding: 1.4rem 15.3rem 2rem;

  background-color: ${({ theme }) => theme.colors.white1};
`;

export const FooterContents = styled.nav`
  display: flex;
  gap: 4.8rem;
  justify-content: center;

  color: ${({ theme }) => theme.colors.gray2};

  cursor: pointer;
  ${({ theme }) => theme.fonts.caption_14_m};
`;

export const FooterLinkItem = styled.a`
  color: ${({ theme }) => theme.colors.gray2};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterDivider = styled.div`
  width: 91.8rem;
  height: 0.1rem;

  background-color: ${({ theme }) => theme.colors.gray4};
`;

export const FooterDetail = styled.section`
  display: flex;
  gap: 10rem;
  width: 92.9rem;
  height: 4.5rem;
`;

export const FooterContact = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.gray2};
  ${({ theme }) => theme.fonts.caption_14_m};

  a {
    display: inline-flex;
    gap: 0.4rem;
    align-items: center;

    color: ${({ theme }) => theme.colors.gray2};
    text-decoration: none;
  }
`;

export const InstagramLink = styled.a`
  display: inline-flex;
  gap: 0.8rem;
  align-items: center;

  color: ${({ theme }) => theme.colors.gray2};
  ${({ theme }) => theme.fonts.caption_14_m};
`;

export const FooterTeam = styled.section`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(3, auto);
  gap: 0.5rem 3.1rem;
  width: 54.8rem;
  height: 4rem;

  color: ${({ theme }) => theme.colors.gray2};
  ${({ theme }) => theme.fonts.caption_14_m};
`;

export const TeamWrapper = styled.section`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  color: ${({ theme }) => theme.colors.gray2};
`;

export const TeamTitle = styled.h4`
  width: 3.3rem;

  color: ${({ theme }) => theme.colors.gray2};
`;

export const TeamContent = styled.h6`
  color: ${({ theme }) => theme.colors.gray2};
  text-align: left;
`;
