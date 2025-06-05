import * as S from './NotiCard.style';
import { IcAlarmNotice, IcAlarmCmt, IcAlarmCmtDeactive, IcAlarmNoticeDeactive } from '@assets/svgs';

// TODO: api 연결시, apis 폴더 내부 model 파일로 타입 코드 이동
type configType = {
  card: {
    title: string;
    date: string;
    flag: 'comment' | 'notice';
    id: string;
    isRead: boolean;
  };
};

const NotificationCard = ({ card }: configType) => {
  const { title, isRead, flag, date } = card;
  return (
    <li>
      <S.CardItem $isRead={isRead}>
        {flag === 'comment' && (isRead ? <IcAlarmCmtDeactive /> : <IcAlarmCmt />)}
        {flag === 'notice' && (isRead ? <IcAlarmNoticeDeactive /> : <IcAlarmNotice />)}
        <div>
          <h2>{title}</h2>
          <p>{date}</p>
        </div>
      </S.CardItem>
    </li>
  );
};

export default NotificationCard;
