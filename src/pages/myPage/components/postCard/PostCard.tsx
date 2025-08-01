import { useNavigate } from 'react-router-dom';

import * as S from './PostCard.styled';
import { IcMypageBookmark32 } from '@assets/svgs';
import Chip from '@components/chip/Chip';

interface PostCardPropsType {
  isMine: boolean;
  title: string;
  boardId: number;
  updatedAt: string;
  toolLogo: string;
  toolName: string; // TODO: tool 이름 필드명 맞추기
  onClick: () => void;
  isScraped: boolean;
}

const PostCard = ({ boardId, isMine, title, updatedAt, toolLogo, toolName, onClick, isScraped }: PostCardPropsType) => {
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
            className="delete-button"
            onClick={(event) => {
              event.stopPropagation();
              onClick?.();
            }}
          >
            삭제
          </button>
        ) : (
          <S.BookmarkBtn
            onClick={(event) => {
              event.stopPropagation();
              onClick?.();
            }}
            $isBookmark={isScraped}
          >
            <IcMypageBookmark32 />
          </S.BookmarkBtn>
        )}
      </S.ButtonWrapper>
    </S.CardWrapper>
  );
};

export default PostCard;
