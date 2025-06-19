import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ReportCode, useReportMutation, Report } from '@apis/report';
import { BoardOnly, CommentOnly } from 'src/types/ReporyModal';

type FormValues = {
  title: string;
  reportType: ReportCode | '';
  detail: string;
};

const useReport = (handleClose: () => void, props: BoardOnly | CommentOnly) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: '',
      reportType: '',
      detail: '',
    },
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const detailText = watch('detail');

  const isSubmitDisabled = !watch('title') || !watch('reportType') || Object.keys(errors).length > 0;

  const { mutate: postReport } = useReportMutation();

  const onSubmit = (data: FormValues) => {
    const isComment = props.commentId !== undefined;

    const commonFields = {
      reportType: data.reportType as ReportCode,
      detail: data.detail,
      title: data.title,
    };

    let reportPayload: Report;

    if (isComment) {
      reportPayload = {
        ...commonFields,
        commentReport: true,
        commentId: props.commentId!,
        boardId: null,
      };
    } else {
      reportPayload = {
        ...commonFields,
        commentReport: false,
        boardId: props.boardId!,
        commentId: null,
      };
    }

    postReport(reportPayload);
    handleClose();
  };

  return {
    isDropdownOpen,
    setIsDropdownOpen,
    detailText,
    isSubmitDisabled,
    onSubmit,
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    errors,
  };
};

export default useReport;
