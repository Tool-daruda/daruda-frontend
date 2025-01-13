import { ChangeEvent, useState } from 'react';

const fontsObject = {
  title_48_b: {
    fontFamily: "'AppleSDGothicNeoB00', sans-serif",
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: '68px',
  },
  title_40_b: {
    fontFamily: "'AppleSDGothicNeoB00', sans-serif",
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: '60px',
  },
  head_32_b: {
    fontFamily: "'AppleSDGothicNeoB00', sans-serif",
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: '48px',
  },
  head_28_m: {
    fontFamily: "'AppleSDGothicNeoM00', sans-serif",
    fontSize: '28px',
    fontWeight: 500,
    lineHeight: '56px',
  },
  body_24_b: {
    fontFamily: "'AppleSDGothicNeoB00', sans-serif",
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '32px',
  },
  body_24_sb: {
    fontFamily: "'AppleSDGothicNeoSB00', sans-serif",
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '32px',
  },
  body_20_b: {
    fontFamily: "'AppleSDGothicNeoB00', sans-serif",
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '24px',
  },
  body_20_m: {
    fontFamily: "'AppleSDGothicNeoSM00', sans-serif",
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '40px',
  },
  body_20_r: {
    fontFamily: "'AppleSDGothicNeoSR00', sans-serif",
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '40px',
  },
  body_16_b: {
    fontFamily: "'AppleSDGothicNeoB00', sans-serif",
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '32px',
  },
  body_16_b_2: {
    fontFamily: "'AppleSDGothicNeoB00', sans-serif",
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '20px',
  },
  body_16_m: {
    fontFamily: "'AppleSDGothicNeoM00', sans-serif",
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '28px',
  },
  caption_14_m: {
    fontFamily: "'AppleSDGothicNeoM00', sans-serif",
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
  },
  caption_12_b: {
    fontFamily: "'AppleSDGothicNeoB00', sans-serif",
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: '18px',
  },
  caption_12_r: {
    fontFamily: "'AppleSDGothicNeoR00', sans-serif",
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
  },
  caption_8_b: {
    fontFamily: "'AppleSDGothicNeoR00', sans-serif",
    fontSize: '8px',
    fontWeight: 400,
    lineHeight: '11px',
  },
};

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
      padding: '12px',
      margin: '16px 0',
      border: '1px solid #ccc',
      borderRadius: '8px',
      fontSize: '16px',
      color: '#121212',
    }}
  />
);

type FontName = keyof typeof fontsObject;

const useInput = (defaultValue: string) => {
  const [input, setInput] = useState(defaultValue);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return [input, handleInputChange] as const;
};

export const Introduction = () => {
  const [text, handleTextChange] = useInput('대학생활에 필요한 툴을 다루다');

  return (
    <div
      style={{
        backgroundColor: '#000',
        padding: '24px',
        color: '#FFFFFF',
      }}
    >
      <h2 style={{ ...fontsObject.head_32_b }}>📣 텍스트를 입력해서 확인하세요</h2>
      <TextField value={text} onChange={handleTextChange} placeholder="예시 문장을 입력해주세요" />

      {Object.keys(fontsObject).map((fontName) => {
        const fontObject = fontsObject[fontName as FontName];

        return (
          <div
            key={fontName}
            style={{
              backgroundColor: '#2A2A2A',
              padding: '16px',
              borderRadius: '8px',
              marginBottom: '16px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <p
              style={{
                ...fontsObject.body_20_b,
                marginBottom: '8px',
              }}
            >
              {fontName}
            </p>
            <div style={{ marginBottom: '8px', ...fontsObject.body_16_b, color: '#888888' }}>
              <p>
                <span style={{ color: '#888888' }}>fontWeight : </span>
                {fontObject.fontWeight}
              </p>
              <p>
                <span style={{ color: '#888888' }}>fontSize : </span>
                {fontObject.fontSize}
              </p>
              <p>
                <span style={{ color: '#888888' }}>lineHeight : </span>
                {fontObject.lineHeight}
              </p>
            </div>
            <p style={{ ...fontObject }}>{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'fonts/Fonts',
};
