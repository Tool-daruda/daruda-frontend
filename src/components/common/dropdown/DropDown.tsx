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

  return <S.DropDownToggleBtn onClick={handleToggle}>{children}</S.DropDownToggleBtn>;
};

const Content = ({ children }: { children: ReactNode }) => {
  const { isOpen } = useComponentContext(DropDownContext, 'DropDown');

  if (!isOpen) return;

  return <S.DropDownWrapper>{children}</S.DropDownWrapper>;
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
