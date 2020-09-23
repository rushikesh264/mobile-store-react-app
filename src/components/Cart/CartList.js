import React from 'react';
import CartItem from'./CartItem';
export default function CartList({value}) {
  const {cart}=value;
  console.log("Cartlist:",cart,value);
  return (
    <div>
      {cart.map((item,index)=>{
           return <CartItem  key={index} item={item} value={value}/>
      })}
    </div>
  );
}
