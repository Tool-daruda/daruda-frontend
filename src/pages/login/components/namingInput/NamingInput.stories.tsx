import type { Meta, StoryFn } from '@storybook/react';

import NamingInput from './NamingInput';

const meta: Meta<typeof NamingInput> = {
  title: 'Components/NamingInput',
  component: NamingInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'act', 'error', 'success'],
      description: 'Input의 상태를 설정합니다.',
      inputRestrictions: `- 최대 10자 이내로 작성해 주세요.<br />
- 띄어쓰기, 특수문자는 입력하실 수 없어요.<br />
- 기본 정보는 추후에 마이페이지에서 변경하실 수 있어요.`,
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Input에 표시되는 기본 텍스트입니다.',
    },
    label: {
      control: { type: 'text' },
      description: 'Input의 라벨 텍스트입니다.',
    },
    description: {
      control: { type: 'text' },
      description: 'Input 하단에 표시될 설명 텍스트입니다.',
    },
  },
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof NamingInput> = (args) => <NamingInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'default',
  label: '닉네임을 입력해주세요.',
  placeholder: '닉네임을 입력해주세요.',
  description: '',
};

export const Active = Template.bind({});
Active.args = {
  state: 'act',
  label: '닉네임을 입력해주세요.',
  placeholder: '',
  description: '사용할 수 있는 닉네임이에요.',
};

export const Error = Template.bind({});
Error.args = {
  state: 'error',
  label: '닉네임을 입력해주세요.',
  placeholder: '',
  description: '이미 있는 닉네임입니다. 다른 닉네임을 입력해주세요.',
};

export const Success = Template.bind({});
Success.args = {
  state: 'success',
  label: '닉네임을 입력해주세요.',
  placeholder: '',
  description: '닉네임 등록 성공!',
};
