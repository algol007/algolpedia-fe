import React from 'react';
import { ToastContainer } from 'react-toastify';
import Topbar from '@/common/components/Topbar';
import 'react-toastify/dist/ReactToastify.css';

type LayoutType = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutType) => {
  return (
    <div className='bg-white min-h-screen w-full'>
      <div className='mb-8'>
        <Topbar />
      </div>
      <div>{children}</div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
};

export default Layout;
