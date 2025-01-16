import React from 'react';

import * as S from './ConfirmBtn.styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  isActive?: boolean;
}

const ConfirmBtn = ({ isActive = false, onClick, ...rest }: ButtonProps) => {
  return (
    <S.ButtonWrapper disabled={!isActive} {...rest} onClick={onClick}>
      중복확인
    </S.ButtonWrapper>
  );
};

export default ConfirmBtn;
