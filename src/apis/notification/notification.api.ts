import { AxiosResponse } from 'axios';

import { Notification } from './notification.model';
import { get } from '@apis/index';

// 전체 알림 목록 가져오기
export const getAllNoti = async (): Promise<Notification[] | null> => {
  try {
    const res: AxiosResponse<Notification[]> = await get('/notification');
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
