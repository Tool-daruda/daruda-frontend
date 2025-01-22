export interface boardScrapResponse {
  statusCode: number;
  message: string;
  data: {
    boardId: number;
    scrap: boolean;
  };
}
