import { ImgModalcheck } from '@assets/svgs';
import CircleButton from '@components/button/circleButton/CircleButton';
import { AlterModal } from '@components/modal';
import Spacing from '@components/spacing/Spacing';
import styled from '@emotion/styled';
import React, { useState } from 'react';

import AffiliationBtn from './components/affiliationButton/AffiliationBtn';
import NamingInput from './components/namingInput/NamingInput';
import { AFFILIATION_OPTIONS } from './constants/affiliationOptions';

const MyInfoPage = () => {
  const [selectedAffiliation, setSelectedAffiliation] = useState('학생');
  const [nickname, setNickname] = useState('');
  const [isOpenWithdrawModal, setIsOpenWithdrawModal] = useState(false);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleWithdrawModal = () => {
    setIsOpenWithdrawModal((prev) => !prev);
  };

  const withdrawModalProps = {
    modalTitle: '정말 다루다의 회원을 탈퇴하시겠어요??',
    isOpen: isOpenWithdrawModal,
    handleClose: () => {
      alert('회원탈퇴');
      handleWithdrawModal();
    }, // TODO: 탈퇴 로직 구현하기
    ImgPopupModal: ImgModalcheck,
    isSingleModal: false,
    modalContent: '탈퇴하시면 슬퍼요오오오오오',
    DoublebtnProps: {
      isPrimaryRight: true,
      primaryBtnContent: '한 번 더 생각할게요',
      secondaryBtnContent: '탈퇴하기',
      handleSecondClose: handleWithdrawModal,
    },
  };

  return (
    <S.InfoWrapper>
      <S.AffiliationBtnBox>
        <S.InfoLabel>소속*</S.InfoLabel>
        {AFFILIATION_OPTIONS.map((label) => (
          <AffiliationBtn
            key={label}
            label={label}
            isSelected={selectedAffiliation === label}
            onClick={() => setSelectedAffiliation(label)}
          />
        ))}
      </S.AffiliationBtnBox>
      <Spacing size="3.2" />
      <S.NickNameWrapper>
        <S.InfoLabel>닉네임*</S.InfoLabel>
        <S.NicknameInputBox>
          <NamingInput value={nickname} onChange={handleNicknameChange} />
        </S.NicknameInputBox>
      </S.NickNameWrapper>
      <Spacing size="11.2" />
      <CircleButton size="mini" disabled={false} onClick={() => console.log()}>
        기본 정보 저장
      </CircleButton>
      <Spacing size="3" />
      <S.Withdraw type="button" onClick={handleWithdrawModal}>
        회원탈퇴
      </S.Withdraw>
      <AlterModal {...withdrawModalProps} />
    </S.InfoWrapper>
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
    height: 5.6rem;
  `,
  InfoLabel: styled.p`
    width: 5rem;
    ${({ theme }) => theme.fonts.body_16_m};
  `,
  NickNameWrapper: styled.div`
    display: flex;
    gap: 1.6rem;
  `,
  NicknameInputBox: styled.div`
    display: flex;
    gap: 1.5rem;
    width: 40.8rem;
  `,
  Withdraw: styled.button`
    color: ${({ theme }) => theme.colors.gray1};
    ${({ theme }) => theme.fonts.caption_14_m};
    text-decoration-line: underline;
  `,
};
