import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
const [show,setShow]=useState(false);

  const handleMenu=()=>
{
  setShow(prev=>!prev);
}

  function aa()
  {
    window.scrollTo(0)
  }
  return (
    <>
    <div className=' lg:hidden lg:flex-row justify-between p-3 gap-2  lg:p-5 bg-slate-800 text-white font-bold lg:text-xl lg:relative // flex   '>
    <Link to='/'>SHOP</Link>
    <button onClick={handleMenu}>{show?'CLOSE':"MENU"}</button>   
    </div>
    <div className={` lg:flex flex lg:flex-row justify-evenly p-3 gap-2  lg:p-5 bg-slate-800 text-white font-bold lg:text-xl lg:relative flex-col  ${show?'fixed left-60 ':'hidden'} `}>
      <Link to='/' className='hover:underline'>Home</Link>
      <Link to='/productList/mens_outerwear'className='hover:underline' >Men's OuterWear</Link>
      <Link to='/productList/ladies_outerwear' className='hover:underline'>Women's OuterWear</Link>
      <Link to='/productList/mens_tshirts' className='hover:underline'>Men's TShirts</Link>
      <Link to='/productList/ladies_tshirts' className='hover:underline'>Women's TShirts</Link>
      <Link to='/cart' className='hover:underline'>Cart</Link>
      
    </div>
    </>
  )
}
