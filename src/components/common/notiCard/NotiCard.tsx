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
  handleClick: (id: number) => void;
};

const NotificationCard = ({ card, handleClick }: configType) => {
  const { title, isRead, type, createdAt, id } = card;
  return (
    <li>
      <button type="button" onClick={() => handleClick(id)}>
        <S.CardItem $isRead={isRead}>
          {type === 'COMMENT' && (isRead ? <IcAlarmCmtDeactive /> : <IcAlarmCmt />)}
          {type === 'NOTICE' && (isRead ? <IcAlarmNoticeDeactive /> : <IcAlarmNotice />)}
          <div>
            <h2>{title}</h2>
            <p>{formatToMonthDay(createdAt)}</p>
          </div>
        </S.CardItem>
      </button>
    </li>
  );
};

export default NotificationCard;
