import CommunityWrite from '@pages/communityWrite/CommunityWrite';
import router from '@routes/Router';
import { RouterProvider } from 'react-router';

const App = () => {
  return (
    <RouterProvider router={router}>
      <CommunityWrite />
    </RouterProvider>
  );
};

export default App;
