// import router from '@routes/Router';
// import { RouterProvider } from 'react-router';

// const App = () => {
//   return <RouterProvider router={router} />;
// };

// export default App;

import SearchBar from './pages/toolList/components/searchBar/SearchBar';
import TopBanner from './pages/toolList/components/topBanner/TopBanner';

const App = () => {
  return (
    <div>
      <TopBanner />
      <SearchBar />
    </div>
  );
};

export default App;
