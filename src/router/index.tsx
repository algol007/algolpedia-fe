import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import Order from '@/pages/OrderList';
import Detail from '@/pages/ProductDetail';
import Profile from '@/pages/Profile';
import Cart from '@/pages/Cart';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import DeliveryAddress from '@/pages/DeliveryAddress';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/*',
    element: <NotFound />,
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
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/delivery-address',
    element: <DeliveryAddress />,
  },
]);

export default router;
