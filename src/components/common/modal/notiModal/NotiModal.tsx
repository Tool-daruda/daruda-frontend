import S from './NotiModal.styled';
import { BtnWritinChipx } from '@assets/svgs';
import CircleButton from '@components/button/circleButton/CircleButton';

import { ModalWrapper } from '../component';

type ReportProps = {
  isOpen: boolean;
  handleClose: () => void;
  title: string;
  content: string;
};

const NotiModal = ({ isOpen, handleClose, title, content }: ReportProps) => {
  return (
    <ModalWrapper isOpen={isOpen}>
      <S.Layout>
        <S.Container>
          <S.Header>
            <h1>공지사항</h1>
            <button type="button" onClick={handleClose}>
              <BtnWritinChipx role="button" aria-label="close-noti-modal" />
            </button>
          </S.Header>
          <S.MainContainer>
            {/* 공지 제목 */}
            <S.TitleInputContainer>
              <label htmlFor="title">공지내용 :</label>
              <span>{title}</span>
            </S.TitleInputContainer>
            {/* 공지 본문 */}
            <S.ContentContainer>
              <pre>{content}</pre>
            </S.ContentContainer>
            <S.ButtonContainer>
              <CircleButton size="xs" type="button" onClick={handleClose} aria-label="close-noti-modal">
                닫기
              </CircleButton>
            </S.ButtonContainer>
          </S.MainContainer>
        </S.Container>
      </S.Layout>
    </ModalWrapper>
  );
};

export default NotiModal;
