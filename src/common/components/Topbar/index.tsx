import { useState } from 'react';
import { Link } from 'react-router-dom';

type IconSocialType = {
  url: string;
  alt: string;
};

const IconSocial = ({ url, alt }: IconSocialType) => (
  <img src={url} alt={alt} width={25} />
);

const Topbar = () => {
  const [isShow, setIsShow] = useState(false);

  const socialList = [
    {
      url: 'https://cdn-icons-png.flaticon.com/512/4494/4494467.png',
      alt: 'youtube',
    },
    {
      url: 'https://cdn-icons-png.flaticon.com/512/4494/4494465.png',
      alt: 'twitter',
    },
    {
      url: 'https://cdn-icons-png.flaticon.com/512/4494/4494471.png',
      alt: 'linkedin',
    },
    {
      url: 'https://cdn-icons-png.flaticon.com/512/3670/3670274.png',
      alt: 'instagram',
    },
    {
      url: 'https://cdn-icons-png.flaticon.com/512/4494/4494470.png',
      alt: 'whatsapp',
    },
  ];

  return (
    <div>
      <div className='bg-green-600 w-full'>
        <div className='flex items-center justify-between container mx-auto'>
          <div className='flex items-center text-sm text-white py-2 gap-12'>
            <div>+62 822 9167 6911</div>
            <div>info@algolpedia.com</div>
          </div>
          <div className='flex items-center gap-4'>
            {socialList.map((data, idx) => (
              <div key={idx}>
                <IconSocial url={data.url} alt={data.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='container mx-auto py-2 flex justify-between items-center'>
        <div className='w-1/5'>
          <Link to='/'>
            <img
              src='https://logos-download.com/wp-content/uploads/2021/01/Free_Fire_Logo.png'
              alt='logo'
              width={150}
            />
          </Link>
        </div>
        <div className='w-2/5 flex'>
          <input
            type='text'
            placeholder='Search'
            className='h-10 border w-full p-2 text-sm'
          />
          <button className='bg-black h-10 px-4 text-white uppercase text-sm'>
            search
          </button>
        </div>
        <div className='w-1/5 flex items-center relative justify-end'>
          <div
            className='text-sm border py-2 px-4 mr-2 cursor-pointer'
            onClick={() => setIsShow(!isShow)}
          >
            Hi, John Doe
          </div>
          <Link to='/cart'>
            <span className='material-symbols-outlined'>shopping_bag</span>
          </Link>
          {isShow && (
            <div className='absolute top-10 text-sm bg-black py-1 right-8'>
              <Link to='/profile'>
                <div className='w-28 text-white py-2 px-3 hover:bg-gray-700 cursor-pointer'>
                  Profile
                </div>
              </Link>
              <Link to='/login'>
                <div className='w-28 text-white py-2 px-3 hover:bg-gray-700 cursor-pointer'>
                  Logout
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
