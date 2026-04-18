import React from 'react'
import { customFetch } from '../utils'
import { useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils'
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

  const { title, company, price, image, description } = product.attributes;
  const { id } = product.id;
  const dollarAmount = formatPrice(price);
  
  return (
    <div className=''> 
      
    </div>
  )
}

export default SingleProduct
