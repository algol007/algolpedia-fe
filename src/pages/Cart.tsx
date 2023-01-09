import CardCart from '@/common/components/Card/CardCart';
import LayoutDefault from '@/common/components/Layout/LayoutDefault';
import React from 'react';

const Cart = () => {
  return (
    <LayoutDefault>
      <div className='mb-8'>
        <div className='container mx-auto'>
          <div className='mb-8'>
            <CardCart />
          </div>
          <div className='flex justify-end px-4 pb-4 border-b mb-12'>
            <div className='text-gray-400'>
              TOTAL:{' '}
              <span className='ml-4 font-bold text-black'>Rp 100,000</span>
            </div>
          </div>
          <div className='flex justify-between'>
            <button className='bg-black h-10 lg:w-1/3 text-white text-sm'>
              CONTINUE TO SHOPPING
            </button>
            <button className='bg-green-600 h-10 lg:w-1/3 text-white text-sm'>
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default Cart;
