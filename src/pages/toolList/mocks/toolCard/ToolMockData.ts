export interface Tool {
  toolId: number;
  toolName: string;
  toolLogo: string;
  description: string;
  license: string;
  keywords: string[];
  backgroundColor: string;
  textColor: boolean;
  bookmarked: boolean;
}

export const toolMockData = {
  status: 200,
  data: {
    tools: [
      {
        toolId: 1,
        toolName: 'ElevenLabs',
        toolLogo: './svgs/img_modalexit2.svg',
        description: 'AI 오디오 플랫폼으로 가장 현실적인 음성을 만들어보세요',
        license: 'PAID',
        keywords: ['AI', '음성', '생산성'],
        backgroundColor: '#fed687',
        textColor: true,
        bookmarked: false,
      },
      {
        toolId: 2,
        toolName: 'ChatGPT',
        toolLogo: './svgs/img_modalcheck.svg',
        description: '즉각적인 답변, 더 높은 생산성, 무한한 영감',
        license: 'FREE',
        keywords: ['그래픽 제작', '디자인', '3D'],
        backgroundColor: '#badcf9',
        textColor: false,
        bookmarked: false,
      },
      {
        toolId: 3,
        toolName: 'Figma',
        toolLogo: './svgs/img_modalexit.svg',
        description: '디자인 협업의 새로운 표준',
        license: 'PAID',
        keywords: ['AI', '음성', '생산성'],
        backgroundColor: '#c3f9c7',
        textColor: true,
        bookmarked: false,
      },
    ],
  },
};
