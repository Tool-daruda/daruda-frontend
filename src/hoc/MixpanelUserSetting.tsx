import { useEffect } from 'react';

import { useInfoQuery } from '@apis/user';
import { extractUserId } from '@utils';
import { useAnalytics } from 'src/hoc/useAnalytics';

const MixpanelUserSetup = () => {
  const { setUserProperty, isReady } = useAnalytics();
  const { data: user } = useInfoQuery(!!extractUserId());

  useEffect(() => {
    if (!user || !isReady) return;

    if (user.positions || user.nickname) {
      setUserProperty(user.userId.toLocaleString(), {
        position: user.positions,
        nickname: user.nickname,
      });
    }
  }, [user, isReady]);
  return null;
};

export default MixpanelUserSetup;
