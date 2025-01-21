import { del, get, patch, post } from '@apis/index';
import type { AxiosResponse } from 'axios';

import { BoardResponse, BoardResponseData } from '../types/board';
import { Info } from '../types/info';
import { ToolList, ToolResponse } from '../types/tool';

export const getUserInfo = async (): Promise<Info | null> => {
  try {
    const response: AxiosResponse<Info | null> = await get(`users/profile/me`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export const patchInfo = async ({ nickname, position }: { nickname?: string; position?: string }) => {
  try {
    // 바꾼 값만 요청
    const requestData: Record<string, string> = {};
    if (nickname !== undefined) requestData.nickname = nickname;
    if (position !== undefined) requestData.positions = position;

    const response: AxiosResponse<Info | null> = await patch(`users/profile`, requestData);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export const getBoardList = async (page?: number): Promise<BoardResponseData | undefined> => {
  try {
    const response: AxiosResponse<BoardResponse> = await get(`users/profile/boards?page=${page}`);
    return response.data.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const getFavoriteBoardList = async (): Promise<BoardResponseData | null> => {
  try {
    const response: AxiosResponse<BoardResponse> = await get(`users/profile/boards/scrap`);
    return response.data.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export const getToolList = async (): Promise<ToolList | null> => {
  try {
    const response: AxiosResponse<ToolResponse> = await get(`users/profile/tools`);
    return response.data.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export const deleteAccount = async () => {
  try {
    await del('users/withdraw');
  } catch (error) {
    console.error('Error:', error);
  }
};

export const logout = async () => {
  try {
    await post('users/logout');
  } catch (error) {
    console.error('Error:', error);
  }
};
