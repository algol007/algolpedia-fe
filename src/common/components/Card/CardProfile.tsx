import React from 'react';

const CardProfile = () => {
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
        <li className='uppercase px-4 py-2 hover:bg-green-200 cursor-pointer'>
          profile settings
        </li>
        <li className='uppercase px-4 py-2 hover:bg-green-200 cursor-pointer'>
          orders list
        </li>
      </ul>
    </div>
  );
};

export default CardProfile;
