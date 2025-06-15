import S from './ReportModal.styled';
import { BtnWritinChipx } from '@assets/svgs';

import { ModalWrapper } from '../component';

type ReportProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const ReportModal = ({ isOpen, handleClose }: ReportProps) => {
  return (
    <ModalWrapper isOpen={isOpen}>
      <S.Layout>
        <S.Header>
          <h1>신고하기</h1>
          <button type="button" onClick={handleClose}>
            <BtnWritinChipx role="button" aria-label="close-report-modal" />
          </button>
        </S.Header>
      </S.Layout>
    </ModalWrapper>
  );
};

export default ReportModal;
