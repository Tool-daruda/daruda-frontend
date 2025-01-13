import MyPage from '@pages/myPage/MyPage';
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
  { index: true, element: <MyPage />, loader: requireAuth },
  { path: 'mypage', element: <MyPage />, loader: requireAuth },
];
export default MYPAGE_ROUTES;
