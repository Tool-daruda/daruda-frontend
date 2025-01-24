import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header<{ $forOnboarding: boolean }>`
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1.95rem 16rem;

  background-color: ${({ theme, $forOnboarding }) => ($forOnboarding ? 'transparent' : theme.colors.white1)};
  border-bottom: 0.1rem solid ${({ theme, $forOnboarding }) => ($forOnboarding ? 'none' : theme.colors.gray4)};
`;

export const HeaderContainer = styled.section`
  display: flex;
  gap: 5.6rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const LogoSection = styled.section`
  display: flex;
  width: 11.2rem;
  height: 3.3rem;
`;

export const CommunityNav = styled.nav`
  z-index: 3;
  margin-right: auto;
`;

export const AuthSection = styled.nav`
  display: flex;
  align-items: center;
`;

export const MyPageSection = styled.section`
  display: flex;
  gap: 3.6rem;
  align-items: center;
  justify-content: center;
`;

export const NotificationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
`;

export const MyPageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  ${({ theme }) => theme.fonts.body_16_b_1};
`;

export const HoverContent = styled.section<{ $visible: boolean }>`
  position: absolute;
  top: 4.1rem;
  right: 18.8rem;
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};

  p {
    color: ${({ theme }) => theme.colors.white1};
  }
`;

export const HoverLayout = styled.div`
  position: relative;

  p {
    position: absolute;
    top: 55%;
    left: 50%;
    z-index: 99;
    width: max-content;

    color: ${({ theme }) => theme.colors.white1};
    ${({ theme }) => theme.fonts.body_16_b_1};

    transform: translate(-50%, -50%);
  }
`;

export const AuthDivider = styled.span`
  margin: 0 0.8rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body_16_b_1};
`;
