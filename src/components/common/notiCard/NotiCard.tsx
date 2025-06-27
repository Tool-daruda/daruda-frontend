import * as S from './NotiCard.style';
import { IcAlarmNotice, IcAlarmCmt, IcAlarmCmtDeactive, IcAlarmNoticeDeactive } from '@assets/svgs';
import { formatToMonthDay } from 'src/utils/formatDate';

// TODO: api 연결시, apis 폴더 내부 model 파일로 타입 코드 이동
type configType = {
  card: {
    title: string;
    createdAt: Date;
    type: 'COMMENT' | 'NOTICE';
    id: number;
    isRead: boolean;
  };
};

const NotificationCard = ({ card }: configType) => {
  const { title, isRead, type, createdAt } = card;
  return (
    <li>
      <S.CardItem $isRead={isRead}>
        {type === 'COMMENT' && (isRead ? <IcAlarmCmtDeactive /> : <IcAlarmCmt />)}
        {type === 'NOTICE' && (isRead ? <IcAlarmNoticeDeactive /> : <IcAlarmNotice />)}
        <div>
          <h2>{title}</h2>
          <p>{formatToMonthDay(createdAt)}</p>
        </div>
      </S.CardItem>
    </li>
  );
};

export default NotificationCard;
