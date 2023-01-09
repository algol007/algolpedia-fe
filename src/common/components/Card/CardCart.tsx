import React from 'react';

const CardCart = () => {
  return (
    <div className='shadow-xl'>
      <div className='bg-blue-200 text-center py-3 text-sm'>
        Total Cart Products (4)
      </div>
      <div className='flex p-4 items-center justify-between text-sm'>
        <div className='w-1/4'>
          <img
            src='https://res.cloudinary.com/dsdnh8nf6/image/upload/v1672644916/samples/ecommerce/accessories-bag.jpg'
            alt='fashion'
          />
        </div>
        <div className='pl-4'>Nike Girl Shoes</div>
        <div>
          <label htmlFor='quantity' className='text-xs text-gray-400'>
            QUANTITY
          </label>
          <select
            name='quantity'
            id='quantity'
            className='w-full border h-10 bg-white p-2 mt-1'
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
        <div>
          <div className='text-gray-400 mb-2 text-xs'>SUBTOTAL</div>
          <div>Rp 100,000</div>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
