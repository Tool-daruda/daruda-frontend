import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { postReport } from './report.api';
import { Report as ReportRequest } from './report.model';

export const useReportMutation = (postConent: ReportRequest) => {
  return useMutation<void, AxiosError, ReportRequest>({
    mutationFn: () => postReport(postConent),
  });
};
