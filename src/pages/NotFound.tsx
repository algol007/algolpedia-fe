import LayoutDefault from '@/common/components/Layout/LayoutDefault';
import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundSVG from '@/assets/notfound.svg';

const NotFound = () => {
  return (
    <LayoutDefault>
      <div className='flex justify-center'>
        <div className='lg:w-1/3'>
          <div className='text-center text-lg'>Page Not Found</div>
          <div className='w-full my-16'>
            <img src={NotFoundSVG} alt='not found' />
          </div>
          <div className='w-full'>
            <Link to='/'>
              <button className='w-full h-10 bg-green-600 text-sm text-white'>
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default NotFound;
