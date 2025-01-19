import { Main, AcrossSlide, PopList, ScrollPage } from './components';
import * as S from './intro.styled';

const Intro = () => {
  return (
    <S.Container>
      {[Main, AcrossSlide, PopList, ScrollPage].map((Component, index) => (
        <S.Section key={index}>
          <Component />
        </S.Section>
      ))}
    </S.Container>
  );
};

export default Intro;
