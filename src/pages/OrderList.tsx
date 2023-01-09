import LayoutProfile from '@/common/components/Layout/LayoutProfile';
import React from 'react';

const Order = () => {
  return (
    <LayoutProfile>
      <div className='w-2/3 pl-8'>
        <table className='table-auto w-full text-sm'>
          <thead>
            <tr className='border-b-2 border-black'>
              <th className='text-left p-2'>ID</th>
              <th className='text-left p-2'>STATUS</th>
              <th className='text-left p-2'>DATE</th>
              <th className='text-left p-2'>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-green-100'>
              <td className='p-2'>1</td>
              <td className='p-2'>Paid</td>
              <td className='p-2'>Dec 22 2022</td>
              <td className='p-2'>Rp 100,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </LayoutProfile>
  );
};

export default Order;
