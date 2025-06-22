const extractUserId = (): number | null => {
  try {
    const userItem = localStorage.getItem('user');
    if (!userItem) return null;

    const userData = JSON.parse(userItem);
    return typeof userData.userId === 'number' ? Number(userData.userId) : null;
  } catch (error) {
    console.error('userId 추출 중 에러 발생:', error);
    return null;
  }
};

export default extractUserId;
