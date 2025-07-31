import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { Notification } from '@apis/notification';

const useNotiClick = (readMutation: (notiId: number) => void, notificationList: Notification[] | null | undefined) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openedNoti, setOpenedNoti] = useState<Pick<Notification, 'content' | 'title'> | null>(null);
  const navigate = useNavigate();

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleReadClick = (notiId: number, type: 'COMMENT' | 'NOTICE', boardId?: number) => {
    const noti = notificationList?.find((item) => item.id === notiId);

    if (type === 'COMMENT' && boardId) {
      navigate(`/community/${boardId}`);
    } else if (type === 'NOTICE') {
      setIsModalOpen(true);
      if (noti) {
        setOpenedNoti({ content: noti.content, title: noti.title });
      }
    }

    if (noti?.isRead) return;

    readMutation(notiId);
  };

  return {
    isModalOpen,
    openedNoti,
    handleModalClose,
    handleReadClick,
    setIsModalOpen,
    setOpenedNoti,
  };
};

export default useNotiClick;
