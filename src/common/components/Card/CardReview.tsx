import React from 'react';

const CardReview = () => {
  return (
    <div className='text-sm bg-gray-100 p-2'>
      <div className='mb-1'>John Doe</div>
      <div className='flex mb-1'>
        <span className='material-symbols-outlined text-sm'>star</span>
        <span className='material-symbols-outlined text-sm'>star</span>
        <span className='material-symbols-outlined text-sm'>star</span>
      </div>
      <div className='mb-2'>Jan 12 2022</div>
      <div className='bg-blue-200 p-2'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur iure
        beatae tenetur labore quod minima, tempore magnam veniam excepturi
        animi, sequi dolores quos sit qui eaque eligendi nisi. Repellat,
        molestias.
      </div>
    </div>
  );
};

export default CardReview;
