import { ImgModalcheck } from '@assets/svgs';
import CircleButton from '@components/button/circleButton/CircleButton';
import { AlterModal } from '@components/modal';
import Title from '@components/title/Title';
import React, { useState } from 'react';

import AffiliationBtn from './components/affiliationButton/AffiliationBtn';
import NamingInput from './components/namingInput/NamingInput';
import { AFFILIATION_OPTIONS } from './constants/affiliationOptions';
import * as S from './SignUp.styled';

const SignUp = () => {
  const [nickname, setNickname] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAffiliation, setSelectedAffiliation] = useState<string | null>(null);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleCircleBtnClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const isCircleBtnActive = nickname.length >= 1;

  const modalProps = {
    modalTitle: '회원가입이 완료되었어요.',
    isOpen: isModalOpen,
    handleClose: handleCloseModal,
    ImgPopupModal: ImgModalcheck,
    isSingleModal: true,
    singleBtnContent: '툴 다루러 가기',
    modalContent: '',
    DobblebtnProps: {
      isPrimaryRight: false,
      primaryBtnContent: '',
      secondaryBtnContent: '',
    },
  };

  return (
    <>
      <Title title="회원가입" />
      <S.SignUpWrapper>
        <S.Container>
          <S.LeftContainer>
            <S.LeftBox>
              <S.TitleBox>
                쉬운 대학생활, <br />
                앞으로 한 걸음 남았어요.
              </S.TitleBox>
              <S.CommentBox>
                공부, 과제, 팀플, 동아리, 대외활동 <br />
                복잡하고 어렵기만 했던 툴에 대한 고민은 <br />
                다루다가 해결해 드릴게요.
              </S.CommentBox>
            </S.LeftBox>
          </S.LeftContainer>
          <S.RightContainer>
            <h1>회원가입</h1>
            <S.AffiliationBox>
              <h2>소속을 선택해주세요.</h2>
              <S.AffiliationBtnBox>
                {AFFILIATION_OPTIONS.map((label) => (
                  <AffiliationBtn
                    key={label}
                    label={label}
                    isSelected={selectedAffiliation === label}
                    onClick={() => setSelectedAffiliation(label)}
                  />
                ))}
              </S.AffiliationBtnBox>
            </S.AffiliationBox>
            <S.NicknameInputBox>
              {/* TODO: 중복확인 상태에 따른 로직 구현 */}
              <NamingInput value={nickname} onChange={handleNicknameChange} />
            </S.NicknameInputBox>
            <S.SignUpBtn>
              {/* TODO: 중복확인 되었을 때만 작동되도록 */}
              <CircleButton size="mini" disabled={!isCircleBtnActive} onClick={handleCircleBtnClick}>
                회원가입 하기
              </CircleButton>
            </S.SignUpBtn>
          </S.RightContainer>
          <AlterModal {...modalProps} />
        </S.Container>
      </S.SignUpWrapper>
    </>
  );
};

export default SignUp;
