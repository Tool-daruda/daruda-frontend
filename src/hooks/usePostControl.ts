import React, { useCallback, useEffect, useState } from 'react';

type AuthorType = string | null | undefined;

// 현재 로그인한 유저의 닉네임 브라우저 저장소에서 get
export const getCurrentNickname = (): string | null => {
  const user = localStorage.getItem('user');
  if (!user) return null;
  try {
    return JSON.parse(user).nickname;
  } catch {
    return null;
  }
};

/**
 *
 * @param authorNickname
 *
 *   isOwnPost: boolean;                          // 현재 로그인한 사용자가 작성자인지 여부
 *   isOpen: boolean;                             // 모달이 열려 있는지 여부
 *   modalType: '신고' | '삭제' | '';             // 현재 열려 있는 모달의 종류
 *   isWarning: boolean;                          // 비회원 접근 시 경고 토스트 표시 여부
 *   handleModalOpen: (type: '신고' | '삭제') => void; // 모달 열기 핸들러
 *   handleModalClose: () => void;                // 모달 닫기 핸들러
 *   handleReport: () => void;                    // 신고 클릭 시 처리 로직 (비회원이면 경고 처리)
 *   preventPropogation: (e: React.MouseEvent) => void; // 이벤트 전파 및 기본 동작 차단
 *   handleWarning: () => void;                   // 경고 토스트 표시 트리거 (3초 후 자동 해제)
 *
 * @description 신고 & 삭제 관련 모달 트리커 관련 상태관리
 * @description 댓글 | 게시글의 작성자인지 여부 판별
 * @description 비회원 / 비인가적 접근에 대한 핸들링
 */
const usePostActions = (authorNickname: AuthorType) => {
  const [isOwnPost, setIsOwnPost] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<'신고' | '삭제' | ''>('');
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    const currentNickname = getCurrentNickname();
    if (currentNickname && currentNickname === authorNickname) {
      setIsOwnPost(true);
    }
  }, [authorNickname]);

  const handleModalOpen = (type: '신고' | '삭제') => {
    setModalType(type);
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleWarning = useCallback(() => {
    setIsWarning(true);
    setTimeout(() => setIsWarning(false), 3000);
  }, []);

  const handleReport = () => {
    const user = getCurrentNickname();
    if (!user) {
      handleWarning();
      return;
    }
    handleModalOpen('신고');
  };

  const preventPropogation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return {
    isOwnPost,
    isOpen,
    modalType,
    isWarning,
    handleModalOpen,
    handleModalClose,
    handleReport,
    preventPropogation,
    handleWarning,
  };
};

export default usePostActions;
