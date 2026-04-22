import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils'

const ProductsTable = () => {
  const { products ,meta } = useLoaderData();

  return (
    <div className='py-12 px-4'>
      <div className='overflow-x-auto rounded-lg shadow-xl'>

        <table className='table w-full '>
          {/* Head */}
         
          {/* Body */}
          <tbody>
            {products.map((product) => {
              const { title, price, image, company } = product.attributes;
              return (
                <tr 
                  key={product.id}
                  className='border-b border-gray-700 h-48 mb-4 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer'
                >
                  <td>
                    <Link
                      to={`/products/${product.id}`}
                      className='flex items-center gap-6 w-full h-full justify-start'
                    >
                      <div className='w-40 h-40 flex-shrink-0'>
                        <img
                          src={image}
                          alt={title}
                          className='w-full h-full object-cover'
                        />
                      </div>
                      <div className='flex flex-col'>
                        <h3 className='text-white font-semibold capitalize text-2xl'>{title}</h3>
                        <p className='text-gray-400 text-base'>{company}</p>
                      </div>
                    </Link>
                  </td>
                  <td className='text-right'>
                    <span className='text-white font-bold text-xl'>{formatPrice(price)}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable;