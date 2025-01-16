import type { Meta, StoryFn } from '@storybook/react';

import ToolInfoCard, { ToolInfoCardProps } from './ToolInfoCard';

export default {
  title: 'Components/ToolInfoCard',
  component: ToolInfoCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof ToolInfoCard>;

const Template: StoryFn<ToolInfoCardProps> = (args) => <ToolInfoCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  toolImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzfcKjd_Sqd7wX0jjaaxhiKbAjNkbJt7K5Q&s',
  description: '고품질 애니메이션 AI 아트를 생성할 수 있는 AI 애니메이션 아트 생성기',
  license: '부분유료',
  koreanSupport: true,
  platforms: ['WEB', 'Windows', 'Mac'],
};
