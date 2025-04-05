import type { AxiosResponse } from 'axios';

import { del, get, patch, post } from '@apis/index';

import { BoardResponseData } from '../types/board';
import { Info, InfoResponse } from '../types/info';
import { ToolList } from '../types/tool';

// 회원정보 조회
export const getUserInfo = async (): Promise<Info | null> => {
  try {
    const response: InfoResponse = await get(`user/profile`);
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

    const response: AxiosResponse<Info | null> = await patch(`user/profile`, requestData);
    return response;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

// 작성 글 조회
export const getBoardList = async (page?: number): Promise<BoardResponseData | undefined> => {
  try {
    const response: AxiosResponse<BoardResponseData> = await get(`user/profile/boards?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

// 관심 글 조회
export const getFavoriteBoardList = async (page?: number): Promise<BoardResponseData | null> => {
  try {
    const response: AxiosResponse<BoardResponseData> = await get(`user/profile/scrap-boards?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

// 관심 툴 조회
export const getToolList = async (): Promise<ToolList | null> => {
  try {
    const response: AxiosResponse<ToolList> = await get(`user/scrap-tools`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

// 회원 탈퇴
export const deleteAccount = async () => {
  try {
    await del('auth/withdraw');
  } catch (error) {
    console.error('Error:', error);
  }
};

// 로그아웃
export const logout = async () => {
  try {
    await post('auth/logout');
  } catch (error) {
    console.error('Error:', error);
  }
};
