import React from 'react';
import { ToastContainer } from 'react-toastify';
import Topbar from '@/common/components/Topbar';
import 'react-toastify/dist/ReactToastify.css';

type LayoutDefaultType = {
  children: React.ReactNode;
};

const LayoutDefault = ({ children }: LayoutDefaultType) => {
  return (
    <div className='bg-white min-h-screen w-full'>
      <Topbar />
      <div className='py-8'>{children}</div>
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

export default LayoutDefault;
