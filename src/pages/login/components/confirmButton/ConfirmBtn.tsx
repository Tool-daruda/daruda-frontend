import React from 'react';

import * as S from './ConfirmBtn.styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

const ConfirmBtn = ({ isActive = false, ...rest }: ButtonProps) => {
  // props로 전달된 isActive에 따라 상태 설정
  const state = isActive ? 'act' : 'dact';

  return (
    <S.ButtonWrapper state={state} {...rest}>
      <S.TextWrapper>중복확인</S.TextWrapper>
    </S.ButtonWrapper>
  );
};

export default ConfirmBtn;
