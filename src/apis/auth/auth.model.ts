export type PositionType = 'STUDENT' | 'WORKER' | 'NORMAL' | 'ADMIN';

export interface SignupReq {
  nickname: string;
  email: string;
  positions: string; // req 로 넘겨줄때는 enum 이 아닌, 한글식 표기
}

export interface SignupData extends Omit<SignupReq, 'positions'> {
  userId: number;
  positions: PositionType;
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
  } & SignupData;
}
