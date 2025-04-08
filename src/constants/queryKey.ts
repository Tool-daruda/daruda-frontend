export const MYPAGE_QUERY_KEY = {
  MY_INFO: (userId: number) => ['myInfo', userId], // 개인정보
  MY_POST_LIST: (userId: number, pageNo?: number) => ['myPostList', userId, pageNo], // 작성 글
  MY_FAVORITE_POST_LIST: (userId: number, pageNo?: number) => ['myFavoritePostList', userId, pageNo], // 관심 글
  MY_FAVORITE_TOOL_LIST: (userId: number) => ['myFavoriteToolList', userId], // 관심 툴
};

export const TOOL_QUERY_KEY = {
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
};

export const BOARD_QUERY_KEY = {
  LIST: ({ isFree, category, criteria }: { isFree?: boolean; category?: string; criteria?: string }) => [
    'tools',
    isFree,
    category,
    criteria,
  ],
  DETAIL: (boardId?: string) => ['board', boardId],
};

export const COMMENT_QUERY_KEY = {
  LIST: (id?: string) => ['comment', id],
};

export const LOGIN_QUERY_KEY = {
  KAKAO_LOGIN: () => ['kakaoLogin'],
};
