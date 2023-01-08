import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const CardProfile = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className='shadow'>
      <div className='h-20 bg-blue-300' />
      <div className='py-3 flex justify-end relative'>
        <div className='w-1/2'>
          <div className='rounded-full bg-gray-400 w-20 h-20 absolute -top-10 left-6' />
        </div>
        <div className='text-sm w-1/2'>
          <div className='mb-1 font-bold'>John Doe</div>
          <div className='mb-4'>Joined Dec 12 2022</div>
        </div>
      </div>
      <ul className='text-sm pb-2'>
        <Link to='/profile'>
          <li
            className={`uppercase px-4 py-2 hover:bg-green-100 cursor-pointer ${
              location.pathname === '/profile' && 'bg-green-100'
            }`}
          >
            profile settings
          </li>
        </Link>
        <Link to='/order'>
          <li
            className={`uppercase px-4 py-2 hover:bg-green-100 cursor-pointer ${
              location.pathname === '/order' && 'bg-green-100'
            }`}
          >
            orders list
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default CardProfile;
