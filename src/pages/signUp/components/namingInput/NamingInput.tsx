import ConfirmBtn from '@pages/login/components/confirmButton/ConfirmBtn';
import React, { InputHTMLAttributes, useState } from 'react';

import * as S from './NamingInput.styled';

type NamingInputPropTypes = {
  label?: string;
  state?: 'default' | 'act' | 'error' | 'success';
  description?: string;
  inputRestrictions?: string[];
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const NamingInput = ({
  label = '닉네임을 입력해주세요.',
  state = 'default',
  description,
  inputRestrictions = [
    '- 최대 10자 이내로 작성해 주세요.',
    '- 띄어쓰기, 특수문자는 입력하실 수 없어요.',
    '- 기본 정보는 추후에 마이페이지에서 변경하실 수 있어요.',
  ],
  value,
  onChange,
  ...props
}: NamingInputPropTypes) => {
  const [isConfirmActive, setIsConfirmActive] = useState(false);
  const placeholder = state === 'default' ? '닉네임을 입력해주세요.' : '';
  const count = value.length;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 10) {
      onChange?.(e);
      // 입력값이 있으면 중복확인 버튼 활성화
      setIsConfirmActive(inputValue.length > 0);
    }
  };

  return (
    <S.InputWrapper>
      {label && <S.Label>{label}</S.Label>}
      <S.InputBox>
        <S.Input state={state} value={value} onChange={handleInputChange} placeholder={placeholder} {...props} />
        <ConfirmBtn isActive={isConfirmActive} />
      </S.InputBox>
      <S.DescriptionBox>
        <S.LetterCount>{count}/10</S.LetterCount>

        {description && <S.Description state={state}>{description}</S.Description>}
      </S.DescriptionBox>
      {inputRestrictions.length > 0 && (
        <S.InputRestrictions>
          {inputRestrictions.map((restriction, index) => (
            <p key={index}>{restriction}</p>
          ))}
        </S.InputRestrictions>
      )}
    </S.InputWrapper>
  );
};

export default NamingInput;
