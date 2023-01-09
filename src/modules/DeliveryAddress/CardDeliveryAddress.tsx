import React from 'react';
import { Link } from 'react-router-dom';

const CardDeliveryAddress = () => {
  return (
    <div className='shadow-xl p-6'>
      <div className='text-center mb-4'>DELIVERY ADDRESS</div>
      <form>
        <div className='mb-3'>
          <input
            type='text'
            className='h-10 p-2 w-full bg-blue-100 text-sm'
            placeholder='Full Address'
          />
        </div>
        <div className='mb-3'>
          <input
            type='text'
            className='h-10 p-2 w-full bg-blue-100 text-sm'
            placeholder='City'
          />
        </div>
        <div className='mb-3'>
          <input
            type='text'
            className='h-10 p-2 w-full bg-blue-100 text-sm'
            placeholder='Postal Code'
          />
        </div>
        <div className='mb-6'>
          <input
            type='text'
            className='h-10 p-2 w-full bg-blue-100 text-sm'
            placeholder='Country'
          />
        </div>
        <button className='bg-green-600 h-10 w-full text-sm text-white uppercase'>
          Continue
        </button>
      </form>
    </div>
  );
};

export default CardDeliveryAddress;
