export type configType = {
  card: {
    title: string;
    createdAt: Date;
    type: 'COMMENT' | 'NOTICE';
    id: number;
    isRead: boolean;
    boardId?: number;
  };
  handleClick: (notiId: number, type: 'COMMENT' | 'NOTICE', boardId?: number) => void;
};
