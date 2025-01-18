import { Main, Second, Third, Forth } from './components';
import * as S from './intro.styled';

const Intro = () => {
  return (
    <S.Container>
      {[Main, Second, Third, Forth].map((Component, index) => (
        <S.Section key={index}>
          <Component />
        </S.Section>
      ))}
    </S.Container>
  );
};

export default Intro;
