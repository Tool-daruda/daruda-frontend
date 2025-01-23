import { ImgModalcheck } from '@assets/svgs';
import CircleButton from '@components/button/circleButton/CircleButton';
import { AlterModal } from '@components/modal';
import Title from '@components/title/Title';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import signup from './apis/api';
import AffiliationBtn from './components/affiliationButton/AffiliationBtn';
import NamingInput from './components/namingInput/NamingInput';
import { AFFILIATION_OPTIONS } from './constants/affiliationOptions';
import * as S from './SignUp.styled';

const SignUp = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAffiliation, setSelectedAffiliation] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // 중복 클릭 방지용

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (!userString) {
      alert('올바른 경로가 아닙니다.');
      navigate('/login');
      return;
    }

    try {
      const user = JSON.parse(userString);
      if (!user?.email) {
        alert('올바른 경로가 아닙니다.');
        navigate('/login');
      }
    } catch (error) {
      console.error('JSON 파싱 오류:', error);
      alert('올바른 경로가 아닙니다.');
      navigate('/login');
    }
  }, [navigate]);

  const handleCircleBtnClick = async () => {
    if (!nickname || !selectedAffiliation) {
      alert('닉네임과 소속을 모두 입력해주세요.');
      return;
    }

    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      if (!user.email) {
        alert('이메일 정보가 없습니다. 다시 로그인해주세요.');
        return;
      }
      setIsSubmitting(true); // 버튼 중복 클릭 방지
      try {
        await signup({
          nickname,
          positions: selectedAffiliation,
          email: user.email,
        });
        setIsModalOpen(true); // 회원가입 성공 시 모달 열기
      } catch (error) {
        console.error('회원가입 실패:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const isCircleBtnActive = nickname.length >= 1 && selectedAffiliation !== null;

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
              <NamingInput value={nickname} onChange={handleNicknameChange} />
            </S.NicknameInputBox>
            <S.SignUpBtn>
              <CircleButton size="mini" disabled={!isCircleBtnActive || isSubmitting} onClick={handleCircleBtnClick}>
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
