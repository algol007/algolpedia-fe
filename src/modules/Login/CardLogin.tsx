import React from 'react';
import { Link } from 'react-router-dom';

const CardLogin = () => {
  return (
    <div className='shadow-xl p-6'>
      <form className='mb-6'>
        <div className='mb-3'>
          <input
            type='text'
            className='h-10 p-2 w-full bg-blue-100 text-sm'
            placeholder='Email'
          />
        </div>
        <div className='mb-6'>
          <input
            type='password'
            className='h-10 p-2 w-full bg-blue-100 text-sm'
            placeholder='Password'
          />
        </div>
        <button className='bg-green-600 h-10 w-full text-sm text-white uppercase'>
          Login
        </button>
      </form>
      <div className='text-center text-sm text-gray-400'>
        <Link to='/register'>Create Account</Link>
      </div>
    </div>
  );
};

export default CardLogin;
