import ConfirmBtn from '@pages/login/components/confirmButton/ConfirmBtn';
import React, { InputHTMLAttributes } from 'react';

import * as S from './NamingInput.styled';

type NamingInputPropTypes = {
  state?: 'default' | 'act' | 'error' | 'success';
  description?: string;
  inputRestrictions?: string[];
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

const NamingInput = ({
  state = 'default',
  description,
  inputRestrictions = [
    '- 최대 10자 이내로 작성해 주세요.',
    '- 띄어쓰기, 특수문자는 입력하실 수 없어요.',
    '- 기본 정보는 추후에 마이페이지에서 변경하실 수 있어요.',
  ],
  value,
  onChange,
  onClick,
  ...props
}: NamingInputPropTypes) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 10) {
      onChange?.(e);
    }
  };

  return (
    <S.InputWrapper>
      <S.InputBox>
        <S.Input
          state={state}
          value={value}
          onChange={handleInputChange}
          placeholder={state === 'default' ? '닉네임을 입력해주세요.' : ''}
          {...props}
        />
        <ConfirmBtn isActive={value.length > 0} onClick={onClick} />
      </S.InputBox>
      <S.DescriptionBox>
        <S.LetterCount>{value.length}/10</S.LetterCount>
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
