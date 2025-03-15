import { post } from '@apis/index';

export const postToolScrap = async (toolId: number) => {
  try {
    const response = await post<{
      statusCode: number;
      message: string;
      data: {
        toolId: number;
        scrap: boolean;
      };
    }>(`users/tools/${toolId}/scrap`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error();
  }
};
