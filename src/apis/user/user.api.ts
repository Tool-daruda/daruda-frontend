import type { AxiosResponse } from 'axios';

import { InfoResponse, Info, BoardResponse, ToolList } from './user.model';
import { get, patch } from '@apis/index';

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
export const getBoardList = async (page?: number): Promise<BoardResponse | undefined> => {
  try {
    const response: AxiosResponse<BoardResponse> = await get(`user/boards?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

// 관심 글 조회
export const getFavoriteBoardList = async (page?: number): Promise<BoardResponse | null> => {
  try {
    const response: AxiosResponse<BoardResponse> = await get(`user/scrap-boards?page=${page}`);
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

export const postNicknameCheck = async (
  nickname: string,
): Promise<{ statusCode: number; message: string; data: boolean } | undefined> => {
  try {
    const response = await get<{ statusCode: number; message: string; data: boolean }>(
      `user/nickname?nickname=${nickname}`,
    );
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};
