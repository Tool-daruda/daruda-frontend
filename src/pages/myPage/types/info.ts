export interface Info {
  nickname: string;
  positions: string;
}

export interface InfoResponse {
  statusCode: number;
  message: string;
  data: Info;
}
