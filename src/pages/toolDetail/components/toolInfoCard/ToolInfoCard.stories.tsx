import type { Meta, StoryObj } from '@storybook/react';

import ToolInfoCard from './ToolInfoCard';

const meta = {
  title: 'Components/ToolInfoCard',
  component: ToolInfoCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToolInfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    toolData: {
      toolId: 94,
      toolMainName: 'Anaconda',
      toolSubName: '아나콘다',
      description: 'AI를 위한 운영 체제',
      license: '부분 무료',
      keywords: ['AI', '머신러닝', '분석'],
      category: '데이터',
      toolLink: 'https://www.anaconda.com/',
      supportKorea: false,
      platform: [
        {
          Web: false,
          Windows: true,
          Mac: true,
        },
      ],
      detailDescription:
        'Anaconda는 데이터 과학, 머신러닝, 인공지능, 분석 작업을 효율적으로 수행할 수 있도록 지원하는 오픈 소스 기반의 데이터 과학 플랫폼입니다. 이 플랫폼은 Python과 R 프로그래밍 언어를 기반으로 하며, 복잡한 데이터 분석과 대규모 데이터 처리를 단순화하는 도구와 환경을 제공합니다.',
      videos: ['https://youtu.be/TSGcBvZo-8g?si=E5NBOoVUTPlrJ26e', 'https://youtu.be/E7BpCFbWCuM?si=jDIvJylf-azsOyOt'],
      images: ['https://daruda.s3.ap-northeast-2.amazonaws.com/94_anaconda_1.png'],
      bgColor: '#162230',
      fontColor: false,
      updatedAt: '2025.01.08',
      isScrapped: false,
      toolLogo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png',
    },
  },
};
