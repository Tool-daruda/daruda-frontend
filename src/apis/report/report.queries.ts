import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { postReport } from './report.api';
import { Report as ReportRequest } from './report.model';

export const useReportMutation = () => {
  return useMutation<void, AxiosError, ReportRequest>({
    mutationFn: (postConent: ReportRequest) => postReport(postConent),
  });
};
