import { createBrowserRouter } from 'react-router';

import MYPAGE_ROUTES from './MyPageRoutes';
import Community from '@pages/community/Community';
import CommunityDetail from '@pages/communityDetail/CommunityDetail';
import CommunityModify from '@pages/communityModify/CommunityModify';
import CommunityWrite from '@pages/communityWrite/CommunityWrite';
import NotFound from '@pages/error/NotFound';
import Intro from '@pages/intro/Intro';
import KakaoAuth from '@pages/login/KakaoAuth';
import KakaoRedirectHandler from '@pages/login/KakaoRedirectHandler';
import Notification from '@pages/notification/Notification';
import Search from '@pages/search/Search';
import SignUp from '@pages/signUp/SignUp';
import ToolDetail from '@pages/toolDetail/ToolDetail';
import ToolList from '@pages/toolList/ToolList';
import Layout from 'src/components/layout/Layout';
import MyPageLayout from 'src/components/layout/MyPageLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <ToolList /> }, // 툴 리스트 (홈화면)
      { path: 'toollist', element: <ToolList /> }, // 툴 리스트
      { path: 'toollist/:toolParam', element: <ToolDetail /> }, // 툴 상세
      { path: 'community', element: <Community /> }, // 커뮤니티
      { path: 'notification', element: <Notification /> }, // 커뮤니티
      { path: 'community/write', element: <CommunityWrite /> }, // 글 작성
      { path: 'community/:id', element: <CommunityDetail /> }, // 글 상세
      { path: 'community/modify/:id', element: <CommunityModify /> }, // 글 수정
      { path: 'login', element: <KakaoAuth /> }, // 로그인
      { path: 'signUp', element: <SignUp /> }, // 회원가입
      { path: 'api/v1/users/kakao/login-url', element: <KakaoRedirectHandler /> }, // 카카오 리다이렉트 경로
      { path: 'search', element: <Search /> }, // 검색
      { path: '*', element: <NotFound /> }, // 404 페이지
    ],
  },
  {
    path: '/onboarding',
    element: <Intro />,
  }, // 온보딩 페이지

  {
    path: '/mypage',
    element: <MyPageLayout />,
    children: [...MYPAGE_ROUTES],
  },
]);

export default router;
