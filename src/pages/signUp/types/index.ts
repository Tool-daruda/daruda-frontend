export interface SignupRequest {
  nickname: string;
  positions: string;
  email: string;
}

export interface SignupResponse {
  statusCode: number;
  message: string;
  data: {
    nickname: string;
    positions: string;
    email: string;
    jwtTokenResponse: {
      accessToken: string;
      refreshToken: string;
    };
  };
}

export interface ErrorResponse {
  status: number;
  message: string;
}
