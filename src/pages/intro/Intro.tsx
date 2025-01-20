import Header from '@components/header/Header';

import { Main, AcrossSlide, PopList, ScrollPage } from './components';
import * as S from './intro.styled';

const Intro = () => {
  return (
    <S.Container>
      <Header headerState="loggedIn" forOnBorder={true} />
      {[Main, AcrossSlide, PopList, ScrollPage].map((Component, index) => (
        <S.Section key={index}>
          <Component />
        </S.Section>
      ))}
    </S.Container>
  );
};

export default Intro;
