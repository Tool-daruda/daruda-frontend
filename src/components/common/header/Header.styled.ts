import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1.95rem 16rem;

  background-color: ${({ theme }) => theme.colors.white1};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray4};
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

export const CategoryNav = styled.nav`
  position: relative;

  display: flex;
  gap: 0.4rem;
  align-items: center;
  width: 8.4rem;
  height: 100%;
`;

export const CategorySection = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  height: 3.2rem;

  ${({ theme }) => theme.fonts.body_16_b_1};
  color: ${({ theme }) => theme.colors.black};

  cursor: pointer;
  border-radius: 1.6rem 1.6rem 0 0;

  &:hover {
    color: ${({ theme }) => theme.colors.iris_click};
  }
`;

export const OpenedCategoryWrapper = styled.div`
  position: absolute;
  top: -1rem;
  left: -1.8rem;
  display: flex;
  flex-direction: column;
`;

export const OpenedCategory = styled.section`
  z-index: 101;

  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  width: 12rem;
  padding: 1rem 1.8rem;
  padding-bottom: 1.95rem;

  color: ${({ theme }) => theme.colors.iris_click};

  background-color: ${({ theme }) => theme.colors.white1};
  box-shadow: 0 -1.2rem 1.2rem 0 ${({ theme }) => theme.colors.shadow1};
  border-radius: 1.6rem 1.6rem 0 0;
  ${({ theme }) => theme.fonts.body_16_b_1};
`;

export const CategoryDropdown = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 0.6rem 1.2rem;
  width: 66.6rem;
  height: 14rem;
  padding: 1.6rem 1.8rem;

  color: ${({ theme }) => theme.colors.iris_click};

  background-color: ${({ theme }) => theme.colors.white1};
  box-shadow: 0 0 1.2rem 0 ${({ theme }) => theme.colors.shadow1};
  border-top: none;
  border-radius: 0 1.6rem 1.6rem;
`;

export const CategoryItem = styled.div`
  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.fonts.body_16_m};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.iris_click};
  }
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
