import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import AffiliationBtn from './AffiliationBtn';

const meta: Meta<typeof AffiliationBtn> = {
  title: 'Components/AffiliationBtn',
  component: AffiliationBtn,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    label: {
      control: 'text',
      description: '버튼에 표시되는 텍스트입니다.',
      defaultValue: '학생',
    },
    isSelected: {
      control: 'boolean',
      description: '버튼이 선택되었는지 여부를 나타냅니다.',
      defaultValue: false,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Interactive: StoryFn<typeof AffiliationBtn> = (args) => {
  const [isSelected, setIsSelected] = useState(args.isSelected);

  const handleClick = () => {
    setIsSelected((prev) => !prev);
    args.onClick?.();
  };

  return <AffiliationBtn {...args} isSelected={isSelected} onClick={handleClick} />;
};

Interactive.decorators = [
  (Story) => (
    <>
      <p>버튼을 클릭하여 선택 상태를 토글할 수 있습니다.</p>
      <Story />
    </>
  ),
];

const Template: StoryFn<typeof AffiliationBtn> = (args) => <AffiliationBtn {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '학생',
  isSelected: false,
};
