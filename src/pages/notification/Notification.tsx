import * as S from './Notification.styled';
import NotificationCard from '@components/notiCard/NotiCard';

const config = [
  { title: '[공지] 축 다루다 서버 영입', date: '99월 99일', flag: 'notice', id: '1', isRead: false },
  {
    title: '내가 작성한 “하 교수님...”글에 댓글이 달렸습니다.',
    date: '99월 99일',
    flag: 'comment',
    id: '2',
    isRead: false,
  },
  {
    title: '아무개님, daruda의 회원이 되신 것을 축하드립니다!',
    date: '99월 99일',
    flag: 'notice',
    id: '3',
    isRead: true,
  },
] as const;

const Notification = () => {
  return (
    <S.NotiWrapper>
      <S.NotiContainer>
        <h1>알림함</h1>
        <S.NotiDateList>
          <li>
            <h2>5월 3일</h2>
            <ul>
              {config.map((card) => (
                <NotificationCard card={card} key={card.id} />
              ))}
            </ul>
          </li>
          <li>
            <h2>5월 3일</h2>
            <ul>
              {config.map((card) => (
                <NotificationCard card={card} key={card.id} />
              ))}
            </ul>
          </li>
        </S.NotiDateList>
      </S.NotiContainer>
    </S.NotiWrapper>
  );
};

export default Notification;
