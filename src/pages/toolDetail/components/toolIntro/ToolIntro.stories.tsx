import { DETAIL_RESPONSE } from '@pages/toolDetail/mocks/toolData';
import type { Meta, StoryFn } from '@storybook/react';

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
        options: Object.keys(DETAIL_RESPONSE),
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

export const Anaconda = Template.bind({});
Anaconda.args = {
  toolImage: [
    'https://www.uctoday.com/wp-content/uploads/2023/08/Slack-Launches-Redesign-to-Boost-User-Productivity.jpg',
  ],
  activeTool: 'Anaconda',
  description:
    'Anaconda는 데이터 과학, 머신러닝, 인공지능, 분석 작업을 효율적으로 수행할 수 있도록 지원하는 오픈 소스 기반의 데이터 과학 플랫폼입니다. 이 플랫폼은 Python과 R 프로그래밍 언어를 기반으로 하며, 복잡한 데이터 분석과 대규모 데이터 처리를 단순화하는 도구와 환경을 제공합니다.',
};

export const Notion = Template.bind({});
Notion.args = {
  toolImage: [
    'https://cdn.inflearn.com/public/courses/324181/course_cover/4f20d4ce-80a2-4334-a85b-429a55ce4bad/boan_notion.png',
  ],
  activeTool: 'Notion',
  description:
    'Notion는 데이터 과학, 머신러닝, 인공지능, 분석 작업을 효율적으로 수행할 수 있도록 지원하는 오픈 소스 기반의 데이터 과학 플랫폼입니다. 이 플랫폼은 Python과 R 프로그래밍 언어를 기반으로 하며, 복잡한 데이터 분석과 대규모 데이터 처리를 단순화하는 도구와 환경을 제공합니다.',
};

export const Jira = Template.bind({});
Jira.args = {
  toolImage: [
    'https://wac-cdn.atlassian.com/dam/jcr:d42e8c86-a14b-4ec0-8753-d30c65dce581/Dashbaords-view.png?cdnVersion=2510',
  ],
  activeTool: 'Jira',
  description:
    'Notion는 데이터 과학, 머신러닝, 인공지능, 분석 작업을 효율적으로 수행할 수 있도록 지원하는 오픈 소스 기반의 데이터 과학 플랫폼입니다. 이 플랫폼은 Python과 R 프로그래밍 언어를 기반으로 하며, 복잡한 데이터 분석과 대규모 데이터 처리를 단순화하는 도구와 환경을 제공합니다.',
};
