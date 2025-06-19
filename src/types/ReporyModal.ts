export type BaseProps = {
  isOpen: boolean;
  handleClose: () => void;
};

export type BoardOnly = {
  boardId: number;
  commentId?: never;
};

export type CommentOnly = {
  boardId?: never;
  commentId: number;
};
