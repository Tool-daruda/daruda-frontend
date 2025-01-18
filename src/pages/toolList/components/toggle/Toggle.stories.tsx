import { useState } from 'react';

import Toggle from './Toggle';

export default {
  title: 'Components/ToolListToggle',
  component: Toggle,
};

export const DefaultToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return <Toggle isOn={isOn} onToggle={handleToggle} />;
};

export const OnToggle = () => {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return <Toggle isOn={isOn} onToggle={handleToggle} />;
};

export const OffToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return <Toggle isOn={isOn} onToggle={handleToggle} />;
};
