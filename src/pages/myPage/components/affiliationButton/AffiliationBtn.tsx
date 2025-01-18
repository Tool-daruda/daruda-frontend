import * as S from './AffiliationBtn.styled';

export type AffiliationBtnProps = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
};

const AffiliationBtn = ({ label, isSelected, onClick }: AffiliationBtnProps) => {
  return (
    <S.ButtonWrapper isActive={isSelected} onClick={onClick}>
      <S.Label>{label}</S.Label>
      <S.StyledIcon $isSelected={isSelected} />
    </S.ButtonWrapper>
  );
};

export default AffiliationBtn;
