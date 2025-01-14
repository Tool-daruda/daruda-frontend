import React from 'react';

import * as S from './ConfirmBtn.styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

const ConfirmBtn = ({ isActive = false, ...rest }: ButtonProps) => {
  const state = isActive ? 'act' : 'dact';

  return (
    <S.ButtonWrapper state={state} {...rest}>
      <S.TextWrapper>중복확인</S.TextWrapper>
    </S.ButtonWrapper>
  );
};

export default ConfirmBtn;
