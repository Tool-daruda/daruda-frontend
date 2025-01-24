import { ReactNode, ButtonHTMLAttributes } from 'react';

import * as S from './CircleButton.styled';

type ButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  shadow?: boolean;
  size?: 'large' | 'medium' | 'small' | 'mini';
  whiteBtn?: boolean;
  handleClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CircleButton = ({
  children,
  icon,
  shadow = false,
  size = 'large',
  whiteBtn = false,
  handleClick,
  ...props
}: ButtonProps) => {
  return (
    <S.ButtonWrapper
      shadow={shadow}
      size={size}
      disabled={props.disabled}
      $whiteBtn={whiteBtn}
      onClick={handleClick}
      {...props}
    >
      {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      <span>{children}</span>
    </S.ButtonWrapper>
  );
};

export default CircleButton;
