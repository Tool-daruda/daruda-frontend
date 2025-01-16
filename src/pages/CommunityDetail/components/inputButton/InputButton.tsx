import React, { ReactNode } from 'react';

import * as S from './InputButton.styled';

interface InputButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  icon?: ReactNode;
  stroke?: boolean;
  status: boolean;
  onImageSelect?: (isSelected: boolean, fileName: string) => void;
}

// 이미지를 업로드할 수 있는 Input Button 입니다.
const InputButton = ({ children, icon, status, onImageSelect, ...rest }: InputButtonProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (status) return;
    const file = e.target.files ? e.target.files[0] : null;
    if (file && onImageSelect) {
      onImageSelect(true, file.name);
    } else if (onImageSelect) {
      onImageSelect(false, '');
    }
  };

  return (
    <S.ButtonWrapper $disabled={status}>
      <input type="file" id="file-input" {...rest} onChange={handleFileChange} disabled={status} />
      <S.Label htmlFor="file-input" $disabled={status}>
        {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
        <span>{children}</span>
      </S.Label>
    </S.ButtonWrapper>
  );
};

export default InputButton;
