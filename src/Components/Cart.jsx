import React from 'react'
import { Context } from './ContextProvider'
import { useContext } from 'react'
import Header from './Header';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Cart() {
  let { cartItems, handlePlus, handleRemove, calculate } = useContext(Context);

  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='text-4xl font-extrabold underline '>
        CART ITEMS
      </h1>
     

      <div className='flex gap-6 flex-wrap w-full lg:h-[76%] h-[81%]  overflow-x-scroll p-4'>
        {
          cartItems.length === 0 ?
            <div className='h-[60px] w-[400px] text-4xl font-bold text-red-600  shadow-lg shadow-red-600 text-center rounded-md lg:mt-6'>
              No Items to Display
            </div>
            :



            cartItems.map((item) => {
              return (
                <div className=' h-[200px] w-[340px] flex flex-col justify-evenly rounded-md shadow-lg shadow-lime-600'>
                  <div className='flex justify-evenly gap-1'>
                    <div className='h-[100px] w-[100px] '>
                      <img src={item.image} alt="no-image" className='h-full w-full' />
                    </div>
                    <div className='font-serif  '>
                      <h2>{item.title}</h2>
                      <p>{item.price}$</p>
                    </div>
                  </div>
                  <div className='flex justify-evenly  items-center'>
                    <button className='font-extrabold text-4xl text-blue-600' onClick={e => handlePlus(item)} >+</button>
                    <p className='font-bold text-2xl ' >{item.quantity} </p>
                    <button className='font-extrabold text-4xl text-blue-600 '
                      onClick={() => {
                        if (item.quantity > 1) {
                          item.quantity = item.quantity - 1; setCount(item.quantity);
                        }
                      }} >-</button>
                    <button className=' p-1 text-red-600 font-semibold rounded-lg bg-slate-400 hover:bg-slate-300' onClick={e => handleRemove(item.name)}>REMOVE</button>
                  </div>
                </div>
              )
            })
        }

      </div>

      {cartItems.length === 0 ? '' :
        <div className='shadow-md  shadow-yellow-600 lg:text-left  text-center'>
          <p className='text-xl font-bold'>Total Items: {calculate().q} </p>
          <p className='text-xl font-bold'>Total Cost: {calculate().c.toFixed(2)}$  </p>
        </div>
      }
    </>

  )
}
