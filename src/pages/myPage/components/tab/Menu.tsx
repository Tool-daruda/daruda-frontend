import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface MenuPropsType {
  isActive?: boolean;
  isWarning?: boolean;
  children: ReactNode;
  onClick: () => void;
}

const Menu = ({ isActive = false, isWarning = false, children, onClick }: MenuPropsType) => {
  return (
    <S.MenuWrapper $isActive={isActive} $isWarning={isWarning} onClick={onClick}>
      {children}
    </S.MenuWrapper>
  );
};

export default Menu;

const S = {
  MenuWrapper: styled.button<{ $isActive: boolean; $isWarning: boolean }>`
    width: 13.3rem;
    height: 5rem;
    padding-left: calc(2rem - 4px);

    color: ${({ theme, $isActive }) => ($isActive ? theme.colors.iris1 : theme.colors.gray4)};
    text-align: left;

    background-color: ${({ theme }) => theme.colors.white1};
    ${({ theme }) => theme.fonts.body_16_b_1};
    border-left: 4px solid ${({ theme, $isActive }) => ($isActive ? theme.colors.iris1 : 'transparent')};

    transition: all 0.3s;
    ${({ theme, $isWarning, $isActive }) =>
      !$isActive &&
      `
        &:hover {
        color: ${$isWarning ? theme.colors.orange1 : theme.colors.gray2};
        border-left: 4px solid ${$isWarning ? theme.colors.orange1 : theme.colors.iris2};
        }
        `}
  `,
};
