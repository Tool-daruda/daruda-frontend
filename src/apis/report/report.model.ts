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
  '욕설/비하': 'HATE_SPEECH',
  '불법촬영물 유통': 'ILLEGAL',
  '유출/사칭/사기': 'SPAM',
  '음란물/불건전한 만남 및 대화': 'ADULT_CONTENT',
  '정당/정치인 비하 및 선거운동': 'POLITICAL',
  '상업적 광고 및 판매': 'COMMERCIAL',
  '낚시/도배': 'DEFAMATION',
};

export type ReportLabel = keyof typeof ReportMap;
export type ReportCode = (typeof ReportMap)[ReportLabel];
