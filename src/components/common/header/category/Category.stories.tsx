import type { Meta, StoryFn } from '@storybook/react';

import { Category } from './Category';

const meta: Meta<typeof Category> = {
  title: 'Components/Category',
  component: Category,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      description: '드롭다운이 열려 있는지 여부를 설정합니다.',
    },
    isHover: {
      control: { type: 'boolean' },
      description: '마우스 호버 상태를 설정합니다.',
    },
    isClicked: {
      control: { type: 'number' },
      description: '클릭된 카테고리의 인덱스를 설정합니다.',
    },
    onStateChange: {
      action: 'stateChanged',
      description: '상태가 변경될 때 호출되는 콜백입니다.',
    },
  },
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof Category> = () => <Category />;

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  isHover: false,
  isClicked: null,
};
