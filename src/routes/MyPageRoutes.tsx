import { MyFavoritePostPage, MyInfoPage, MyPostPage, MyToolPage } from '@pages/myPage';
import { redirect } from 'react-router';

const requireAuth = () => {
  const user = localStorage.getItem('user');
  if (!user) {
    alert('로그인 후 이용하세요.');
    return redirect('/login');
  }
  return null;
};
const MYPAGE_ROUTES = [
  { index: true, element: <MyInfoPage />, loader: requireAuth },
  { path: 'user', element: <MyInfoPage />, loader: requireAuth },
  { path: 'favorite-tools', element: <MyToolPage />, loader: requireAuth },
  { path: 'my-posts', element: <MyPostPage />, loader: requireAuth },
  { path: 'favorite-posts', element: <MyFavoritePostPage />, loader: requireAuth },
];
export default MYPAGE_ROUTES;
