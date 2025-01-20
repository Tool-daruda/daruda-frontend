import renderLottie from '@assets/lottie/render.json';
import Lottie from 'react-lottie-player';

const IntroRender = () => {
  return (
    <div style={{ zIndex: -1, position: 'absolute', bottom: 0, height: '100%;' }}>
      <Lottie loop animationData={renderLottie} play />
    </div>
  );
};

export default IntroRender;
