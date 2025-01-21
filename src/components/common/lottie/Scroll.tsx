import scrollLottie from '@assets/lottie/scrolldown_.json';
import Lottie from 'react-lottie-player';

const Scroll = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Lottie loop animationData={scrollLottie} speed={1} play style={{ width: 33, height: 22 }} />
    </div>
  );
};

export default Scroll;
