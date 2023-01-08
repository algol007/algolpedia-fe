import CardProduct from '@/common/components/Card/CardProduct';
import Footer from '@/common/components/Footer';
import Layout from '@/common/components/Layout/LayoutDefault';
import Pagination from '@/common/components/Pagination';
import { useState } from 'react';

const Home = () => {
  const [dummy, setdummy] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <Layout>
      <div className='container mx-auto'>
        <div className='flex justify-center flex-wrap gap-4'>
          {dummy &&
            dummy.map((data, idx) => (
              <div key={idx} className='w-52'>
                <CardProduct />
              </div>
            ))}
        </div>
        <div className='mb-8'>
          <Pagination
            pageCount={10}
            handlePageClick={() => console.log('hello')}
          />
        </div>
      </div>
      <div className='mt-8'>
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
