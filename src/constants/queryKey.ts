export const MYPAGE_QUERY_KEY = Object.freeze({
  MY_INFO: () => ['myInfo'], // 개인정보
  MY_POST_LIST: (pageNo?: number) => ['myPostList', pageNo], // 작성 글
  MY_FAVORITE_POST_LIST: (pageNo?: number) => ['myFavoritePostList', pageNo], // 관심 글
  MY_FAVORITE_TOOL_LIST: () => ['myFavoriteToolList'], // 관심 툴
});

export const TOOL_QUERY_KEY = Object.freeze({
  CORE_FEATURES: (coreID: number) => ['corefeature', coreID],
  TOOL_PLAN: (planID: number) => ['toolplan', planID],
  RELATED_TOOLS: (toolID: number) => ['relatedtool', toolID],
  LIST: ({ isFree, category, criteria }: { isFree?: boolean; category?: string; criteria?: string }) => [
    'tools',
    isFree,
    category,
    criteria,
  ],
  CATEGORIES: () => ['categories'],
  DETAIL: (toolId: number) => ['tooldetail', toolId],
});

export const BOARD_QUERY_KEY = Object.freeze({
  LIST: ({ toolId, noTopic }: { toolId?: number | null; noTopic?: boolean }) => ['boards', toolId, noTopic],
  DETAIL: (boardId?: string) => ['board', boardId],
});

export const COMMENT_QUERY_KEY = Object.freeze({
  LIST: (id?: string) => ['comment', id],
});

export const LOGIN_QUERY_KEY = Object.freeze({
  KAKAO_LOGIN: () => ['kakaoLogin'],
});

export const SEARCH_QUERY_KEY = {
  SEARCH: (keyword: string, type: 'board' | 'tool') => [`search-${type}`, keyword],
};

export const NOTI_QUERY_KEY = Object.freeze({
  LIST_ALL: () => ['notiList'],
  RECENT_LIST: () => ['recentNotiList'],
});
