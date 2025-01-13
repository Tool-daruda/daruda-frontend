import { ReactNode } from 'react';

import * as S from './SquareButton.styled';

type ButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'hover' | 'dact';
  size?: 'large' | 'small';
  stroke?: boolean;
};

const Button = ({ children, icon, onClick, variant = 'default', stroke = false, size = 'large' }: ButtonProps) => {
  return (
    <S.ButtonWrapper onClick={onClick} variant={variant} stroke={stroke} size={size}>
      {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      <span>{children}</span>
    </S.ButtonWrapper>
  );
};

export default Button;
