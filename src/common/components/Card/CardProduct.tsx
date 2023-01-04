import React from 'react';

const CardProduct = () => {
  return (
    <div className='border p-2'>
      <div className='w-full'>
        <img
          src='https://res.cloudinary.com/dsdnh8nf6/image/upload/v1672644916/samples/ecommerce/accessories-bag.jpg'
          alt='fashion'
        />
      </div>
      <div className='mt-4 text-sm'>
        <div className='mb-2'>Velcro Ballerinas For Girls</div>
        <div className='mb-2'>4 reviews</div>
        <div className='mb-2'>Rp 90,000</div>
      </div>
    </div>
  );
};

export default CardProduct;
