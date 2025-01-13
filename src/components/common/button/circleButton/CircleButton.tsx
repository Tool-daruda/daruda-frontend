import { ReactNode } from 'react';

import * as S from './CircleButton.styled';

type ButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'hover' | 'click' | 'dact';
  size?: 'large' | 'medium' | 'small';
  shadow?: boolean;
};

const CircleButton = ({
  children,
  icon,
  onClick,
  variant = 'default',
  shadow = false,
  size = 'large',
}: ButtonProps) => {
  return (
    <S.ButtonWrapper onClick={onClick} variant={variant} shadow={shadow} size={size}>
      {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      <span>{children}</span>
    </S.ButtonWrapper>
  );
};

export default CircleButton;
