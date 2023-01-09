import CardReview from '@/common/components/Card/CardReview';
import LayoutDefault from '@/common/components/Layout/LayoutDefault';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Detail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    toast.success('Update profile successfully!');
  };

  return (
    <LayoutDefault>
      <div className='mb-8'>
        <div className='container mx-auto flex mb-8'>
          <div className='w-2/5'>
            <div className='w-full mb-8'>
              <img
                src='https://res.cloudinary.com/dsdnh8nf6/image/upload/v1672644916/samples/ecommerce/accessories-bag.jpg'
                alt='fashion'
              />
            </div>
          </div>
          <div className='w-3/5 pl-8'>
            <div className='text-xl font-bold mb-4'>
              Velcro Ballerinas For Girls (Pink)
            </div>
            <p className='text-sm text-gray-500'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              ducimus debitis est ut adipisci, exercitationem nemo fugiat porro
              eius odit rerum amet aspernatur a esse, nesciunt nulla, ex
              recusandae? Assumenda?
            </p>
            <div className='lg:w-1/2 mt-8 text-sm'>
              <div className='border'>
                <div className='flex items-center justify-between p-3 border-b'>
                  <div>Price</div>
                  <div>Rp 100,000</div>
                </div>
                <div className='flex items-center justify-between p-3 border-b'>
                  <div>Status</div>
                  <div>In Stock</div>
                </div>
                <div className='flex items-center justify-between p-3 border-b'>
                  <div>Reviews</div>
                  <div>4 Reviews</div>
                </div>
                <div className='flex items-center justify-between p-3'>
                  <div>Quantity</div>
                  <div>50 Pcs</div>
                </div>
              </div>
              <button className='bg-black text-white font-bold w-full h-10'>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className='container mx-auto flex'>
          <div className='w-2/5'>
            <div className='text-sm mb-4'>
              <div className='mb-2'>REVIEWS</div>
              <div className='bg-blue-200 p-2'>No Reviews</div>
            </div>
            <div>
              <CardReview />
            </div>
          </div>
          <div className='w-3/5 pl-8'>
            <div className='text-sm mb-4'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-2'>WRITE A CUSTOMER REVIEW</div>
                <div className='mb-2'>
                  <label className='font-semibold' htmlFor='rating'>
                    Rating
                  </label>
                  <select
                    id='rating'
                    className='w-full mt-1 h-10 p-2'
                    {...register('rating', { required: true })}
                  >
                    <option value=''>Select...</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                  </select>
                  {errors.rating && (
                    <span className='text-xs text-red-500'>
                      Rating is required.
                    </span>
                  )}
                </div>
                <div className='mb-2'>
                  <label className='font-semibold' htmlFor='comment'>
                    Comment
                  </label>
                  <textarea
                    id='comment'
                    rows={6}
                    className='w-full bg-gray-100 mt-1 p-2'
                    placeholder='Leave comment'
                    {...register('comment', { required: true })}
                  ></textarea>
                  {errors.comment && (
                    <span className='text-xs text-red-500'>
                      Comment is required.
                    </span>
                  )}
                </div>
                <button className='bg-black text-white font-bold w-full h-10'>
                  SUBMIT
                </button>
              </form>
            </div>
            <div className='bg-yellow-200 p-3 text-sm'>
              Please <span className='font-bold'>"Login"</span> to write a
              review
            </div>
          </div>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default Detail;
