import useNotiClick from './hooks/useNotiClick';
import * as S from './Notification.styled';
import {
  // useNotiListQuery,
  useReadMutation,
} from '@apis/notification';
import { NotiModal } from '@components/modal';
import NotificationCard from '@components/notiCard/NotiCard';
import { useNotifications } from 'src/hoc/NotificationProvider';
import groupByDate from 'src/utils/formatByDate';

const Notification = () => {
  const notificaton = useNotifications();
  const { mutate: readMutation } = useReadMutation();

  const { isModalOpen, openedNoti, handleModalClose, handleReadClick } = useNotiClick(readMutation, notificaton);

  const grouped = groupByDate(notificaton || []);

  return (
    <S.NotiWrapper>
      <S.NotiContainer>
        <h1>알림함</h1>
        <S.NotiDateList>
          {Object.entries(grouped).map(([date, cards]) => (
            <li key={date}>
              <S.NotiDateText>{date}</S.NotiDateText>
              <ul>
                {cards.map((card) => (
                  <NotificationCard key={card.id} card={card} handleClick={handleReadClick} />
                ))}
              </ul>
            </li>
          ))}
          {notificaton?.length === 0 && <S.NotiEmptyText>최근 알림이 없어요</S.NotiEmptyText>}
        </S.NotiDateList>
      </S.NotiContainer>
      {openedNoti && (
        <NotiModal
          isOpen={isModalOpen}
          handleClose={handleModalClose}
          title={openedNoti?.title}
          content={openedNoti?.content}
        />
      )}
    </S.NotiWrapper>
  );
};

export default Notification;
