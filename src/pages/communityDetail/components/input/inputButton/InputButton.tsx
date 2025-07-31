import React, { ReactNode } from 'react';

import * as S from './InputButton.styled';

interface InputButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  icon?: ReactNode;
  stroke?: boolean;
  disabled: boolean;
  status: boolean;
  onImageSelect?: (isSelected: boolean, fileName: string, file: File | null) => void;
  handleSizeError: () => void;
  handleAuthError: () => void;
  handleModalOpen: () => void;
}

// 이미지를 업로드할 수 있는 Input Button 입니다.
const InputButton = ({
  children,
  icon,
  status,
  disabled,
  onImageSelect,
  handleSizeError,
  handleAuthError,
  handleModalOpen,
  ...rest
}: InputButtonProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }

    if (status) return; // 이미 사진이 등록된 경우에, 얼리리턴

    const file = e.target.files ? e.target.files[0] : null;

    // 사진 용량 투머치 오류
    if (file && file.size > 7 * 1024 * 1024) {
      handleSizeError();
      handleModalOpen();
    }
    // 사진 첨부 정상 작동
    else if (file && onImageSelect) {
      onImageSelect(true, file.name, file);
    }
    // 비정상 작동
    else if (onImageSelect) {
      onImageSelect(false, '', null);
    }
  };

  return (
    <S.ButtonWrapper
      $disabled={status}
      onClick={() => {
        if (!disabled) return;
        handleAuthError();
        handleModalOpen();
      }}
    >
      <input
        type="file"
        id="file-input"
        {...rest}
        onChange={handleFileChange}
        disabled={status || disabled}
        style={{ display: 'none' }}
      />
      <S.Label htmlFor="file-input" $disabled={status}>
        {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
        <span>{children}</span>
      </S.Label>
    </S.ButtonWrapper>
  );
};

export default InputButton;
