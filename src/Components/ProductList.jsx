import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './Header';

//Context
import { Context } from './ContextProvider';
import { useContext } from 'react';






export default function ProductList() {

  let {section} =useParams();
  const d = require(`../data/${section}.json`)
  const [data, setdata] = useState(d)
  const scrollContainer = useRef(null)

  console.log(d);
  useEffect(()=>{
    setdata(d)
    document.querySelector("#scrollContainer").scrollTo(0, 0)
    
  }, [section])

  console.log(data);

  // Context
  let {isExist,handleCart}=useContext(Context);










  return (
    <>
  
  <h2 className='lg:text-4xl text-2xl font-bold font-serif p-3'>{data[0].category.toUpperCase()}</h2>
    <div id="scrollContainer" className='  flex flex-wrap lg:gap-8 justify-evenly gap-4 lg:h-[80%]
    h-[87%] overflow-scroll'>
      {data.map((obj)=>
      {
        return(
          <div className='  shadow-xl shadow-gray-600  flex flex-wrap  flex-row lg:w-[380px] w-[150px] lg:h-[520px] h-[250px]  '>
            <Link to={`/productDetails/${section}/${obj.id}`} key={obj.id} className=' w-full lg:h-[70%] h-[55%] ' >
            
              <img className='h-full w-full' src={obj.image} alt="no image" />
            
            </Link>
            <div className=' w-full lg:h-[30%] h-[45%] flex flex-col justify-evenly items-center '>
              <p className='lg:text-2xl text-sm font-bold'>{obj.title}</p>
            <p className='lg:font-bold font-semibold text-sm lg:text-2xl '>PRICE:{obj.price}$</p>
            { isExist(obj.name)?             
              <button className='  bg-green-500 rounded-lg lg:p-2  p-1 text-white font-bold shadow-md shadow-teal-600'  >ADDED &#10004;</button>:
              <button className='  bg-blue-600 hover:bg-blue-500  rounded-lg lg:p-2 p-1 text-white font-bold shadow-md shadow-teal-600' onClick={()=>handleCart(obj)}  >ADD TO CART</button>
            }
            </div>
          </div>
          
        )
      })}

    </div>
    </>
  )
}
