import Community from '@pages/community/Community';
import CommunityDetail from '@pages/CommunityDetail/CommunityDetail';
import CommunityWrite from '@pages/communityWrite/CommunityWrite';
import Intro from '@pages/intro/Intro';
import ToolDetail from '@pages/toolDetail/ToolDetail';
import ToolList from '@pages/toolList/ToolList';
import { createBrowserRouter } from 'react-router';
import Layout from 'src/components/layout/Layout';
import MyPageLayout from 'src/components/layout/MyPageLayout';

import MYPAGE_ROUTES from './MyPageRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Intro /> }, // 홈: 온보딩 페이지
      { path: 'intro', element: <Intro /> }, // 온보딩 페이지
      { path: 'toollist', element: <ToolList /> }, // 툴 리스트
      { path: 'toollist/:id', element: <ToolDetail /> }, // 툴 상세
      { path: 'community', element: <Community /> }, // 커뮤니티
      { path: 'community/write', element: <CommunityWrite /> }, // 글 작성
      { path: 'community/:id', element: <CommunityDetail /> }, // 글 상세
    ],
  },
  {
    path: '/mypage',
    element: <MyPageLayout />,
    children: [...MYPAGE_ROUTES],
  },
]);

export default router;
