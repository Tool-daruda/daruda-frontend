import { useRef, useEffect } from 'react';
import { Controller } from 'react-hook-form';

import S from './ReportModal.styled';
import { ReportCode } from '@apis/report';
import { BtnWritinChipx } from '@assets/svgs';
import CircleButton from '@components/button/circleButton/CircleButton';
import options from '@constants/reportType';
import useReport from '@hooks/useReport';
import { BaseProps, BoardOnly, CommentOnly } from 'src/types/ReporyModal';

import { ModalWrapper } from '../component';

type ReportProps = BaseProps & (BoardOnly | CommentOnly);

const ReportModal = ({ isOpen, handleClose, handleToastOpen, handleTaostMsg, ...props }: ReportProps) => {
  const {
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
  } = useReport(handleClose, handleToastOpen, handleTaostMsg, props);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight + 24}px`;
    }
  }, [detailText]);

  return (
    <ModalWrapper isOpen={isOpen}>
      <S.Layout>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.Container>
            <S.Header>
              <h1>신고하기</h1>
              <button
                type="button"
                onClick={() => {
                  handleClose();
                  reset();
                }}
              >
                <BtnWritinChipx role="button" aria-label="close-report-modal" />
              </button>
            </S.Header>
            <S.MainContainer>
              {/* 신고 모달의 제목  */}
              <S.TitleInputContainer>
                <label htmlFor="title">신고 내용 :</label>
                <input
                  id="title"
                  {...register('title', { required: '신고 내용을 입력해주세요.' })}
                  aria-invalid={errors.title ? 'true' : 'false'}
                />
              </S.TitleInputContainer>
              {/* 신고 모달의 신고 사유 - 드롭다운  */}
              <S.SelectionContainer>
                <S.SelectionItem>
                  <h2>신고 사유를 선택해 주세요.</h2>
                  <S.DropdownWrapper>
                    <S.DropdownBox onClick={() => setIsDropdownOpen((prev) => !prev)}>
                      {watch('reportType') || '신고 사유를 선택해 주세요'}
                      <S.DropdownArrowBtn isOpen={isDropdownOpen} />
                    </S.DropdownBox>
                    {isDropdownOpen && (
                      <S.OptionList>
                        {options.map((option) => (
                          <S.OptionItem
                            key={option}
                            onClick={() => {
                              setValue('reportType', option as ReportCode, { shouldValidate: true });
                              setIsDropdownOpen(false);
                            }}
                          >
                            {option}
                          </S.OptionItem>
                        ))}
                      </S.OptionList>
                    )}
                  </S.DropdownWrapper>
                </S.SelectionItem>
                {/* 신고 모달의 세부 내용 작성  */}
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
                          if (!e) return;
                          field.ref(e);
                          textAreaRef.current = e;
                        }}
                        placeholder="신고 내역을 입력해주세요."
                        maxLength={300}
                      />
                    )}
                  />
                  <S.CountContent>{`${detailText.length} / 300`}</S.CountContent>
                </S.SelectionItem>
              </S.SelectionContainer>
              {/* 신고 모달 제출 버튼  */}
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
