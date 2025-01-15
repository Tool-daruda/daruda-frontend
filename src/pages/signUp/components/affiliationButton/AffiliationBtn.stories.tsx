import type { Meta, StoryFn } from '@storybook/react';

import AffiliationBtn from './AffiliationBtn';

const meta: Meta<typeof AffiliationBtn> = {
  title: 'Components/AffiliationBtn',
  component: AffiliationBtn,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    isSelected: {
      control: 'boolean',
      description: '버튼이 선택되었는지 여부를 나타냅니다.',
    },
    label: {
      control: 'text',
      description: '버튼에 표시되는 텍스트입니다.',
    },
  },
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof AffiliationBtn> = (args) => <AffiliationBtn {...args} />;

export const DefaultStudent = Template.bind({});
DefaultStudent.args = {
  label: '학생',
  isSelected: false,
};

export const SelectedStudent = Template.bind({});
SelectedStudent.args = {
  label: '학생',
  isSelected: true,
};

export const DefaultWorker = Template.bind({});
DefaultWorker.args = {
  label: '직장인',
  isSelected: false,
};

export const SelectedWorker = Template.bind({});
SelectedWorker.args = {
  label: '직장인',
  isSelected: true,
};

export const DefaultPerson = Template.bind({});
DefaultPerson.args = {
  label: '일반인',
  isSelected: false,
};

export const SelectedPerson = Template.bind({});
SelectedPerson.args = {
  label: '일반인',
  isSelected: true,
};
