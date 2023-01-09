import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import CardProfile from '@/common/components/Card/CardProfile';
import LayoutProfile from '@/common/components/Layout/LayoutProfile';

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    toast.success('Update profile successfully!');
  };

  return (
    <LayoutProfile>
      <form className='w-2/3 pl-8' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-wrap'>
          <div className='flex flex-col w-1/2 mb-6 pr-2'>
            <label
              htmlFor='username'
              className='text-sm uppercase font-semibold'
            >
              username
            </label>
            <input
              id='username'
              type='text'
              placeholder='Username'
              className='border p-2 mt-1 text-sm'
              {...register('username', { required: true })}
            />
            {errors.username && (
              <span className='text-xs text-red-500'>
                Username is required.
              </span>
            )}
          </div>
          <div className='flex flex-col w-1/2 mb-6 pl-2'>
            <label htmlFor='email' className='text-sm uppercase font-semibold'>
              email
            </label>
            <input
              id='email'
              type='email'
              placeholder='Email'
              className='border p-2 mt-1 text-sm'
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className='text-xs text-red-500'>Email is required.</span>
            )}
          </div>
          <div className='flex flex-col w-1/2 mb-6 pr-2'>
            <label
              htmlFor='new_password'
              className='text-sm uppercase font-semibold'
            >
              new password
            </label>
            <input
              id='new_password'
              type='password'
              placeholder='New password'
              className='border p-2 mt-1 text-sm'
              {...register('new_password', { required: true })}
            />
            {errors.new_password && (
              <span className='text-xs text-red-500'>
                New password is required.
              </span>
            )}
          </div>
          <div className='flex flex-col w-1/2 mb-6 pl-2'>
            <label
              htmlFor='confirm_password'
              className='text-sm uppercase font-semibold'
            >
              confirm password
            </label>
            <input
              id='confirm_password'
              type='password'
              placeholder='Confirm password'
              className='border p-2 mt-1 text-sm'
              {...register('confirm_password', { required: true })}
            />
            {errors.confirm_password && (
              <span className='text-xs text-red-500'>
                Confirm password is required.
              </span>
            )}
          </div>
          <button className='uppercase bg-green-600 text-white w-full py-2 text-sm mt-2 hover:bg-green-600'>
            update profile
          </button>
        </div>
      </form>
    </LayoutProfile>
  );
};

export default Profile;
