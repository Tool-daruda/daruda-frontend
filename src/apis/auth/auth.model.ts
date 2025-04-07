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

export interface RequestLoginURLResponse {
  statusCode: number;
  message: string;
  data: string;
}

export interface SuccessUserResponse {
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

export interface SuccessNewbieResponse {
  statusCode: number;
  message: string;
  data: {
    email: string;
    isUser: boolean;
  };
}
