import styled from '@emotion/styled';

export const ContentTab = styled.div`
  width: 13.3rem;
  height: 100%;
  padding: 3rem 0;

  border-right: 1px solid ${({ theme }) => theme.colors.gray6};
`;

export const MenuWrapper = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const MenuIndicator = styled.div<{ $activeMenu: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 0.4rem;
  height: 5rem;

  background-color: ${({ theme }) => theme.colors.iris1};
  transform: translateY(${({ $activeMenu }) => ($activeMenu - 1) * 5}rem);

  transition: 0.3s;
`;
