import { useComponentContext } from '@hooks/index';
import { ReactNode, createContext } from 'react';

import * as S from './Chip.styled';

interface ChipContextType {
  stroke?: boolean;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  active?: boolean;
  onClick?: () => void;
}

interface ChipPropType {
  stroke?: boolean;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  active?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

const ChipContext = createContext<ChipContextType | undefined>(undefined);

const Chip = ({ stroke, size, active, children, onClick }: ChipPropType) => {
  return <ChipContext.Provider value={{ stroke, size, active, onClick }}>{children}</ChipContext.Provider>;
};

const RoundContainer = ({ children }: Omit<ChipPropType, 'stroke' | 'size' | 'active'>) => {
  const { onClick, stroke, size, active } = useComponentContext(ChipContext, 'Chip');

  return (
    <S.ChipRoundContainer onClick={onClick} $stroke={stroke} $size={size} $active={active}>
      {children}
    </S.ChipRoundContainer>
  );
};

const RectContainer = ({ children }: Omit<ChipPropType, 'stroke' | 'size' | 'active'>) => {
  const { onClick, stroke, size, active } = useComponentContext(ChipContext, 'Chip');

  return (
    <S.ChipRectContainer onClick={onClick} $stroke={stroke} $size={size} $active={active}>
      {children}
    </S.ChipRectContainer>
  );
};

const Icon = ({ src, alt, width, height }: { src: string; alt?: string; width?: number; height?: number }) => {
  useComponentContext(ChipContext, 'Chip');

  return <S.ChipIcon src={src} alt={alt} $width={width} $height={height} />;
};

const CloseIcon = ({ width = 20, height = 20 }: { width?: number; height?: number }) => {
  useComponentContext(ChipContext, 'Chip');

  return <S.CloseIcon width={width} height={height} />;
};

const Label = ({ children }: { children: ReactNode }) => {
  useComponentContext(ChipContext, 'Chip');

  return <S.ChipLabel>{children}</S.ChipLabel>;
};

Chip.RoundContainer = RoundContainer;
Chip.RectContainer = RectContainer;
Chip.Icon = Icon;
Chip.CloseIcon = CloseIcon;
Chip.Label = Label;

export default Chip;
