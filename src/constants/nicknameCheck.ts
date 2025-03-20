export const NICKNAME_STATUS = {
  SUCCESS: {
    message: '사용할 수 있는 닉네임이에요.',
    state: 'success' as const,
  },
  ERROR: {
    message: '이미 있는 닉네임이에요. 다른 닉네임을 입력해주세요.',
    state: 'error' as const,
  },
};
