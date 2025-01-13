import { ReactNode, createContext, useContext } from 'react';

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

const ChipContext = createContext<ChipContextType | null>(null);

const Chip = ({ stroke, size, active, children, onClick }: ChipPropType) => {
  return <ChipContext.Provider value={{ stroke, size, active, onClick }}>{children}</ChipContext.Provider>;
};

const RoundContainer = ({ children }: Omit<ChipPropType, 'stroke' | 'size' | 'active'>) => {
  const context = useContext(ChipContext);
  if (!context) throw new Error('Chip 컴포넌트 안에서 사용해주세요');

  return (
    <S.ChipRoundContainer
      onClick={context.onClick}
      $stroke={context.stroke}
      $size={context.size}
      $active={context.active}
    >
      {children}
    </S.ChipRoundContainer>
  );
};

const RectContainer = ({ children }: Omit<ChipPropType, 'stroke' | 'size' | 'active'>) => {
  const context = useContext(ChipContext);
  if (!context) throw new Error('Chip 컴포넌트 안에서 사용해주세요');

  return (
    <S.ChipRectContainer
      onClick={context.onClick}
      $stroke={context.stroke}
      $size={context.size}
      $active={context.active}
    >
      {children}
    </S.ChipRectContainer>
  );
};

const Icon = ({ src, alt, width, height }: { src: string; alt?: string; width?: number; height?: number }) => {
  const context = useContext(ChipContext);
  if (!context) throw new Error('Chip 컴포넌트 안에서 사용해주세요');

  return <S.ChipIcon src={src} alt={alt} $width={width} $height={height} />;
};

const CloseIcon = ({ width = 20, height = 20 }: { width?: number; height?: number }) => {
  const context = useContext(ChipContext);
  if (!context) throw new Error('Chip 컴포넌트 안에서 사용해주세요');

  return <S.CloseIcon width={width} height={height} />;
};

const Label = ({ children }: { children: ReactNode }) => {
  const context = useContext(ChipContext);
  if (!context) throw new Error('Chip 컵포넌트 안에서 사용해주세요');

  return <S.ChipLabel>{children}</S.ChipLabel>;
};

Chip.RoundContainer = RoundContainer;
Chip.RectContainer = RectContainer;
Chip.Icon = Icon;
Chip.CloseIcon = CloseIcon;
Chip.Label = Label;

export default Chip;
