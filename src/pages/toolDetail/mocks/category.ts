export const topics = [
  { name: '전체', active: false },
  { name: 'AI', active: true },
  { name: '문서 작성&편집', active: false },
  { name: '프레젠테이션', active: false },
  { name: '협업&커뮤니케이션', active: false },
  { name: '데이터', active: false },
  { name: '코딩&개발', active: false },
  { name: '영상&음악', active: false },
  { name: '생활', active: false },
  { name: '설계&모델링', active: false },
  { name: '커리어&자기개발', active: false },
  { name: '그래픽&디자인', active: false },
];

export const tools = [
  { name: 'ElevenLabs', active: false },
  { name: 'ChatGPT', active: true },
  { name: 'Figma', active: false },
];

export const DETAIL_RESPONSE = {
  statusCode: 200,
  message: '요청 데이터가 성공적으로 조회되었습니다',
  data: {
    tools: {
      toolId: 103,
      toolName: 'codeit',
      toolLogo: 'https://daruda.s3.ap-northeast-2.amazonaws.com/codeit.svg',
      description: '쉽고 재미있는 코딩',
      license: '부분 무료',
      keywords: ['코딩', '강의'],
      isScraped: false,
    },
  },
};
