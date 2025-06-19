const extractUserId = (): string | null => {
  try {
    const userItem = localStorage.getItem('user');
    if (!userItem) return null;

    const userData = JSON.parse(userItem);
    return typeof userData.nickname === 'string' ? userData.nickname : null;
  } catch (error) {
    console.error('nickname 추출 중 에러 발생:', error);
    return null;
  }
};

export default extractUserId;
