import * as S from './Toggle.styled';
import { Tracking } from 'src/hoc/Tracking';

interface ToggleProps {
  isOn: boolean;
  onToggle: () => void;
}

function Toggle({ isOn, onToggle }: ToggleProps) {
  return (
    <Tracking event="Toggle_Click" property={{ activation: !isOn }}>
      <S.ToggleWrapper>
        무료 툴
        <S.ToggleContainer isOn={isOn} onClick={onToggle}>
          <S.ToggleCircle isOn={isOn} />
        </S.ToggleContainer>
      </S.ToggleWrapper>
    </Tracking>
  );
}

export default Toggle;
