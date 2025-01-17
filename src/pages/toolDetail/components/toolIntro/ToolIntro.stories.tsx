import type { Meta, StoryFn } from '@storybook/react';
import { TOOL_DESCRIPTIONS } from 'src/pages/toolDetail/constants/description';

import ToolIntro from './ToolIntro';

export default {
  title: 'Components/ToolIntro',
  component: ToolIntro,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    toolKey: {
      control: {
        type: 'select',
        options: Object.keys(TOOL_DESCRIPTIONS),
      },
      description: '툴의 키 (데이터를 선택하는 데 사용)',
    },
    toolImage: {
      control: 'text',
      description: '툴 이미지 URL',
      defaultValue: 'https://via.placeholder.com/150',
    },
  },
  tags: ['autodocs'],
} as Meta<typeof ToolIntro>;

const Template: StoryFn<typeof ToolIntro> = (args) => <ToolIntro {...args} />;

export const Slack = Template.bind({});
Slack.args = {
  toolKey: 'slack',
  toolImage:
    'https://www.uctoday.com/wp-content/uploads/2023/08/Slack-Launches-Redesign-to-Boost-User-Productivity.jpg',
};

export const Notion = Template.bind({});
Notion.args = {
  toolKey: 'notion',
  toolImage:
    'https://cdn.inflearn.com/public/courses/324181/course_cover/4f20d4ce-80a2-4334-a85b-429a55ce4bad/boan_notion.png',
};

export const Jira = Template.bind({});
Jira.args = {
  toolKey: 'jira',
  toolImage:
    'https://wac-cdn.atlassian.com/dam/jcr:d42e8c86-a14b-4ec0-8753-d30c65dce581/Dashbaords-view.png?cdnVersion=2510',
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  toolKey: 'slack',
  toolImage: '',
};
