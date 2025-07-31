export type BaseProps = {
  isOpen: boolean;
  handleClose: () => void;
  handleToastOpen: () => void;
  handleToastMsg: (msg: string) => void;
  content: string;
};

export type BoardOnly = {
  boardId: number;
  commentId?: never;
};

export type CommentOnly = {
  boardId?: never;
  commentId: number;
};
