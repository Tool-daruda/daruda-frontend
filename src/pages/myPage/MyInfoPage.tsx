import styled from '@emotion/styled';
import React, { useCallback, useEffect, useState } from 'react';

import AffiliationBtn from './components/affiliationButton/AffiliationBtn';
import { AFFILIATION_OPTIONS } from './constants/affiliationOptions';
import { useAccountDeleteMutation } from '@apis/auth';
import { useNicknameCheckMutation, useInfoQuery, useInfoMutation } from '@apis/user';
import { ImgPopupWithdrawal84 } from '@assets/svgs';
import CircleButton from '@components/button/circleButton/CircleButton';
import NameInput from '@components/input/nameInput/NameInput';
import { AlterModal } from '@components/modal';
import Spacing from '@components/spacing/Spacing';
import Toast from '@components/toast/Toast';
import { NICKNAME_STATUS } from '@constants/nicknameCheck';
import { useToastOpen } from '@hooks/index';
import { extractUserId } from '@utils';

const MyInfoPage = () => {
  const { data } = useInfoQuery(!!extractUserId());
  const [selectedAffiliation, setSelectedAffiliation] = useState<string | undefined>();
  const [nickname, setNickname] = useState('');
  const [isOpenWithdrawModal, setIsOpenWithdrawModal] = useState(false);
  const { mutateAsync: deleteMutate } = useAccountDeleteMutation();
  const { mutateAsync: patchMutate } = useInfoMutation();
  const { mutateAsync: checkMutate } = useNicknameCheckMutation();
  const [nicknameState, setNicknameState] = useState<'default' | 'act' | 'error' | 'success'>('default');
  const [nicknameMessage, setNicknameMessage] = useState<string>('');
  const [isButtonDisable, setIsButtonDisable] = useState(true);
  const { isToastOpen, handleModalOpen: handleToastOpen } = useToastOpen();

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    setNicknameState('default');
    setNicknameMessage('');
  };

  const handleWithdrawModal = useCallback(() => {
    setIsOpenWithdrawModal((prev) => !prev);
  }, []);

  useEffect(() => {
    if (data) {
      setSelectedAffiliation(data.positions);
      setNickname(data.nickname);
    }
  }, [data]);

  const handleSaveInfo = async () => {
    if (!data) return;
    const updatedData: { nickname?: string; position?: string } = {};

    if (nickname !== data?.nickname) {
      updatedData.nickname = nickname;
    }

    if (selectedAffiliation !== data?.positions) {
      const affiliationKey = Object.keys(AFFILIATION_OPTIONS).find(
        (key) => AFFILIATION_OPTIONS[key as keyof typeof AFFILIATION_OPTIONS] === selectedAffiliation,
      );

      updatedData.position = affiliationKey ?? selectedAffiliation;
    }

    if (Object.keys(updatedData).length > 0) {
      try {
        const updateResponse = await patchMutate(updatedData);
        if (updateResponse) {
          handleToastOpen();
        }
      } catch (error) {
        console.error('정보 저장 실패:', error);
      }
    }
  };

  const handleNicknameCheck = async () => {
    if (!/^[가-힣a-zA-Z0-9]+$/.test(nickname)) {
      setNicknameState('error');
      setNicknameMessage('초성 또는 모음만으로 구성된 닉네임은 사용할 수 없어요.');
      return;
    }

    if (nickname === data?.nickname) {
      setNicknameState('error');
      setNicknameMessage('현재 사용하고 있는 닉네임이에요.');
      return;
    }

    try {
      const checkResponse = await checkMutate(nickname);

      if (checkResponse?.statusCode === 200 && checkResponse?.data) {
        setNicknameState(NICKNAME_STATUS.ERROR.state);
        setNicknameMessage(NICKNAME_STATUS.ERROR.message);
      } else {
        setNicknameState(NICKNAME_STATUS.SUCCESS.state);
        setNicknameMessage(NICKNAME_STATUS.SUCCESS.message);
      }
    } catch (error) {
      console.error('닉네임 체크 실패:', error);
      setNicknameState('error');
      setNicknameMessage('중복확인 중 오류가 발생했어요.');
    }
  };

  useEffect(() => {
    const isNicknameChanged = nickname !== data?.nickname;
    const isAffiliationChanged = selectedAffiliation !== data?.positions;

    // 닉네임이 바뀌었으면 중복확인 필수
    if (isNicknameChanged && isAffiliationChanged) {
      setIsButtonDisable(nicknameState !== 'success');
    } else if (isNicknameChanged) {
      setIsButtonDisable(nicknameState !== 'success');
    } else if (isAffiliationChanged) {
      setIsButtonDisable(false);
    } else {
      setIsButtonDisable(true);
    }
  }, [nickname, selectedAffiliation, nicknameState, data]);

  const withdrawModalProps = {
    modalTitle: '정말 다루다의 회원을 탈퇴하시겠어요?',
    isOpen: isOpenWithdrawModal,
    handleClose: () => {
      deleteMutate();
      handleWithdrawModal();
    },
    ImgPopupModal: ImgPopupWithdrawal84,
    isSingleModal: false,
    modalContent: '회원 탈퇴 시, 작성한 글과 댓글은 남되, 계정을 복구할 수 없습니다.',
    DoublebtnProps: {
      isPrimaryRight: true,
      primaryBtnContent: '한 번 더 생각할게요',
      secondaryBtnContent: '탈퇴하기',
      handleSecondClose: handleWithdrawModal,
    },
  };

  return (
    <>
      <S.InfoWrapper>
        <S.AffiliationBtnBox>
          <S.InfoLabel>
            소속<span>*</span>
          </S.InfoLabel>
          {Object.keys(AFFILIATION_OPTIONS).map((label) => (
            <AffiliationBtn
              key={label}
              label={label}
              isSelected={selectedAffiliation === AFFILIATION_OPTIONS[label as keyof typeof AFFILIATION_OPTIONS]}
              onClick={() => setSelectedAffiliation(AFFILIATION_OPTIONS[label as keyof typeof AFFILIATION_OPTIONS])}
            />
          ))}
        </S.AffiliationBtnBox>
        <Spacing size="4" />
        <S.NickNameWrapper>
          <S.InfoLabel>
            <Spacing size="1" />
            닉네임<span>*</span>
          </S.InfoLabel>
          <S.NicknameInputBox>
            <NameInput
              value={nickname}
              onChange={handleNicknameChange}
              onButtonClick={handleNicknameCheck}
              state={nicknameState}
              description={nicknameMessage}
              placeholder={data?.nickname}
            />
          </S.NicknameInputBox>
        </S.NickNameWrapper>
        <Spacing size="11.2" />
        <CircleButton size="mini" disabled={isButtonDisable} onClick={handleSaveInfo}>
          기본 정보 저장
        </CircleButton>
        <Spacing size="3" />
        <S.Withdraw type="button" onClick={handleWithdrawModal}>
          회원탈퇴
        </S.Withdraw>
        <AlterModal {...withdrawModalProps} />
      </S.InfoWrapper>
      {isToastOpen && (
        <Toast isVisible={isToastOpen} isWarning={false}>
          기본 정보 수정이 완료되었어요.
        </Toast>
      )}
    </>
  );
};

export default MyInfoPage;

const S = {
  InfoWrapper: styled.div`
    padding-top: 1.8rem;
    padding-left: 3.6rem;
  `,
  AffiliationBtnBox: styled.div`
    display: flex;
    gap: 1.6rem;
    align-items: center;
    width: 100%;
    height: 4.8rem;
  `,
  InfoLabel: styled.p`
    width: 5rem;
    ${({ theme }) => theme.fonts.body_16_m};

    & > span {
      color: ${({ theme }) => theme.colors.orange1};
    }
  `,
  NickNameWrapper: styled.div`
    display: flex;
    gap: 1.6rem;
  `,
  NicknameInputBox: styled.div`
    display: flex;
    gap: 1.2rem;
    width: 40.8rem;
  `,
  Withdraw: styled.button`
    color: ${({ theme }) => theme.colors.gray1};
    ${({ theme }) => theme.fonts.caption_14_m};
    text-decoration-line: underline;
  `,
  ToastWrapper: styled.div`
    position: absolute;
    bottom: 3.9rem;
    left: 50%;
    z-index: 5;

    transform: translateX(-50%);
  `,
};
