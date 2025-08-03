import { useState } from 'react';

import * as S from './Toggle.styled';

interface TogglePropsType {
  isSingleLine: boolean;
  planName?: string;
  label: number | string | null;
  dollar?: number;
  description: string;
  isdollar: boolean;
  zIndex: number;
}

const Toggle = ({ isSingleLine, planName, label, description, dollar, isdollar, zIndex }: TogglePropsType) => {
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
          {planName && <h3>{planName}</h3>}
          <h3>
            {formattedLabel}
            {isdollar && <span>({dollar}$)</span>}
          </h3>
        </div>
        <S.ToggleIcon $isOpen={shouldDisplayDropdown} />
      </S.ToggleBtn>
      <S.ToggleContent $isOpen={shouldDisplayDropdown} $zIndex={zIndex}>
        {description.split('\n').map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </S.ToggleContent>
    </S.ToggleWrapper>
  );
};

export default Toggle;
