import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AffiliationBtn from './components/affiliationButton/AffiliationBtn';
import { AFFILIATION_OPTIONS } from './constants/affiliationOptions';
import * as S from './SignUp.styled';
import { postSignup } from '@apis/auth';
import { useInfoQuery, useNicknameCheckMutation } from '@apis/user';
import { ImgModalcheck } from '@assets/svgs';
import CircleButton from '@components/button/circleButton/CircleButton';
import NameInput from '@components/input/nameInput/NameInput';
import Meta from '@components/meta/Meta';
import { AlterModal } from '@components/modal';
import { extractUserId } from '@utils';

const SignUp = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [nicknameState, setNicknameState] = useState<'default' | 'act' | 'error' | 'success'>('default');
  const [nicknameMessage, setNicknameMessage] = useState<string>('');
  const { mutateAsync: checkMutate } = useNicknameCheckMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAffiliation, setSelectedAffiliation] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // user 로깅용 트리거
  const [userId, setUserId] = useState<number | null>(extractUserId());
  useInfoQuery(!!userId);

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

  // 닉네임 입력 핸들러
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickname(value);

    // 닉네임 변경 시 중복 확인 상태 초기화
    if (value.length === 0) {
      setNicknameState('default'); // 입력값 없음
    } else {
      setNicknameState('act'); // 입력값 있음
    }
    setNicknameMessage('');
  };

  // 닉네임 중복 확인
  const handleNicknameCheck = async () => {
    if (!nickname.trim()) {
      setNicknameState('error');
      setNicknameMessage('닉네임을 입력해주세요.');
      return;
    }

    if (!/^[가-힣a-zA-Z0-9]+$/.test(nickname)) {
      setNicknameState('error');
      setNicknameMessage('초성 또는 모음만으로 구성된 닉네임은 사용할 수 없어요.');
      return;
    }

    try {
      const checkResponse = await checkMutate(nickname);
      if (checkResponse?.statusCode === 200 && checkResponse?.data) {
        setNicknameState('error'); // 중복된 닉네임
        setNicknameMessage('이미 사용 중인 닉네임이에요.');
      } else {
        setNicknameState('success'); // 사용 가능 상태
        setNicknameMessage('사용 가능한 닉네임이에요.');
      }
    } catch (error) {
      console.error('닉네임 체크 실패:', error);
      setNicknameState('error'); // 사용 불가능 상태
      setNicknameMessage('중복 확인 중 오류가 발생했어요.');
    }
  };

  // 회원가입 버튼 활성화 조건
  const isCircleBtnActive = nickname.length >= 1 && selectedAffiliation !== null && nicknameState === 'success';

  // 회원가입 요청
  const handleCircleBtnClick = async () => {
    if (!nickname || !selectedAffiliation) {
      alert('닉네임과 소속을 모두 입력해주세요.');
      return;
    }

    const userString = localStorage.getItem('user');
    if (!userString) {
      alert('로그인이 필요합니다. 다시 시도해주세요.');
      return;
    }

    const user = JSON.parse(userString);
    if (!user.email) {
      alert('이메일 정보가 없습니다. 다시 로그인해주세요.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await postSignup({
        nickname,
        positions: selectedAffiliation,
        email: user.email,
      });
      if (res) setUserId(res.userId);
      setIsModalOpen(true); // 회원가입 성공 시 모달 열기
    } catch (error) {
      console.error('회원가입 실패:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
      <Meta title="회원가입" />
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
              <NameInput
                label="닉네임을 입력해주세요."
                value={nickname}
                onChange={handleNicknameChange}
                onButtonClick={handleNicknameCheck}
                state={nicknameState}
                description={nicknameMessage}
                inputRestrictions={[
                  '- 최대 10자 이내로 작성해 주세요.',
                  '- 띄어쓰기, 특수문자는 입력하실 수 없어요.',
                  '- 기본 정보는 추후에 마이페이지에서 변경하실 수 있어요.',
                ]}
              />
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
