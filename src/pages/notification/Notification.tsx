import * as S from './Notification.styled';
import { useNotiListQuery, useReadMutation } from '@apis/notification';
import NotificationCard from '@components/notiCard/NotiCard';
import { useNotifications } from 'src/hoc/NotificationProvider';
import groupByDate from 'src/utils/formatByDate';

const Notification = () => {
  useNotifications();
  const { mutate: readMutation } = useReadMutation();

  const { data: notificationList } = useNotiListQuery();
  const grouped = groupByDate(notificationList || []);

  const handleReadClick = (notiId: number) => {
    readMutation(notiId);
  };

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
        </S.NotiDateList>
      </S.NotiContainer>
    </S.NotiWrapper>
  );
};

export default Notification;
