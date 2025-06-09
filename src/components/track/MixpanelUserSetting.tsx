import { useEffect } from 'react';

import { useInfoQuery } from '@apis/user';
import { useAnalytics } from 'src/hoc/useAnalytics';

const MixpanelUserSetup = () => {
  const { setUserProperty, isReady } = useAnalytics();
  const { data: user } = useInfoQuery();

  useEffect(() => {
    if (!user || !isReady) return;

    if (user.positions || user.nickname) {
      setUserProperty(user.nickname, {
        // TODO: 백엔드에게 userId 값 받아와서 교체하기
        position: user.positions,
        nickname: user.nickname,
      });
    }
  }, [user, isReady]);
  return null;
};

export default MixpanelUserSetup;
