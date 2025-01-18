import { Main } from './components';
import Forth from './components/forth/Forth';
import Second from './components/second/Second';
import Third from './components/third/Third';

const Intro = () => {
  return (
    <>
      <Main />
      <Second />
      <Third />
      <Forth />
    </>
  );
};

export default Intro;
