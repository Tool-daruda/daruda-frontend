import { ChangeEvent, useState } from "react";

// todo: 폰트 올라오면 그거에 맞게 수정하기
const fontsObject = {
  "48_b": {
    fontFamily: "'Apple SD Gothic Neo', sans-serif",
    fontSize: "48px",
    fontWeight: 700,
    lineHeight: "80px",
  },
  "40_b": {
    fontFamily: "'Apple SD Gothic Neo', sans-serif",
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: "80px",
  },
  "32_b": {
    fontFamily: "'Apple SD Gothic Neo', sans-serif",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "64px",
  },
  "28_m": {
    fontFamily: "'Apple SD Gothic Neo', sans-serif",
    fontSize: "28px",
    fontWeight: 500,
    lineHeight: "56px",
  },
  "24_b": {
    fontFamily: "'Apple SD Gothic Neo', sans-serif",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "48px",
  },
  "24_r": {
    fontFamily: "'Apple SD Gothic Neo', sans-serif",
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "48px",
  },
  "20_m": {
    fontFamily: "'Apple SD Gothic Neo', sans-serif",
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "40px",
  },
  "20_r": {
    fontFamily: "'Apple SD Gothic Neo', sans-serif",
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "40px",
  },
  "16_b": {
    fontFamily: "'Apple SD Gothic Neo', sans-serif",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "32px",
  },
  "14_m": {
    fontFamily: "'Apple SD Gothic Neo', sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "28px",
  },
  "12_r": {
    fontFamily: "'Apple SD Gothic Neo', sans-serif",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "32px",
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
      width: "800px",
      padding: "12px",
      margin: "16px 0",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "16px",
    }}
  />
);

export default {
  title: "fonts/Fonts",
};

type FontName = keyof typeof fontsObject;

const useInput = (defaultValue: string) => {
  const [input, setInput] = useState(defaultValue);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return [input, handleInputChange] as const;
};

export const Default = () => {
  const [text, handleTextChange] = useInput("대학생활에 필요한 툴을 다루다");

  return (
    <div
      style={{
        backgroundColor: "#000",
        padding: "24px",
        color: "#FFFFFF",
      }}
    >
      <h2>📣 텍스트를 입력해서 확인하세요</h2>
      <TextField
        value={text}
        onChange={handleTextChange}
        placeholder="예시 문장을 입력해주세요"
      />

      {Object.keys(fontsObject).map((fontName) => {
        const fontObject = fontsObject[fontName as FontName];

        return (
          <div
            key={fontName}
            style={{
              backgroundColor: "#2A2A2A",
              padding: "16px",
              borderRadius: "8px",
              marginBottom: "16px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                fontWeight: 700,
                marginBottom: "8px",
              }}
            >
              {fontName}
            </p>
            <div style={{ marginBottom: "8px" }}>
              <p>
                <span style={{ color: "#888888" }}>fontWeight : </span>
                {fontObject.fontWeight}
              </p>
              <p>
                <span style={{ color: "#888888" }}>fontSize : </span>
                {fontObject.fontSize}
              </p>
              <p>
                <span style={{ color: "#888888" }}>lineHeight : </span>
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
