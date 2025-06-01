import * as S from './Notification.styled';
import { IcAlarmNotice, IcAlarmCmt } from '@assets/svgs';

const config = [
  { title: '[공지] 축 다루다 서버 영입', date: '99월 99일', flag: 'notice', id: '1' },
  { title: '내가 작성한 “하 교수님...”글에 댓글이 달렸습니다.', date: '99월 99일', flag: 'comment', id: '2' },
  { title: '아무개님, daruda의 회원이 되신 것을 축하드립니다!', date: '99월 99일', flag: 'notice', id: '3' },
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
              {/* TODO:: cardItem 컴폰너트 import */}
              {config.map((card) => (
                <S.CardItem key={card.id}>
                  {card.flag === 'comment' ? <IcAlarmCmt /> : <IcAlarmNotice />}
                  <div>
                    <h2>{card.title}</h2>
                    <p>{card.date}</p>
                  </div>
                </S.CardItem>
              ))}
            </ul>
          </li>
        </S.NotiDateList>
      </S.NotiContainer>
    </S.NotiWrapper>
  );
};

export default Notification;
