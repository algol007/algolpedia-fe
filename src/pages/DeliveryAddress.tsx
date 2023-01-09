import LayoutDefault from '@/common/components/Layout/LayoutDefault';
import CardDeliveryAddress from '@/modules/DeliveryAddress/CardDeliveryAddress';
import React from 'react';

const DeliveryAddress = () => {
  return (
    <LayoutDefault>
      <div className='container mx-auto'>
        <div className='flex justify-center'>
          <div className='w-1/3'>
            <CardDeliveryAddress />
          </div>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default DeliveryAddress;
