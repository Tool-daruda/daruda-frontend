export const HEADER_STATE = {
  LOGGED_IN: 'loggedIn',
  LOGGED_OUT: 'loggedOut',
} as const;

export type HeaderState = (typeof HEADER_STATE)[keyof typeof HEADER_STATE];
