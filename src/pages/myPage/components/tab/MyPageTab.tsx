import { ImgModalcheck } from '@assets/svgs';
import { AlterModal } from '@components/modal';
import Spacing from '@components/spacing/Spacing';
import { MENU_LIST } from '@pages/myPage/constants/menuList';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Menu from './Menu';
import * as S from './MyPageTab.styled';

interface MyPageTabPropsType {
  activeMenu: number;
  handleActiveMenu: (id: number) => void;
}

const MyPageTab = ({ activeMenu, handleActiveMenu }: MyPageTabPropsType) => {
  const [menuList, setMenuList] = useState(MENU_LIST);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (id: number, url: string) => {
    setMenuList((prev) =>
      prev.map((menu) => (menu.id === id ? { ...menu, isActive: true } : { ...menu, isActive: false })),
    );
    handleActiveMenu(id);
    navigate(url);
  };

  const handleLogoutModal = () => {
    setIsLogoutOpen((prev) => !prev);
  };

  return (
    <>
      <S.ContentTab>
        <S.MenuWrapper>
          {menuList.map((menu) => (
            <Menu
              key={menu.id}
              isActive={menu.isActive}
              isWarning={menu.isWarning}
              onClick={() => handleMenuClick(menu.id, menu.url)}
            >
              {menu.label}
            </Menu>
          ))}
          <S.MenuIndicator $activeMenu={activeMenu} />
        </S.MenuWrapper>
        <Spacing size="6.4" />
        <Menu isWarning={true} onClick={handleLogoutModal}>
          로그아웃
        </Menu>
      </S.ContentTab>
      <AlterModal
        modalTitle="로그아웃하시겠어요?"
        isOpen={isLogoutOpen}
        handleClose={() => {
          alert('로그아웃');
          handleLogoutModal();
        }} // TODO: 로그아웃 로직 구현하기
        ImgPopupModal={ImgModalcheck}
        isSingleModal={false}
        modalContent="재로그인하면 다루다를 다시 이용할 수 있어요"
        DoublebtnProps={{
          isPrimaryRight: true,
          primaryBtnContent: '한 번 더 생각할게요',
          secondaryBtnContent: '로그아웃',
          handleSecondClose: handleLogoutModal,
        }}
      />
    </>
  );
};

export default MyPageTab;
