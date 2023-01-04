import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages';
import Profile from '@/pages/profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);

export default router;
