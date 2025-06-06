type NotificationType = 'COMMENT' | 'NOTICE';

export interface Notification {
  id: number;
  title: string;
  content: string;
  boardId: number;
  type: NotificationType;
  createdAt: string;
  isRead: boolean;
}
