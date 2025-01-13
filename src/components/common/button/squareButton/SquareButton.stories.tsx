import { IcBookmarkGray24Dact } from '@assets/svgs';
import type { Meta, StoryFn } from '@storybook/react';

import Button from './SquareButton';

export default {
  title: 'Components/Button/SquareButton',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: {
        type: 'radio',
        options: ['default', 'hover', 'dact'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['large', 'small'],
      },
    },
    stroke: {
      control: 'boolean',
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args}>버튼</Button>;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  variant: 'default',
  size: 'large',
  stroke: false,
};

export const HoverButton = Template.bind({});
HoverButton.args = {
  variant: 'hover',
  size: 'small',
  stroke: false,
};

export const DactButton = Template.bind({});
DactButton.args = {
  variant: 'dact',
  size: 'large',
  stroke: true,
};

export const IconButton = Template.bind({});
IconButton.args = {
  variant: 'default',
  size: 'small',
  stroke: true,
  icon: <IcBookmarkGray24Dact />,
};
