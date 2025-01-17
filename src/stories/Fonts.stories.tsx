/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import { ChangeEvent, useState } from 'react';

const TextField = ({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    style={{
      width: '800px',
      margin: '16px 0',
      padding: '12px',

      color: '#121212',
      fontSize: '16px',

      border: '1px solid #ccc',
      borderRadius: '8px',
    }}
  />
);

const useInput = (defaultValue: string) => {
  const [input, setInput] = useState(defaultValue);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return [input, handleInputChange] as const;
};

const fonts = theme.fonts;

const Title = styled.h2`
  ${fonts.head_32_b};
`;

const Text = styled.p`
  ${fonts.body_20_b};
  margin-bottom: 8px;
`;

const ColorSpan = styled.span`
  color: #888;
`;

export const Introduction = () => {
  const [text, handleTextChange] = useInput('대학생활에 필요한 툴을 다루다');

  // `font-size`, `line-height` 값을 추출하는 함수
  const extractCSSProperty = (styleString: string, property: string) => {
    const match = styleString.match(new RegExp(`${property}:([\\d\\.a-zA-Z%]+)`));
    return match ? match[1] : 'N/A';
  };

  // `rem`을 `px`로 변환하는 함수
  const convertRemToPx = (value: string) => {
    const match = value.match(/^([\d.]+)rem$/);
    return match ? `${Number(match[1]) * 10}px` : value;
  };

  return (
    <div
      style={{
        padding: '24px',
        color: '#fff',
        backgroundColor: '#000',
      }}
    >
      <Title>📣 텍스트를 입력해서 확인하세요</Title>{' '}
      <TextField value={text} onChange={handleTextChange} placeholder="예시 문장을 입력해주세요" />
      {Object.keys(fonts).map((fontName) => {
        const fontStyle = fonts[fontName as keyof typeof fonts];
        const fontSizeRem = extractCSSProperty(fontStyle.styles, 'font-size');
        const fontSizePx = convertRemToPx(fontSizeRem);
        const lineHeightRem = extractCSSProperty(fontStyle.styles, 'line-height');
        const lineHeightPx = convertRemToPx(lineHeightRem);

        return (
          <div
            key={fontName}
            style={{
              marginBottom: '16px',
              padding: '16px',

              backgroundColor: '#2a2a2a',
              boxShadow: '0 4px 6px rgb(0 0 0 / 10%)',
              borderRadius: '8px',
            }}
          >
            <Text>{fontName}</Text>
            <Text>
              <p>
                <ColorSpan>font-size : </ColorSpan>
                {fontSizePx}
              </p>
              <p>
                <ColorSpan>line-height : </ColorSpan>
                {lineHeightPx}
              </p>
            </Text>
            <p css={css(fontStyle)}>{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'fonts/Fonts',
};
