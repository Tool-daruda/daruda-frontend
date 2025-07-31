import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { IcSearchGray20 } from '@assets/svgs';

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

export const NotiWrapper = styled.div`
  position: relative;
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

export const SearchBar = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  height: 4rem;
  padding: 1rem 1.6rem;

  background: ${({ theme }) => theme.colors.white2};
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 40px;
`;

export const IcSearchGray = styled(IcSearchGray20)`
  flex-shrink: 0;
`;

export const Search = styled.input`
  width: 31rem;
  height: 1.6rem;

  color: ${({ theme }) => theme.colors.gray2};

  ${({ theme }) => theme.fonts.caption_12_r};
  background: ${({ theme }) => theme.colors.white2};
`;

export const HoverContent = styled.section<{ $visible: boolean }>`
  position: absolute;
  top: 3.3rem;
  right: -2.1rem;
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
`;

export const HoverLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 35.3rem;
  height: auto;

  color: ${({ theme }) => theme.colors.black};

  box-shadow: 0 6px 12px rgb(211 211 211 / 63%);
  border-radius: 1.6rem;
`;

export const CardHeader = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 2.9rem;
  padding: 0 2rem 1.6rem;

  background-color: ${({ theme }) => theme.colors.white1};

  & h1 {
    ${({ theme }) => theme.fonts.card_18_B_20}
    color: ${({ theme }) => theme.colors.black};
    font-weight: 700;
  }

  & a {
    color: ${({ theme }) => theme.colors.iris1};
    font-weight: 500;
    text-decoration: none;
    ${({ theme }) => theme.fonts.caption_14_m}
  }
`;

export const CardContainer = styled.ul`
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.white1};
  border-radius: 1.6rem;

  & li:first-child section {
    border-top: 1px solid ${({ theme }) => theme.colors.gray5};
  }

  & li:last-child section {
    border-bottom: none;
    border-radius: 0 0 1.6rem 1.6rem;
  }
`;

export const AuthDivider = styled.span`
  margin: 0 0.8rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body_16_b_1};
`;

export const UnreadBadgeDot = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 0.6rem;
  height: 0.6rem;

  background-color: ${({ theme }) => theme.colors.orange1};
  border-radius: 50%;
`;
