import { IcBookmarkGray24Dact, IcCmtimgGray24 } from '@assets/svgs';
import type { StoryFn, Meta } from '@storybook/react';

import Button from './SquareButton';

export default {
  title: 'Components/Button/SquareButton',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['large', 'small'],
    },
    stroke: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Large = Template.bind({});
Large.args = {
  children: '이미지 첨부',
  size: 'large',
  stroke: false,
  icon: <IcCmtimgGray24 />,
};

export const Small = Template.bind({});
Small.args = {
  children: '북마크',
  size: 'small',
  stroke: true,
  icon: <IcBookmarkGray24Dact />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  size: 'large',
  stroke: false,
  disabled: true,
};
