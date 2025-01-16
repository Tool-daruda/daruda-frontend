import { useComponentContext } from '@hooks/index';
import { ReactNode, useState, createContext } from 'react';

import * as S from './DropDown.styled';

interface DropDownContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

interface DropDownPropType {
  position?: 'start' | 'end';
  children: ReactNode;
}

interface DropDownItemPropType {
  status?: string;
  onClick: () => void;
  children: ReactNode;
}

const DropDownContext = createContext<DropDownContextType | undefined>(undefined);

const DropDown = ({ position = 'start', children }: DropDownPropType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropDownContext.Provider value={{ isOpen, setIsOpen }}>
      <S.DropDownContainer $position={position}>{children}</S.DropDownContainer>
    </DropDownContext.Provider>
  );
};

const ToggleBtn = ({ children }: { children: ReactNode }) => {
  const { isOpen, setIsOpen } = useComponentContext(DropDownContext, 'DropDown');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.DropDownToggleBtn onClick={handleToggle} $isOpen={isOpen}>
      {children}
    </S.DropDownToggleBtn>
  );
};

// $diplay: 'bottom'의 경우, 드롭다운이 위로 펼쳐지는 경우 입니다.
const Content = ({ children, $display = 'top' }: { children: ReactNode; $display?: 'top' | 'bottom' }) => {
  const { isOpen } = useComponentContext(DropDownContext, 'DropDown');

  if (!isOpen) return null;

  return <S.DropDownWrapper $display={$display}>{children}</S.DropDownWrapper>;
};

const Item = ({ status, onClick, children }: DropDownItemPropType) => {
  return (
    <S.DropDownItem $status={status} onClick={onClick}>
      {children}
    </S.DropDownItem>
  );
};

DropDown.ToggleBtn = ToggleBtn;
DropDown.Content = Content;
DropDown.Item = Item;

export default DropDown;
