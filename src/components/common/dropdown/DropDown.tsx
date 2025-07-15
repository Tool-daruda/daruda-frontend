import { ReactNode, createContext } from 'react';

import * as S from './DropDown.styled';
import { useComponentContext } from '@hooks/index';

interface DropDownContextType {
  isDropdownOpen: boolean;
  onDropdownToggle: () => void;
}

interface DropDownPropType {
  position?: 'start' | 'end';
  children: ReactNode;
  isDropdownOpen: boolean;
  onDropdownToggle: () => void;
}

interface DropDownItemPropType {
  status?: string;
  onClick: () => void;
  children: ReactNode;
}

const DropDownContext = createContext<DropDownContextType | undefined>(undefined);

const DropDown = ({ position = 'start', isDropdownOpen, onDropdownToggle, children }: DropDownPropType) => {
  return (
    <DropDownContext.Provider value={{ isDropdownOpen, onDropdownToggle }}>
      <S.DropDownContainer $position={position}>{children}</S.DropDownContainer>
    </DropDownContext.Provider>
  );
};

const ToggleBtn = ({ children }: { children: ReactNode }) => {
  const { isDropdownOpen, onDropdownToggle } = useComponentContext(DropDownContext, 'DropDown');

  return (
    <S.DropDownToggleBtn onClick={onDropdownToggle} $isOpen={isDropdownOpen}>
      {children}
    </S.DropDownToggleBtn>
  );
};

// $diplay: 'bottom'의 경우, 드롭다운이 위로 펼쳐지는 경우 입니다.
const Content = ({ children, $display = 'top' }: { children: ReactNode; $display?: 'top' | 'bottom' }) => {
  const { isDropdownOpen } = useComponentContext(DropDownContext, 'DropDown');

  if (!isDropdownOpen) return null;

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
