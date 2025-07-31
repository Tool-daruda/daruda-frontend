import * as S from './NotiCard.style';
import { configType } from './NotiCard.type';
import { IcAlarmNotice, IcAlarmCmt, IcAlarmCmtDeactive, IcAlarmNoticeDeactive } from '@assets/svgs';
import { formatToMonthDay } from 'src/utils/formatDate';

const NotificationCard = ({ card, handleClick }: configType) => {
  const { title, isRead, type, createdAt, id, boardId } = card;

  return (
    <li>
      <S.NotiWrapper type="button" onClick={() => handleClick(id, type, boardId)}>
        <S.CardItem $isRead={isRead}>
          {type === 'COMMENT' && (isRead ? <IcAlarmCmtDeactive /> : <IcAlarmCmt />)}
          {type === 'NOTICE' && (isRead ? <IcAlarmNoticeDeactive /> : <IcAlarmNotice />)}
          <div>
            <h2>{title}</h2>
            <p>{formatToMonthDay(createdAt)}</p>
          </div>
        </S.CardItem>
      </S.NotiWrapper>
    </li>
  );
};

export default NotificationCard;
