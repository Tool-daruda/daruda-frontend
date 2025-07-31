import React from 'react';

import { EventName } from '@constants/event';
import { useAnalytics } from 'src/hoc/useAnalytics';

type TrackingProps = {
  event: EventName;
  property?: Record<string, unknown>;
  children: React.ReactElement;
};

export const Tracking = ({ event, property, children }: TrackingProps) => {
  const { trackEvent } = useAnalytics();

  const handleClick = (e: React.MouseEvent) => {
    trackEvent(event, property);

    if (children.props.onClick && typeof children.props.onClick === 'function') {
      children.props.onClick(e);
    }
  };

  return React.cloneElement(children, {
    onClick: handleClick,
  });
};
