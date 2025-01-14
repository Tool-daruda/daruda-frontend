import { ImgUploadWhite48, IcPlusWhite20 } from '@assets/svgs';
import type { StoryFn, Meta } from '@storybook/react';

import CircleButton from './CircleButton';

export default {
  title: 'Components/Button/CircleButton',
  component: CircleButton,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small', 'mini'],
      },
    },
    shadow: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta<typeof CircleButton>;

const Template: StoryFn<typeof CircleButton> = (args) => <CircleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '글 게시하기',
  size: 'large',
  shadow: true,
};

export const Medium = Template.bind({});
Medium.args = {
  children: '완료',
  icon: <ImgUploadWhite48 />,
  size: 'medium',
  shadow: false,
};

export const Small = Template.bind({});
Small.args = {
  children: '글쓰기',
  size: 'small',
  icon: <IcPlusWhite20 />,
  shadow: true,
};

export const Mini = Template.bind({});
Mini.args = {
  children: '회원가입 하기',
  size: 'mini',
  shadow: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: '회원가입 하기',
  size: 'mini',
  shadow: false,
  disabled: true,
};
