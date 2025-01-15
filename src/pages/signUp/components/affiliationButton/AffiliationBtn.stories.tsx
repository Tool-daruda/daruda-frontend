import type { Meta, StoryFn } from '@storybook/react';

import AffiliationBtn from './AffiliationBtn';

const meta = {
  title: 'Components/AffiliationBtn',
  component: AffiliationBtn,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onToggle: { table: { disable: true } },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AffiliationBtn>;

export default meta;

const AffiliationBtnTemplate: StoryFn<typeof AffiliationBtn> = (args) => {
  return <AffiliationBtn {...args} />;
};

export const DefaultStudent = AffiliationBtnTemplate.bind({});
DefaultStudent.args = {
  label: '학생',
};

export const DefaultWorker = AffiliationBtnTemplate.bind({});
DefaultWorker.args = {
  label: '직장인',
};

export const DefaultPerson = AffiliationBtnTemplate.bind({});
DefaultPerson.args = {
  label: '일반인',
};
