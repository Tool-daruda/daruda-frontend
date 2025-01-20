import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header<{ $forOnboarding: boolean }>`
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1.95rem 16rem;

  background-color: ${({ theme, $forOnboarding }) => ($forOnboarding ? theme.colors.white2 : theme.colors.white1)};
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

export const AuthDivider = styled.span`
  margin: 0 0.8rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body_16_b_1};
`;
