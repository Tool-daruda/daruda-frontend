import { AxiosError } from 'axios';

import { Report as ReportRequest } from './report.model';
import { post } from '@apis/index';

// 게시글 또는 댓글을 신고 post
export const postReport = async (postConent: ReportRequest) => {
  try {
    await post(`/reports`, postConent);
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error('err:', err.message);
    }
    throw err;
  }
};
