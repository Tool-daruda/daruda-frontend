import React, { ReactNode } from 'react';

import * as S from './InputButton.styled';

interface InputButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  icon?: ReactNode;
  stroke?: boolean;
  disabled: boolean;
  onImageSelect?: (isSelected: boolean, fileName: string) => void;
}

const InputButton = ({ children, icon, disabled, onImageSelect, ...rest }: InputButtonProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file && onImageSelect) {
      onImageSelect(true, file.name);
    } else if (onImageSelect) {
      onImageSelect(false, '');
    }
  };

  return (
    <S.ButtonWrapper $disabled={disabled}>
      <input type="file" id="file-input" {...rest} onChange={handleFileChange} />
      <S.Label htmlFor="file-input" $disabled={disabled}>
        {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
        <span>{children}</span>
      </S.Label>
    </S.ButtonWrapper>
  );
};

export default InputButton;
