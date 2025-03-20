import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import NameInput from './NameInput';

const meta: Meta<typeof NameInput> = {
  title: 'Components/NameInput',
  component: NameInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'act', 'error', 'success'],
      description: 'Input의 상태를 설정합니다. (현재 상태: "default")',
    },
    label: {
      control: { type: 'text' },
      description: 'Input의 라벨 텍스트입니다.',
    },
    description: {
      control: { type: 'text' },
      description: '중복확인 상태에 따라 Input 하단에 표시될 설명 텍스트입니다.',
    },
    value: {
      control: { type: 'text' },
      description: 'Input의 현재 값입니다.',
    },
    onChange: {
      action: 'changed',
      description: 'Input 값이 변경될 때 호출되는 핸들러입니다.',
    },
  },
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof NameInput> = (args) => {
  const [inputValue, setInputValue] = useState(args.value || '');
  return (
    <NameInput
      {...args}
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
        args.onChange?.(e);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  state: 'default',
  label: '닉네임을 입력해주세요.',
  value: '',
  description: '',
  placeholder: '닉네임을 입력해주세요.',
};

export const Error = Template.bind({});
Error.args = {
  state: 'error',
  label: '닉네임을 입력해주세요.',
  value: '중복된 닉네임',
  description: '이미 있는 닉네임입니다. 다른 닉네임을 입력해주세요.',
};

export const Success = Template.bind({});
Success.args = {
  state: 'success',
  label: '닉네임을 입력해주세요.',
  value: '닉네임',
  description: '사용할 수 있는 닉네임입니다.',
};
