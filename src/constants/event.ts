export const eventNames = [
  'Tool_Click',
  'Tool_Category_Click',
  'User',
  'Banner_Click',
  'Toggle_Click',
  'Sorting_Click',
  'Tool_Detail_Index_Click',
  'Community_Click',
  'Post_Click',
  'Sign_Up_Click',
  'Login_State',
  'Sign_Out_Click',
  'Tool_List_View',
  'Integrated_Search',
] as const;

export type EventName = (typeof eventNames)[number];
