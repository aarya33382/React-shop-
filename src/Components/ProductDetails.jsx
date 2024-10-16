import React from 'react'
import { useParams } from 'react-router-dom'
//Context

import { Context } from './ContextProvider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
export default function ProductDetails() {
  let { section, id } = useParams();
  let data = require(`../data/${section}`)
  let product = data[id];


  //Context
  const { isExist, handleCart } = useContext(Context);




  return (

    <>
    <div className=' w-[100%] flex justify-between  lg:p-0 p-2 bg-red-300 '>
      <p className='lg:text-4xl font-bold font-serif  text-2xl '>PRODUCT DETAILS</p>
      <button className='lg:w-[90px]  bg-zinc-700 text-white   font-bold text-xl px-4'>
      <Link to={`/productList/${section}`} className=''>BACK</Link>
      </button>
    </div>
      <div className=' lg:w-[100%]  lg:h-[83%] h-[75%] flex lg:flex-row flex-col lg:gap-6 gap-2 lg:px-24  pt-6 overflow-scroll'>
        <div className=' rounded-3xl  lg:w-[470px] lg:h-[500px] w-[100%] h-[300px] flex lg:shadow-2xl shadow-zinc-500 '>
          <img src={product.largeImage} alt="no image" className=' w-full h-full  rounded-3xl' />
        </div>
        <div className=' lg:w-[580px] w-[100%]   lg:p-4 flex flex-col justify-evenly p-3 gap-2 h-fit'>
          <p className='lg:text-4xl text-2xl   font-bold lg:mb-2'>{product.title}</p>
          <div className='flex  justify-between '>
            <p className='lg:text-3xl text-2xl font-semibold'>Price: {product.price}$</p>
            {isExist(product.name) ?
              <button className='  bg-green-500 rounded-lg p-2 text-white font-bold shadow-md shadow-teal-600 lg:mr-0 mr-2'  >ADDED &#10004;</button> :
              <button className='  bg-blue-600 rounded-lg p-2 text-white font-bold shadow-md shadow-teal-600 lg:mr-0 mr-2' onClick={() => handleCart(product)}  >ADD TO CART </button>
            }

          </div>
          <p className='text-xl font-semibold'>category: {product.category}</p>
          <br />
          <p className='font-semibold  break-words'>Description:<br />{product.description}</p>
        </div>

      </div>
    </>
  )

}
