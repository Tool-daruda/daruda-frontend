import { ImgModalexit, ImgModalexit2, ImgModalcheck } from '@assets/svgs';
import type { Meta, StoryFn } from '@storybook/react';

import ToolCard from './ToolCard';

export default {
  title: 'Components/ToolCard',
  component: ToolCard,
  argTypes: {
    tools: {
      control: 'object',
    },
    bookmarked: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: StoryFn = (args) => <ToolCard {...args} />;

export const DefaultToolCard = Template.bind({});
DefaultToolCard.args = {
  tools: [
    {
      toolId: 1,
      toolName: 'ElevenLabs',
      toolLogo: <ImgModalexit />,
      description: 'AI 오디오 플랫폼으로 가장 현실적인 음성을 만들어보세요',
      license: 'PAID',
      keywords: ['AI', '음성', '생산성'],
      backgroundColor: '#fed687',
      textColor: true,
    },
    {
      toolId: 2,
      toolName: 'ChatGPT',
      toolLogo: <ImgModalexit2 />,
      description: '즉각적인 답변, 더 높은 생산성, 무한한 영감',
      license: 'FREE',
      keywords: ['그래픽 제작', '디자인', '3D'],
      backgroundColor: '#badcf9',
      textColor: false,
    },
    {
      toolId: 3,
      toolName: 'Figma',
      toolLogo: <ImgModalcheck />,
      description: '디자인 협업의 새로운 표준',
      license: 'PAID',
      keywords: ['AI', '음성', '생산성'],
      backgroundColor: '#c3f9c7',
      textColor: true,
    },
  ],
  bookmarked: false,
};
