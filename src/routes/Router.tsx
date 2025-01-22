import Community from '@pages/community/Community';
import CommunityDetail from '@pages/CommunityDetail/CommunityDetail';
import CommunityWrite from '@pages/communityWrite/CommunityWrite';
import NotFound from '@pages/error/NotFound';
import Intro from '@pages/intro/Intro';
import KakaoAuth from '@pages/login/KakaoAuth';
import SignUp from '@pages/signUp/SignUp';
import ToolDetail from '@pages/toolDetail/ToolDetail';
import ToolList from '@pages/toolList/ToolList';
import { createBrowserRouter } from 'react-router';
import Layout from 'src/components/layout/Layout';
import MyPageLayout from 'src/components/layout/MyPageLayout';

import MYPAGE_ROUTES from './MyPageRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <Intro /> }, // 홈: 온보딩 페이지
      { path: 'intro', element: <Intro /> }, // 온보딩 페이지
    ],
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'toollist', element: <ToolList /> }, // 툴 리스트
      { path: 'toollist/:id', element: <ToolDetail /> }, // 툴 상세
      { path: 'community', element: <Community /> }, // 커뮤니티
      { path: 'community/write', element: <CommunityWrite /> }, // 글 작성
      { path: 'community/modify/:id', element: <CommunityWrite /> }, // 글 작성
      { path: 'community/:id', element: <CommunityDetail /> }, // 글 상세
      { path: 'login', element: <KakaoAuth /> }, // 로그인
      { path: 'signUp', element: <SignUp /> }, // 회원가입
      { path: '*', element: <NotFound /> },
    ],
  },
  {
    path: '/mypage',
    element: <MyPageLayout />,
    children: [...MYPAGE_ROUTES],
  },
]);

export default router;
