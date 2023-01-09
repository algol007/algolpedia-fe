type CompanyInfoType = {
  icon: string;
  info: string;
  description: string;
};

const CompanyInfo = ({ icon, info, description }: CompanyInfoType) => (
  <div className='text-center flex items-center flex-col text-sm'>
    <div className='flex justify-center items-center w-10 h-10 rounded-full border-2 border-green-500 mb-2'>
      <span className='material-symbols-outlined text-green-500'>{icon}</span>
    </div>
    <div className='mb-1 font-semibold'>{info}</div>
    <div>{description}</div>
  </div>
);

const Footer = () => {
  const info = [
    {
      icon: 'call',
      info: 'Call Us 24x7',
      description: '+62 822 9167 6911',
    },
    {
      icon: 'where_to_vote',
      info: 'California, St. 12',
      description: '+62 822 9167 6911',
    },
    {
      icon: 'fax',
      info: 'Fax',
      description: '+62 822 9167',
    },
  ];

  const paymentGateway = [
    {
      url: 'https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-png-transparent-svg-vector-bie-supply-0.png',
      alt: 'master-card',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png',
      alt: 'paypal',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png',
      alt: 'visa',
    },
    {
      url: 'https://png.pngitem.com/pimgs/s/654-6543054_logo-american-express-icon-png-transparent-png.png',
      alt: 'american-express',
    },
  ];

  return (
    <div>
      <div
        className='flex justify-center background-image mb-8'
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dsdnh8nf6/image/upload/v1672644915/samples/ecommerce/leather-bag-gray.jpg')`,
        }}
      >
        <div className='w-2/5 text-center py-28 text-white'>
          <div className='mb-2 text-xl'>DO YOU NEED MORE TIPS?</div>
          <div className='mb-6 text-xs'>
            Sign up free and get the latest tips.
          </div>
          <div className='w-full flex'>
            <input
              type='text'
              placeholder='Your email'
              className='h-10 border p-2 text-sm w-full text-black'
            />
            <button className='bg-green-600 h-10 px-4 text-white uppercase text-sm w-40'>
              Send email
            </button>
          </div>
        </div>
      </div>
      <div className='flex container mx-auto justify-around mb-8'>
        {info.map((data, idx) => (
          <div
            key={idx}
            className='shadow-lg w-60 h-40 flex items-center justify-center'
          >
            <CompanyInfo
              icon={data.icon}
              info={data.info}
              description={data.description}
            />
          </div>
        ))}
      </div>
      <div className='flex justify-center gap-4 bg-gray-100 items-center'>
        {paymentGateway.map((data, idx) => (
          <div className='w-16' key={idx}>
            <img src={data.url} alt={data.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
