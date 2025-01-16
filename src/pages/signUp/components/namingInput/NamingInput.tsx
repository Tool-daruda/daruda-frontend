import ConfirmBtn from '@pages/login/components/confirmButton/ConfirmBtn';
import React, { InputHTMLAttributes } from 'react';

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
  const placeholder = state === 'default' ? '닉네임을 입력해주세요.' : '';
  const count = value.length;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 10) {
      onChange?.(e);
    }
  };

  const isActive = count > 0; // 입력값이 1글자 이상일 때만 active

  return (
    <S.InputWrapper>
      {label && <S.Label>{label}</S.Label>}
      <S.InputBox>
        <S.Input state={state} value={value} onChange={handleInputChange} placeholder={placeholder} {...props} />
        <ConfirmBtn isActive={isActive} />
      </S.InputBox>
      <S.DescriptionBox>
        {description && <S.Description state={state}>{description}</S.Description>}
        <S.LetterCount>{count}/10</S.LetterCount>
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
