export type BaseProps = {
  isOpen: boolean;
  handleClose: () => void;
  handleToastOpen: () => void;
  handleTaostMsg: (msg: string) => void;
};

export type BoardOnly = {
  boardId: number;
  commentId?: never;
};

export type CommentOnly = {
  boardId?: never;
  commentId: number;
};
