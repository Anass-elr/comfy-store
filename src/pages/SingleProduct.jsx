import React from 'react'
import { customFetch, formatPrice } from '../utils'
import { useLoaderData } from 'react-router-dom'


export const loader = async ({ params }) => {
  const { id } = params;
  const productUrl = `/products/${id}`;
  const response = await customFetch(productUrl);
  const product = response.data.data;
  console.log(product);
  return { product };
}

const SingleProduct = () => {

  const { product }  = useLoaderData();  

  const { title, company, price, image, description, colors } = product.attributes;
  const { id } = product.id; 
  const dollarAmount = formatPrice(price);

  console.log(id, title, company, price, image, description, colors);

  const [productColor, setProductColor] = React.useState(colors[0]);
  const [amount, setAmount] = React.useState(1);

  
  return (
    <section className='py-16 px-4 md:px-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
        
        {/* LEFT COLUMN - IMAGES */}
        <div className='flex items-center justify-center'>
          <img 
            src={image} 
            alt={title}
            className='w-full h-auto object-cover rounded-lg shadow-lg'
          />
        </div>

        {/* RIGHT COLUMN - INFORMATION */}
        <div className='flex flex-col justify-start text-white'>
          {/* Title */}
          <h1 className='text-3xl md:text-4xl font-bold mb-2 text-white'>{title}</h1>
          
          {/* Company */}
          <p className='text-white text-lg mb-4'>
            <span className='font-semibold'>Brand:</span> {company}
          </p>

          {/* Price */}
          <div className='text-3xl font-bold text-blue-300 mb-6'>
            {dollarAmount}
          </div>

          {/* Description */}
          <p className='text-white text-base leading-relaxed mb-6'>
            {description}
          </p>

          {/* Colors */}
          <div className='mb-6'>
            <h3 className='text-lg font-semibold mb-3'>Colors</h3>
            <div className='flex gap-3'>
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setProductColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                    productColor === color 
                      ? 'border-black scale-110' 
                      : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                  title={color}
                  aria-label={`Select ${color} color`}
                />
              ))}
            </div>
            <p className='text-sm text-white mt-2 bg-gray-800 px-3 py-1 rounded inline-block'>
              Selected: <span className='font-semibold'>{productColor}</span>
            </p>
          </div>

          {/* Amount/Quantity */}
          <div className='mb-6'>
            <h3 className='text-lg font-semibold mb-3 text-white'>Amount</h3>
            <input 
              type='number'
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              min='1'
              max='999'
              className='w-32 px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600'
            />
          </div>

          {/* Add to BAG Button */}
          <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200'>
            Add to BAG
          </button>
        </div>

      </div>
    </section>
  )
}

export default SingleProduct
