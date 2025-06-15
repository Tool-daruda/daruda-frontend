import { useRef, useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

import S from './ReportModal.styled';
import { BtnWritinChipx } from '@assets/svgs';
import CircleButton from '@components/button/circleButton/CircleButton';

import { ModalWrapper } from '../component';

type ReportProps = {
  isOpen: boolean;
  handleClose: () => void;
};

type FormValues = {
  title: string;
  reason: string;
  detail: string;
};

const options = [
  '욕설/비하',
  '불법촬영물 유통',
  '유출/사칭/사기',
  '음란물/불건전한 만남 및 대화',
  '정당/정치인 비하 및 선거운동',
  '상업적 광고 및 판매',
  '낚시/도배',
];

const ReportModal = ({ isOpen, handleClose }: ReportProps) => {
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

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const isSubmitDisabled = !watch('title') || !watch('reason') || Object.keys(errors).length > 0;

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight + 24}px`;
    }
  }, [detailText]);

  const onSubmit = (data: FormValues) => {
    console.log('신고 제출 데이터:', data);
    handleClose();
  };

  return (
    <ModalWrapper isOpen={isOpen}>
      <S.Layout>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.Container>
            <S.Header>
              <h1>신고하기</h1>
              <button type="button" onClick={handleClose}>
                <BtnWritinChipx role="button" aria-label="close-report-modal" />
              </button>
            </S.Header>

            <S.MainContainer>
              <S.TitleInputContainer>
                <label htmlFor="title">신고 내용 :</label>
                <input
                  id="title"
                  {...register('title', { required: '신고 내용을 입력해주세요.' })}
                  aria-invalid={errors.title ? 'true' : 'false'}
                />
                {errors.title && <span role="alert">{errors.title.message}</span>}
              </S.TitleInputContainer>

              <S.SelectionContainer>
                <S.SelectionItem>
                  <h2>신고 사유를 선택해 주세요.</h2>
                  <S.DropdownWrapper>
                    <S.DropdownBox onClick={() => setIsDropdownOpen((prev) => !prev)}>
                      {watch('reason') || '신고 사유를 선택해 주세요'}
                      <S.DropdownArrowBtn isOpen={isDropdownOpen} />
                    </S.DropdownBox>

                    {isDropdownOpen && (
                      <S.OptionList>
                        {options.map((option) => (
                          <S.OptionItem
                            key={option}
                            onClick={() => {
                              setValue('reason', option, { shouldValidate: true });
                              setIsDropdownOpen(false);
                            }}
                          >
                            {option}
                          </S.OptionItem>
                        ))}
                      </S.OptionList>
                    )}
                  </S.DropdownWrapper>
                  {errors.reason && <span role="alert">신고 사유를 선택해주세요.</span>}
                </S.SelectionItem>

                <S.SelectionItem style={{ position: 'relative' }}>
                  <h2>세부내역 작성 (선택)</h2>
                  <Controller
                    name="detail"
                    control={control}
                    rules={{ maxLength: { value: 300, message: '300자 이내로 작성해주세요.' } }}
                    render={({ field }) => (
                      <S.OptionalInput
                        {...field}
                        ref={(e) => {
                          field.ref(e);
                        }}
                        placeholder="신고 내역을 입력해주세요."
                        maxLength={300}
                      />
                    )}
                  />
                  <S.CountContent>{`${detailText.length} / 300`}</S.CountContent>
                  {errors.detail && <span role="alert">{errors.detail.message}</span>}
                </S.SelectionItem>
              </S.SelectionContainer>

              <S.ButtonContainer>
                <CircleButton size="xs" type="submit" disabled={isSubmitDisabled}>
                  신고 제출하기
                </CircleButton>
              </S.ButtonContainer>
            </S.MainContainer>
          </S.Container>
        </form>
      </S.Layout>
    </ModalWrapper>
  );
};

export default ReportModal;
