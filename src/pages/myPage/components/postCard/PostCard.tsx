import { IcMypageBookmark32 } from '@assets/svgs';
import Chip from '@components/chip/Chip';
import { useNavigate } from 'react-router-dom';

import * as S from './PostCard.styled';

interface PostCardPropsType {
  isMine: boolean;
  title: string;
  boardId: number;
  updatedAt: string;
  toolLogo: string;
  toolName: string; // TODO: tool 이름 필드명 맞추기
  onClick: () => void;
}

const PostCard = ({ boardId, isMine, title, updatedAt, toolLogo, toolName, onClick }: PostCardPropsType) => {
  const navigate = useNavigate();
  return (
    <S.CardWrapper onClick={() => navigate(`/community/${boardId}`)}>
      <Chip stroke={true} size="medium">
        <Chip.RectContainer>
          <Chip.Icon src={toolLogo} alt="Custom Icon" />
          <Chip.Label>{toolName}</Chip.Label>
        </Chip.RectContainer>
      </Chip>
      <S.Title>{title}</S.Title>
      <S.Date>{updatedAt}</S.Date>
      <S.ButtonWrapper>
        {isMine ? (
          <button
            onClick={(event) => {
              event.stopPropagation();
              onClick?.();
            }}
          >
            삭제
          </button>
        ) : (
          <IcMypageBookmark32
            onClick={(event) => {
              event.stopPropagation();
              onClick?.();
            }}
          />
        )}
      </S.ButtonWrapper>
    </S.CardWrapper>
  );
};

export default PostCard;
