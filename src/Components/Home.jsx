import React from 'react'
import Header from './Header'
export default function Home() {
  return (
    <div className='lg:h-[90%] h-[94%]'>
    <img src="/Fashion.jpg" alt="Mobile" className="hidden lg:block w-full h-full object-cover" />
  
    <img src="/Creative.png" alt="Desktop" className="block lg:hidden w-full h-full object-cover object-bottom" />
  </div>
  
  )
}


 