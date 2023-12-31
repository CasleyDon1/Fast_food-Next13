import React from "react";
import Image from "next/image";
import { featuredProducts } from "@/app/data";
const Featured = () => {
  return (                                                     <div className="w-screen overflow-x-scroll text-red-500">
      {/* Wrapper */}
      <div className="w-max flex">
	{/* Single Item */}
	{featuredProducts.map(item =>(
	<div key={item.id} className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] lg:w-[33vh] lg:h-[90vh]">
	  {/* Image Container */}
	  {item.img && (
	    <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
     	    <Image src={item.img} alt="" fill className="object-contain" />
	  </div>
	  )}
	  <div className="flex-1 flex flex-col justify-center items-center text-center gap-4">
	    {/* Text Container */}
	    <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
	      {item.title}
	    </h1>
	    <p className="p-4 2xl:p-8">{item.desc}</p>
	    <span className="text-xl font-bold">R{item.price}</span>
	    <button className="bg-red-500 rounded-md text-white p-2">Add to cart</button>
	  </div>
	</div>
	))}
      </div>
    </div>
  );
}

export default Featured;
