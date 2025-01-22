import React, { ReactNode } from 'react';

import * as S from './SquareButton.styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
  size?: 'large' | 'small';
  stroke?: boolean;
  handleClick?: () => void;
  forBookMark?: boolean;
}

const SquareButton = ({
  children,
  icon,
  size = 'large',
  stroke = false,
  handleClick,
  forBookMark = false,
  ...rest
}: ButtonProps) => {
  return (
    <S.ButtonWrapper size={size} stroke={stroke} {...rest} onClick={handleClick} $forBookMark={forBookMark}>
      {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      <span>{children}</span>
    </S.ButtonWrapper>
  );
};

export default SquareButton;
