import { ImgUploadWhite48 } from '@assets/svgs';
import type { Meta, StoryFn } from '@storybook/react';

import CircleButton from './CircleButton';

export default {
  title: 'Components/Button/CircleButton',
  component: CircleButton,
  argTypes: {
    onClick: { action: 'clicked' },
    icon: { control: 'boolean' },
    variant: {
      control: {
        type: 'select',
        options: ['default', 'hover', 'click', 'dact'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small'],
      },
    },
    shadow: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn = (args) => <CircleButton {...args}>버튼 텍스트</CircleButton>;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'large',
  shadow: true,
};

export const Hover = Template.bind({});
Hover.args = {
  variant: 'hover',
  size: 'large',
  shadow: false,
};

export const Click = Template.bind({});
Click.args = {
  variant: 'click',
  size: 'small',
  shadow: true,
};

export const Dact = Template.bind({});
Dact.args = {
  variant: 'dact',
  size: 'large',
  shadow: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <ImgUploadWhite48 />,
  variant: 'default',
  size: 'medium',
  shadow: true,
};
