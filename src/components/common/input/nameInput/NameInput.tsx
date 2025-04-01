import ConfirmBtn from '@pages/login/components/confirmButton/ConfirmBtn';
import React, { ChangeEvent, InputHTMLAttributes } from 'react';

import * as S from './NameInput.styled';

type NameInputPropTypes = {
  label?: string;
  state?: 'default' | 'act' | 'error' | 'success';
  description?: string;
  inputRestrictions?: string[];
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

const NameInput = ({
  label,
  state = 'default',
  description,
  inputRestrictions = ['- 최대 10자 이내로 작성해 주세요.', '- 띄어쓰기, 특수문자는 입력하실 수 없어요.'],
  value,
  onChange,
  onButtonClick,
  ...props
}: NameInputPropTypes) => {
  const placeholder = state === 'default' ? '닉네임을 입력해주세요.' : '';
  const count = value.length;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (/^[ㄱ-ㅎ가-힣a-zA-Z0-9]*$/.test(newValue) && newValue.length <= 10) {
      onChange?.(e);
    } else if (newValue.length <= value.length) {
      onChange?.(e);
    }
  };

  const isActive = count > 0; // 입력값이 1글자 이상일 때만 활성화

  return (
    <S.InputWrapper>
      {label && <S.Label>{label}</S.Label>}
      <S.InputBox>
        <S.Input state={state} value={value} onChange={handleInputChange} placeholder={placeholder} {...props} />
        <ConfirmBtn isActive={isActive} onClick={onButtonClick} />
      </S.InputBox>
      <S.DescriptionBox $description={!!description}>
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

export default NameInput;
