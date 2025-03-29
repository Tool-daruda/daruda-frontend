import axios from 'axios';

interface SuccessUserResponse {
  statusCode: number;
  message: string;
  data: {
    isUser: boolean;
    nickname: string;
    jwtTokenResponse: {
      accessToken: string;
      refreshToken: string;
    };
  };
}

interface SuccessNewbieResponse {
  statusCode: number;
  message: string;
  data: {
    email: string;
    isUser: boolean;
  };
}

export const sendAuthorization = async (code: string) => {
  try {
    const response = await axios.post<SuccessUserResponse | SuccessNewbieResponse>(
      `${import.meta.env.VITE_API_BASE_URL}/users/token`,
      { code: code },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          Authorization: `${code}`,
        },
      },
    );

    return response.data.data;
  } catch (error) {
    console.error('인가 코드 처리 실패:', error);
    throw error;
  }
};
