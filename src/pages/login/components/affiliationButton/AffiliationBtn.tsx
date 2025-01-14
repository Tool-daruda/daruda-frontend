import { useTheme } from '@emotion/react';
import SvgEllipse5276 from '@pages/login/assets/Ellipse5276';
import { useState } from 'react';

import * as S from './AffiliationBtn.styled';

export type AffiliationBtnProps = {
  label: string;
  defaultActive?: boolean;
  onToggle?: (isActive: boolean) => void;
};

const AffiliationBtn = ({ label, defaultActive = false, onToggle }: AffiliationBtnProps) => {
  const [isActive, setIsActive] = useState(defaultActive);
  const theme = useTheme();

  const handleToggle = () => {
    const newActiveState = !isActive;
    setIsActive(newActiveState);
    if (onToggle) onToggle(newActiveState);
  };

  const fillColor = isActive ? theme.colors.iris1 : theme.colors.white2;
  const strokeColor = isActive ? theme.colors.iris2 : theme.colors.gray4;

  return (
    <S.ButtonWrapper isActive={isActive} onClick={handleToggle}>
      <S.Label>{label}</S.Label>
      <S.ToggleBtn isActive={isActive}>
        <SvgEllipse5276 fillColor={fillColor} strokeColor={strokeColor} />
      </S.ToggleBtn>
    </S.ButtonWrapper>
  );
};

export default AffiliationBtn;
