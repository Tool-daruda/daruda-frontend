import { post } from '@apis/index';

export const postNicknameCheck = async (
  nickname: string,
): Promise<{ statusCode: number; message: string; data: boolean } | undefined> => {
  try {
    const response = await post<{ statusCode: number; message: string; data: boolean }>(
      `users/nickname?nickname=${nickname}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};
