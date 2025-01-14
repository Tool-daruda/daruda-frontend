import Spacing from '@components/spacing/Spacing';
import { MENU_LIST } from '@pages/myPage/constants/menuList';
import { useState } from 'react';

import Menu from './Menu';
import * as S from './MyPageTab.styled';

const MyPageTab = () => {
  const [activeMenu, setActiveMenu] = useState(1);
  const [menuList, setMenuList] = useState(MENU_LIST);

  const handleMenuClick = (id: number) => {
    setMenuList((prev) =>
      prev.map((menu) => (menu.id === id ? { ...menu, isActive: true } : { ...menu, isActive: false })),
    );
    setActiveMenu(id);
  };

  return (
    <S.ContentTab>
      <S.MenuWrapper>
        {menuList.map((menu) => (
          <Menu
            key={menu.id}
            isActive={menu.isActive}
            isWarning={menu.isWarning}
            onClick={() => handleMenuClick(menu.id)}
          >
            {menu.label}
          </Menu>
        ))}
        <S.MenuIndicator $activeMenu={activeMenu} />
      </S.MenuWrapper>
      <Spacing size="6.4" />
      {/* TODO: 로그아웃 로직 구현하기  */}
      <Menu isWarning={true} onClick={() => alert('로그아웃')}>
        로그아웃
      </Menu>
    </S.ContentTab>
  );
};

export default MyPageTab;
