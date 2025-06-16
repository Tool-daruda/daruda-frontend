import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
  title: string;
  reason: string;
  detail: string;
};

const useReport = (handleClose: () => void) => {
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
      reason: '',
      detail: '',
    },
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const detailText = watch('detail');

  const isSubmitDisabled = !watch('title') || !watch('reason') || Object.keys(errors).length > 0;

  const onSubmit = (data: FormValues) => {
    console.log('신고 제출 데이터:', data);
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
