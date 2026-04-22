import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { BsGridFill, BsList } from 'react-icons/bs'
import ProductsGrid from './ProductsGrid'
import ProductsTable from './ProductsTable'

const ProductsContainer = () => {
  
  const { meta  } = useLoaderData();
  const [isGridView, setIsGridView] = React.useState(true);

  return (
    <>
      {/* Header with product count and view toggle */}
      <div className='py-8 px-4'>
        <div className='flex justify-between items-center'>
          {/* Left: Product Count */}
          <p className='text-xl border-bottom  text-white'>
            {meta.pagination.total} Products
          </p>

          {/* Right: View Toggle Buttons */}
          <div className='flex gap-4'>
            {/* Grid View Button */}
            <button
              onClick={() => setIsGridView(true)}
              className={`btn btn-sm gap-2 transition-all duration-300 ${
                isGridView
                  ? 'bg-[#FF70C0] border-[#FF70C0] text-white hover:bg-[#ff5cb3]'
                  : 'btn-outline text-gray-300 hover:text-white hover:border-gray-400'
              }`}
              title='Grid View'
            >
              <BsGridFill size={18} />
            </button>

            {/* List View Button */}
            <button
              onClick={() => setIsGridView(false)}
              className={`btn btn-sm gap-2 transition-all duration-300 ${
                !isGridView
                  ? 'bg-[#FF70C0] border-[#FF70C0] text-white hover:bg-[#ff5cb3]'
                  : 'btn-outline text-gray-300 hover:text-white hover:border-gray-400'
              }`}
              title='List View'
            >
              <BsList size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Conditional rendering based on view */}
      {isGridView ? <ProductsGrid /> : <ProductsTable />}
    </>
  );
};

export default ProductsContainer
