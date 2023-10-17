"use client"

import React from "react";
import { useState, useEffect } from "react";

type Props = {
  price:number;
  id:number;
  options?: { title: string; additionalPrice: number }[]
}

const Price = ({ price, id, options }: Props) => {

const [total,setTotal] = useState(price);
const [quantity,setQuantity] = useState(1);
const [selected,setSelected] = useState(0);

useEffect(() => {
  setTotal(
  quantity * (options ? price + options[selected].additionalPrice : price)
  );
}, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">
         R{total.toFixed(2)}
      </h2>
      {/*Options Container*/}
      <div className="flex gap-4">
	{options?.map((options,index) =>(
 	  <button 
	     key={options.title} 
	     className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
	     style={{
	       background: selected === index ? "rgba(248 113 113)" : "White",
	       color: selected === index ? "white" : "red",
	     }}
	     onClick={()=>setSelected(index)}
	     >
	     {options.title}
	  </button>
	))}
      </div>
      {/*Quantity and Add Button Container*/}
      <div className="flex justify-between items-center">
	<div className="flex justify-between w-full p-3 ring-1 ring-red-500">
	   <span>
	     Quantity
	   </span>
	   <div className="flex gap-4 items-center">
             <button onClick={()=>setQuantity(prev=>(prev>1 ? prev-1 : 1))}>{'<'}</button>
	     <button>{quantity}</button>
	     <button onClick={()=>setQuantity(prev=>(prev<9 ? prev+1 : 9))}>{'>'}</button>
	   </div>
	</div>
	{/*Cart Button*/}
	<button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500">Add to Cart</button>
      </div>
    </div>
  );
}

export default Price;
