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
    position: relative;
    width: 13.3rem;
    height: 5rem;
    padding-left: 2rem;

    color: ${({ theme, $isActive }) => ($isActive ? theme.colors.iris1 : theme.colors.gray4)};
    text-align: left;

    ${({ theme }) => theme.fonts.body_16_b_1};
    background-color: ${({ theme }) => theme.colors.white1};
    border-right: 1px solid ${({ theme }) => theme.colors.gray6};

    transition: all 0.3s;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 0.4rem;
      height: 5rem;

      transition: 0.3s;

      content: '';
    }

    ${({ theme, $isWarning, $isActive }) =>
      !$isActive &&
      `
        &:hover {
          color: ${$isWarning ? theme.colors.orange1 : theme.colors.gray2};
            &::before {
              position: absolute;
              top: 0;
              left: 0;
              width: 0.4rem;
              height: 5rem;

              content: '';
              background-color:  ${$isWarning ? theme.colors.orange1 : theme.colors.iris2};

              transition: 0.3s;
            }
        }
        `}
  `,
};
