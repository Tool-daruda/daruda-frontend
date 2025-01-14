import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import Chip from './Chip';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    active: { table: { disable: true } },
    children: { table: { disable: true } },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;

const ChipTemplate: StoryFn<typeof Chip> = (args) => {
  const [active, setActive] = useState(args.active);

  return <Chip {...args} active={active} onClick={() => setActive((prev) => !prev)} />;
};

export const Default = ChipTemplate.bind({});
Default.args = {
  stroke: false,
  size: 'large',
  active: false,

  children: (
    <Chip.RoundContainer>
      <Chip.Label>칩 컴포넌트</Chip.Label>
    </Chip.RoundContainer>
  ),
};

export const Tool = ChipTemplate.bind({});
Tool.args = {
  stroke: true,
  size: 'medium',
  children: (
    <Chip.RectContainer>
      <Chip.Icon src="https://via.placeholder.com/20" alt="Custom Icon" />
      <Chip.Label>ChatGPT</Chip.Label>
    </Chip.RectContainer>
  ),
};

export const ToolButton = ChipTemplate.bind({});
ToolButton.args = {
  stroke: true,
  size: 'medium',
  children: (
    <Chip.RectContainer>
      <Chip.Icon src="https://via.placeholder.com/20" alt="Custom Icon" />
      <Chip.Label>ChatGPT</Chip.Label>
      <Chip.CloseIcon width={20} height={20} />
    </Chip.RectContainer>
  ),
};

export const ToolKeyword = ChipTemplate.bind({});
ToolKeyword.args = {
  stroke: false,
  size: 'xsmall',
  active: false,

  children: (
    <Chip.RectContainer>
      <Chip.Label>툴 키워드</Chip.Label>
    </Chip.RectContainer>
  ),
};

export const Category = ChipTemplate.bind({});
Category.args = {
  stroke: false,
  size: 'small',
  active: false,
  children: (
    <Chip.RectContainer>
      <Chip.Label>카테고리</Chip.Label>
    </Chip.RectContainer>
  ),
};

export const LargeCategory = ChipTemplate.bind({});
LargeCategory.args = {
  stroke: false,
  size: 'large',
  active: false,

  children: (
    <Chip.RectContainer>
      <Chip.Icon src="https://via.placeholder.com/20" alt="Custom Icon" height={1} />
      <Chip.Label>카테고리</Chip.Label>
    </Chip.RectContainer>
  ),
};
