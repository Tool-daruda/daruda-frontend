import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ReportCode, useReportMutation, Report, ReportMap, ReportLabel } from '@apis/report';
import { BoardOnly, CommentOnly } from 'src/types/ReporyModal';

type FormValues = {
  title: string;
  reportType: ReportCode | '';
  detail: string;
};

const useReport = (
  handleClose: () => void,
  handleToastOpen: () => void,
  handleTaostMsg: (msg: string) => void,
  props: BoardOnly | CommentOnly,
) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    reset,
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

    const label = data.reportType as ReportLabel;
    const commonFields = {
      reportType: ReportMap[label],
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

    postReport(reportPayload, {
      onSuccess: () => {
        handleTaostMsg('신고가 정상적으로 접수되었어요');
      },
      onError: (error) => {
        console.error('Report submission failed:', error);
        handleTaostMsg('이미 신고한 유저이거나, 오류로 인해 신고가 접수되지 않았어요');
      },
    });
    reset();
    handleClose();
    handleToastOpen();
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
    reset,
  };
};

export default useReport;
