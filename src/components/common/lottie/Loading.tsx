import loadingLottie from '@assets/lottie/loading.json';
import Lottie from 'react-lottie-player';

const Loading = () => {
  return (
    <div>
      <Lottie loop animationData={loadingLottie} play style={{ width: 73, height: 72 }} />
    </div>
  );
};

export default Loading;
