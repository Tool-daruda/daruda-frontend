export const SIMILAR_TOOLS = {
  statusCode: 200,
  message: '요청 데이터가 성공적으로 조회되었습니다',
  data: {
    relatedToolResList: [
      {
        toolId: 31,
        toolName: 'typecast',
        toolLogo: 'https://daruda.s3.ap-northeast-2.amazonaws.com/typecast.svg',
        license: '부분 무료',
        keywords: ['AI', '음성', '내레이션'],
      },
      {
        toolId: 32,
        toolName: 'Clova Dubbing',
        toolLogo: 'https://daruda.s3.ap-northeast-2.amazonaws.com/Clovadubbing.svg',
        license: '부분 무료',
        keywords: ['프레젠테이션', 'UI/UX', '스프레드시트'],
      },
    ],
  },
};
