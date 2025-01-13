import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 6.4rem;
  padding: 1.6rem 16rem;

  background-color: ${({ theme }) => theme.colors.white1};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray4};
`;

export const HeaderContainer = styled.section`
  display: flex;
  gap: 5.6rem;
  align-items: center;
  justify-content: space-between;
  max-width: 104.6rem;
  height: 100%;
  margin: 0 auto;
`;

export const LogoSection = styled.section`
  display: flex;
  width: 11.2rem;
  height: 3.3rem;
`;

export const CategoryNav = styled.nav`
  display: flex;
  align-items: center;
  width: 8.4rem;
  height: 100%;
`;

export const CategorySection = styled.button`
  position: relative;
  display: flex;
  gap: 0.4rem;
  align-items: center;
  width: 8.4rem;
  height: 100%;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body_16_b_1};
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
  gap: 2.4rem;
  align-items: center;
`;

export const NotificationButton = styled.button`
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
