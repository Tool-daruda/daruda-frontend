import { del, get, patch, post } from '@apis/index';
import type { AxiosResponse } from 'axios';

import { BoardResponse, BoardResponseData } from '../types/board';
import { Info } from '../types/info';
import { ToolList, ToolResponse } from '../types/tool';

// 회원정보 조회
export const getUserInfo = async (): Promise<Info | null> => {
  try {
    const response: AxiosResponse<Info | null> = await get(`users/profile/me`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

// 회원정보 수정
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

// 작성 글 조회
export const getBoardList = async (page?: number): Promise<BoardResponseData | undefined> => {
  try {
    const response: AxiosResponse<BoardResponse> = await get(`users/profile/boards?page=${page}`);
    return response.data.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

// 관심 글 조회
export const getFavoriteBoardList = async (page?: number): Promise<BoardResponseData | null> => {
  try {
    const response: AxiosResponse<BoardResponse> = await get(`users/profile/boards/scrap?page=${page}`);
    return response.data.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

// 관심 툴 조회
export const getToolList = async (): Promise<ToolList | null> => {
  try {
    const response: AxiosResponse<ToolResponse> = await get(`users/profile/tools`);
    return response.data.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

// 회원 탈퇴
export const deleteAccount = async () => {
  try {
    await del('users/withdraw');
  } catch (error) {
    console.error('Error:', error);
  }
};

// 로그아웃
export const logout = async () => {
  try {
    await post('users/logout');
  } catch (error) {
    console.error('Error:', error);
  }
};
