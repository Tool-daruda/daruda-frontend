import type { Meta } from '@storybook/react';

import Card from './Community';

export default {
  title: 'Components/ToolDetailCommunityCard',
  component: Card,
} as Meta<typeof Card>;

export const Default = () => {
  const cards = [
    {
      title: '브레이블걸스의 하루입니다',
      content:
        '오늘은 찬영언니가 2주년이라서 데이트하고 꽃을 받아왔습니다. 그리고 호떡도 사왔습니다. 아주 달고 맛있었어요요',
      images: [
        'https://i.namu.wiki/i/KVue37SKZNQ-S5Em3Wm6-V5QWvHOpSFbX-OGI-qw9-4UKIiQ3AElCluoxOlrngX4So5Loo3hNb1VzCSEIdIKUQ.webp',
      ],
      author: '미니미니치치치',
      updatedAt: '2025-01-01',
    },
    {
      title: '은제오빠의 맛있는 요리들 맛보느라 매일이 바쁜 날들들',
      content:
        '저희는 꼬막비빔밥, 계란찜, 소불고기, 매운불고기, 연어, 배춧국, 딸기, 카레 등등 정말 많은 음식을 먹었답니다. 하나같이 맛있고 냠냠했어요',
      images: [],
      author: '또이',
      updatedAt: '2025-01-02',
    },
    {
      title: '내일은 리프레시데이이',
      content: '내일은 조개구이 먹어요?',
      images: ['https://img.tvreportcdn.de/cms-content/uploads/2023/06/20/ec2150f9-9fee-4786-82ba-aaf13be7b7e7.jpg'],
      author: '고니뇽이이',
      updatedAt: '2025-01-03',
    },
    {
      title: '은제오빠의 맛있는 요리들 맛보느라 매일이 바쁜 날들들',
      content:
        '저희는 꼬막비빔밥, 계란찜, 소불고기, 매운불고기, 연어, 배춧국, 딸기, 카레 등등 정말 많은 음식을 먹었답니다. 하나같이 맛있고 냠냠했어요',
      images: [],
      author: '또이',
      updatedAt: '2025-01-02',
    },
    {
      title: '내일은 리프레시데이이',
      content: '내일은 조개구이 먹어요?',
      images: ['https://img.tvreportcdn.de/cms-content/uploads/2023/06/20/ec2150f9-9fee-4786-82ba-aaf13be7b7e7.jpg'],
      author: '고니뇽이이',
      updatedAt: '2025-01-03',
    },
  ];

  return <Card cards={cards} />;
};
