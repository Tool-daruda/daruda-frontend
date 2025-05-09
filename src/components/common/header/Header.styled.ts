import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header<{ $forOnboarding: boolean }>`
  position: sticky;
  top: 0;
  z-index: 4;
  padding: 1.95rem 3.2rem;

  background-color: ${({ theme, $forOnboarding }) => ($forOnboarding ? 'transparent' : theme.colors.white1)};
  border-bottom: 0.1rem solid ${({ theme, $forOnboarding }) => ($forOnboarding ? 'none' : theme.colors.gray4)};
`;

export const HeaderContainer = styled.nav`
  display: flex;
  gap: 5.6rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const NavLeftSection = styled.ul`
  display: flex;
  gap: 5.4rem;
  align-items: center;
  justify-content: flex-start;
`;

export const NavContainer = styled.li`
  z-index: 2;
`;

export const AuthSection = styled.ul`
  display: flex;
  gap: 3.6rem;
  align-items: center;
  justify-content: center;
`;

export const NotificationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6%;

  cursor: pointer;
`;

export const MyPageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
`;

const baseLinkStyle = (theme: Theme) => css`
  color: ${theme.colors.black};
  text-decoration: none;
  ${theme.fonts.body_16_b_1};
`;

export const StyledLink = styled(Link)`
  ${({ theme }) => baseLinkStyle(theme)}
`;

export const StyledAnchor = styled.a`
  ${({ theme }) => baseLinkStyle(theme)}
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
