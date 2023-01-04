import { useState } from 'react';
import ReactPaginate from 'react-paginate';

type PaginationType = {
  pageCount: number;
  handlePageClick: () => void;
};

function Pagination({ handlePageClick, pageCount }: PaginationType) {
  return (
    <div className='flex justify-center mt-8'>
      <ReactPaginate
        breakLabel='...'
        nextLabel={
          <span className='material-symbols-outlined'>chevron_right</span>
        }
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel={
          <span className='material-symbols-outlined'>chevron_left</span>
        }
        className='flex items-center text-xs font-bold'
        pageClassName='px-3 py-2 rounded'
        previousClassName='p-2'
        nextClassName='p-2'
        activeClassName='bg-green-500 text-white'
        disabledClassName='text-disabled'
      />
    </div>
  );
}
export default Pagination;
