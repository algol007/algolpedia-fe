import LayoutDefault from '@/common/components/Layout/LayoutDefault';
import CardLogin from '@/modules/Login/CardLogin';
import React from 'react';

const Login = () => {
  return (
    <LayoutDefault>
      <div className='container mx-auto'>
        <div className='flex justify-center'>
          <div className='w-1/3'>
            <CardLogin />
          </div>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default Login;
