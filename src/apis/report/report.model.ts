export type Report =
  | {
      commentReport: true;
      commentId: number;
      boardId: null;
      reportType: ReportCode;
      detail: string;
      title: string;
    }
  | {
      commentReport: false;
      boardId: number;
      commentId: null;
      reportType: ReportCode;
      detail: string;
      title: string;
    };

export const ReportMap = {
  HATE_SPEECH: '욕설/비하',
  ILLEGAL: '불법촬영물 유통',
  SPAM: '유출/사칭/사기',
  ADULT_CONTENT: '음란물/불건전한 만남 및 대화',
  POLITICAL: '정당/정치인 비하 및 선거운동',
  COMMERCIAL: '상업적 광고 및 판매',
  DEFAMATION: '낚시/도배',
} as const;

export type ReportCode = keyof typeof ReportMap;
export type ReportLabel = (typeof ReportMap)[ReportCode];
