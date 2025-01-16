import loadingLottie from '@assets/lottie/daruda_scroll.json';
import Lottie from 'react-lottie-player';

const LoadingLottie = () => {
  return (
    <div>
      <Lottie loop animationData={loadingLottie} play style={{ width: 73, height: 72 }} />
    </div>
  );
};

export default LoadingLottie;
