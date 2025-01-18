import * as S from './Toggle.styled';

interface ToggleProps {
  isOn: boolean;
  onToggle: () => void;
}

function Toggle({ isOn, onToggle }: ToggleProps) {
  return (
    <S.ToggleWrapper>
      무료 툴
      <S.ToggleContainer isOn={isOn} onClick={onToggle}>
        <S.ToggleCircle isOn={isOn} />
      </S.ToggleContainer>
    </S.ToggleWrapper>
  );
}

export default Toggle;
