import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages';
import Profile from '@/pages/profile';
import Order from '@/pages/order';
import Detail from '@/pages/detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/order',
    element: <Order />,
  },
  {
    path: '/product/:id',
    element: <Detail />,
  },
]);

export default router;
