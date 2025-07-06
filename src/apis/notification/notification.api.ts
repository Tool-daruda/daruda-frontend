import { AxiosResponse } from 'axios';

import { Notification } from './notification.model';
import { get, patch, post } from '@apis/index';

// 전체 알림 목록 가져오기
export const getAllNoti = async (): Promise<Notification[]> => {
  try {
    const res: AxiosResponse<Notification[]> = await get('/notification');
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

// 최신 알림 목록 가져오기 (3개))
export const getRecentNoti = async (): Promise<Notification[]> => {
  try {
    const res: AxiosResponse<Notification[]> = await get('/notification/recent');
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

// 알림 읽음 처리
export const patchNotiRead = async (notiId: number): Promise<null> => {
  try {
    await patch(`/notification/read/${notiId}`);
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

// 알림 테스트 등록을 위한 알림 생성 (테스트용)
export const postNotice = async (): Promise<null> => {
  try {
    await post('/notification/notice', {
      title: '알림테스트테스트',
      content: '테스트를 위한 요청입니다',
    });
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
};
