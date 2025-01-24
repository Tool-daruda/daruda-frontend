import { Frame2087327349, ImgPopupLogoutcheck84 } from '@assets/svgs';
import { AlterModal } from '@components/modal';
import Spacing from '@components/spacing/Spacing';
import { useLogout } from '@pages/myPage/apis/queries';
import { MENU_LIST } from '@pages/myPage/constants/menuList';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Menu from './Menu';
import * as S from './MyPageTab.styled';

interface MyPageTabPropsType {
  activeMenu: number;
}

const MyPageTab = ({ activeMenu }: MyPageTabPropsType) => {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isLogoutCheckOpen, setIsLogoutCheckOpen] = useState(false);
  const navigate = useNavigate();
  const { mutate } = useLogout();

  const handleMenuClick = (url: string) => {
    navigate(url);
  };

  const handleLogoutModal = () => {
    mutate();
    setIsLogoutOpen((prev) => !prev);
  };

  const logoutModalProps = {
    modalTitle: '로그아웃하시겠어요?',
    isOpen: isLogoutOpen,
    handleClose: () => {
      handleLogoutModal();
      handleLogoutCheckModal();
    },
    ImgPopupModal: Frame2087327349,
    isSingleModal: false,
    modalContent: '재로그인하면 다루다를 다시 이용할 수 있어요',
    DoublebtnProps: {
      isPrimaryRight: true,
      primaryBtnContent: '한 번 더 생각할게요',
      secondaryBtnContent: '로그아웃',
      handleSecondClose: handleLogoutModal,
    },
  };

  const handleLogoutCheckModal = () => {
    setIsLogoutCheckOpen((prev) => !prev);
  };

  const logoutCheckModalProps = {
    modalTitle: '로그아웃이 완료되었어요',
    isOpen: isLogoutCheckOpen,
    handleClose: () => {
      handleLogoutCheckModal();
      navigate('/toollist');
    },
    ImgPopupModal: ImgPopupLogoutcheck84,
    isSingleModal: true,
    singleBtnContent: '메인 페이지로 돌아가기',
  };

  return (
    <>
      <S.ContentTab>
        <S.MenuWrapper>
          {MENU_LIST.map((menu) => (
            <Menu
              key={menu.id}
              isActive={menu.id === activeMenu}
              isWarning={menu.isWarning}
              onClick={() => handleMenuClick(menu.url)}
            >
              {menu.label}
            </Menu>
          ))}
          <S.MenuIndicator $activeMenu={MENU_LIST.findIndex((menu) => menu.id === activeMenu) + 1} />
        </S.MenuWrapper>
        <Spacing size="6.4" />
        <Menu isWarning={true} onClick={handleLogoutModal}>
          로그아웃
        </Menu>
      </S.ContentTab>
      <AlterModal {...logoutModalProps} />
      <AlterModal {...logoutCheckModalProps} />
    </>
  );
};

export default MyPageTab;
