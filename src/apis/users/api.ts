import { post } from '@apis/index';

export const postNicknameCheck = async (
  nickname: string,
): Promise<{ statusCode: number; message: string; data: boolean } | undefined> => {
  try {
    const response = await post<{ statusCode: number; message: string; data: boolean }>(
      `user/nickname?nickname=${nickname}`,
    );
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};
