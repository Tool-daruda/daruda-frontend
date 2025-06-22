import { useEffect, useState } from 'react';

import { postAuthorization } from '@apis/auth';
import { useInfoQuery } from '@apis/user';
import { ImgPopupmodal284, ImgModalcheck } from '@assets/svgs';
import { AlterModal } from '@components/modal';
import { extractUserId } from '@utils';

const KakaoRedirectHandler = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [onConfirm, setOnConfirm] = useState<() => void>(() => () => {});
  const [modalImage, setModalImage] = useState(() => ImgPopupmodal284);
  const [buttonText, setButtonText] = useState('다시 시도하기');

  // user 로깅용 트리거
  const [userId, setUserId] = useState<number | null>(extractUserId());
  useInfoQuery(!!userId);

  useEffect(() => {
    const handleAuthorization = async () => {
      const code = new URL(window.location.href).searchParams.get('code');

      if (!code) {
        setModalTitle('로그인 실패');
        setModalContent('인가 코드가 없습니다.');
        setOnConfirm(() => () => (window.location.href = '/login'));
        setIsOpen(true);
        return;
      }

      try {
        const response = await postAuthorization(code);

        console.log(response); // TODO: 로그인 성공 확인후 로깅 삭제

        if (response.isUser) {
          // 기존 유저
          localStorage.setItem(
            'user',
            JSON.stringify({
              nickname: response.nickname,
              email: response.email,
              userId: response.userId,
              positions: response.positions,
            }),
          );
          setUserId(response.userId);
          setModalTitle('로그인 성공');
          setModalContent('로그인이 완료되었습니다.');
          setModalImage(() => ImgModalcheck);
          setButtonText('툴 다루러 가기');
          setOnConfirm(() => () => (window.location.href = '/'));
        } else {
          // 신규 유저
          setModalTitle('회원가입 필요');
          setModalContent('회원가입이 필요합니다.');
          setButtonText('회원가입 페이지로 돌아가기');
          setOnConfirm(() => () => (window.location.href = '/signup'));
        }
        setIsOpen(true);
      } catch (error) {
        console.error('인가 코드 처리 중 에러 발생:', error);
        setModalTitle('로그인 실패');
        setModalContent('로그인 처리 중 문제가 발생했습니다.');
        setModalImage(() => ImgPopupmodal284);
        setOnConfirm(() => () => (window.location.href = '/login'));
        setIsOpen(true);
      }
    };

    handleAuthorization();
  }, []);

  return (
    <AlterModal
      modalTitle={modalTitle}
      modalContent={modalContent}
      isOpen={isOpen}
      handleClose={onConfirm}
      isSingleModal={true}
      ImgPopupModal={modalImage}
      singleBtnContent={buttonText}
    />
  );
};

export default KakaoRedirectHandler;
