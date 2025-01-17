import { useState } from 'react';

import * as S from './Toggle.styled';

interface TogglePropsType {
  isSingleLine: boolean;
  planName?: string;
  label: number | string;
  dollar?: number;
  description: string;
  isdollar: boolean;
}

const Toggle = ({ isSingleLine, planName, label, description, dollar, isdollar }: TogglePropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const formattedLabel =
    typeof label === 'number' ? (
      <>
        월 {new Intl.NumberFormat('ko-KR').format(label)}원<span className="won-symbol">₩</span>
      </>
    ) : (
      label
    );

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const shouldDisplayDropdown = isHover || isOpen;

  return (
    <S.ToggleWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <S.ToggleBtn
        $isSingleLine={isSingleLine}
        $isOpen={shouldDisplayDropdown}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div>
          <p>{planName}</p>
          <p>
            {formattedLabel}
            {isdollar && <span>({dollar}$)</span>}
          </p>
        </div>
        <S.ToggleIcon $isOpen={shouldDisplayDropdown} />
      </S.ToggleBtn>
      <S.ToggleContent $isOpen={shouldDisplayDropdown}>
        {description.split('\n').map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </S.ToggleContent>
    </S.ToggleWrapper>
  );
};

export default Toggle;
