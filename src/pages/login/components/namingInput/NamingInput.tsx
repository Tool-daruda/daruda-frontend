import React, { InputHTMLAttributes } from 'react';

import * as S from './NamingInput.styled';

type NamingInputPropTypes = {
  label?: string;
  state?: 'default' | 'act' | 'error' | 'success';
  description?: string;
  inputRestrictions?: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const NamingInput = ({
  label,
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
  return (
    <S.InputWrapper>
      {label && <S.Label>{label}</S.Label>}
      <S.Input state={state} value={value} onChange={onChange} {...props} />
      {description && <S.Description state={state}>{description}</S.Description>}
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
