export const eventNames = [
  'Tool_Click',
  'User',
  'Tool_Category_Click',
  'Integrated_Search_Enter',
  'Banner_Click',
  'Toggle_Click',
  'Sorting_Click',
  'Tool_Detail_Index_Click',
  'Recommendation_Tool_Click',
  'Community_Click',
  'Post_Click',
  'Signup_Click',
  'Login_State',
  'Signout_Click',
  'Tool_List_View',
] as const;

export type EventName = (typeof eventNames)[number];
