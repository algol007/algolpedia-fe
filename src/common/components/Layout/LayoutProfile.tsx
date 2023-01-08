import React from 'react';
import { ToastContainer } from 'react-toastify';
import Topbar from '@/common/components/Topbar';
import 'react-toastify/dist/ReactToastify.css';
import CardProfile from '../Card/CardProfile';

type LayoutProfileType = {
  children: React.ReactNode;
};

const LayoutProfile = ({ children }: LayoutProfileType) => {
  return (
    <div className='bg-white min-h-screen w-full'>
      <Topbar />
      <div className='py-8'>
        <div className='container mx-auto flex'>
          <div className='w-1/3'>
            <CardProfile />
          </div>
          {children}
        </div>
      </div>
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

export default LayoutProfile;
