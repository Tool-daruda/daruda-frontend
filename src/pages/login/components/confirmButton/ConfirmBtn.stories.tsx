import type { StoryFn, Meta } from '@storybook/react';

import ConfirmBtn from './ConfirmBtn';

export default {
  title: 'Components/ConfirmBtn',
  component: ConfirmBtn,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Button 비활성화 상태',
    },
    onClick: { action: 'clicked' },
  },
  tags: ['autodocs'],
} as Meta<typeof ConfirmBtn>;

const Template: StoryFn<typeof ConfirmBtn> = (args) => (
  <ConfirmBtn
    {...args}
    onClick={() => {
      if (!args.disabled) {
        alert('버튼이 클릭되었습니다!'); // 클릭 시 alert 표시
      }
    }}
  />
);

export const Enabled = Template.bind({});
Enabled.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
