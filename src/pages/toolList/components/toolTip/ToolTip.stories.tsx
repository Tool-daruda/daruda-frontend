import type { Meta, StoryFn } from '@storybook/react';

import ToolTip from './ToolTip';

export default {
  title: 'Components/ToolTip',
  component: ToolTip,
  parameters: {
    componentSubtitle: 'A tooltip component that displays usage information.',
  },
} as Meta;

export const Default: StoryFn = () => <ToolTip />;
Default.storyName = 'Default ToolTip';
Default.parameters = {
  docs: {
    description: {
      story: 'The default view of the ToolTip component.',
    },
  },
};
