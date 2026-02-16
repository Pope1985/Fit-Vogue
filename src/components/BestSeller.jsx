import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from './Title'

const BestSeller = () => {

  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestSellerProducts = products.filter((item) => item.bestseller);
    setBestSeller(bestSellerProducts.slice(0, 10));
  }, [products]);
  return (
    <div className='my-10'>
      <div>
        <div className='text-center py-8 text-3xl'>
            <Title text1={"OUR BEST"} text2={"SELLERS"} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover our most popular products that customers love and recommend.
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {bestSeller.map((item, index) => (
            <div key={item?._id ?? item?.id ?? index} className="border border-gray-300 rounded-lg overflow-hidden">
              <img
                src={Array.isArray(item.image) ? item.image[0] : item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600">₦{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BestSeller
