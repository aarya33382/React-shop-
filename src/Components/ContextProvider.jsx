import React from 'react'
import { createContext,useState } from 'react';
export const Context= createContext();

export default function ContextProvider({children}) {
  const [cartItems,setCartItems]=useState([]);
  const [cartIndex,setCartIndex]=useState([]);


  const isExist=(id)=>
  {
    return cartIndex.includes(id);
  }
  const handleCart=(product)=>
  {
    setCartIndex(prev=> [...prev,product.name]);
    setCartItems(
      (prev)=>
      {
       return (
        [...prev,{...product,quantity:1}]
       )
      }
    )
  }
  const handlePlus=(item)=>
  {
      setCartItems(prev=> {
        return (
          prev.map(obj=>{
            return obj===item ? {...obj,quantity:obj.quantity+1}:obj
          })
        )
      })
  }
  const handleRemove=(itemName)=>
  {
    setCartIndex(prev=>{
     return prev.filter((name)=>
      {
        return name!==itemName;
      }
      )
    });

    setCartItems(prev=>{
      return  prev.filter((obj)=>
      {
        return itemName!==obj.name;
      })
    })
  }

  const calculate=()=>
  {
    let q=0;
    let c=0;
    cartItems.forEach((item)=>
    {
      q=q+item.quantity;
      c=c+item.quantity*item.price;

    })
    return {c,q};
  }






  return (
    <Context.Provider value={{cartItems,setCartItems,isExist,handleCart,handlePlus,handleRemove,calculate}}>
      {children}
    </Context.Provider>
  )
}
