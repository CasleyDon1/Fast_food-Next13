import React from "react";
import Image from "next/image";

const CartPage = () => {
 return (
  <div className="h-[calc(100vh-6rem)] h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
     {/*Product Container*/}
     <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
	{/*Single-item Container*/}
	<div className="flex items-center justify-between mb-4 mt-16">
	  <Image src="/temporary/p1.png" alt="" width={100} height={100}/>
	  <div className="">
	    <h1 className="uppercase text-xl font-bold">
	      sicilian
	    </h1>
	    <span>Large</span>
	  </div>
	  <h2 className="font-bold">R145.70</h2>
	  <span className="cursor-pointer">X</span>
	</div>
	{/*Single-item Container*/}                                <div className="flex items-center justify-between mb-4">                                                                <Image src="/temporary/p1.png" alt="" width={100} height={100}/>                                                      <div className="">                                           <h1 className="uppercase text-xl font-bold">                 sicilian                                                 </h1>                                                      <span>Large</span>                                       </div>                                                     <h2 className="font-bold">R145.70</h2>                     <span className="cursor-pointer">X</span>                </div>
	{/*Single-item Container*/}                                <div className="flex items-center justify-between mb-4">                                                                <Image src="/temporary/p1.png" alt="" width={100} height={100}/>                                                      <div className="">                                           <h1 className="uppercase text-xl font-bold">                 sicilian                                                 </h1>                                                      <span>Large</span>                                       </div>                                                     <h2 className="font-bold">R145.70</h2>                     <span className="cursor-pointer">X</span>                </div>
     </div>
     {/*Payment Container*/}
     <div className="h-1/2 bg-fuchsia-50 p-4 flex flex-col justify-center gap-4 lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
	<div className="flex justify-between">
	   <span>Subtotal (3 items)</span>
	   <span>R146.50</span>
	</div>
	<div className="flex justify-between">
           <span>Service Cost</span>
           <span>R0</span>
        </div>
	<div className="flex justify-between">
           <span>Delivery Fee</span>
           <span className="text-green-700">FREE</span>
        </div>
	<hr className="my-2"/>
	<div className="flex justify-between">
           <span>TOTAL(INC. VAT)</span>
           <span className="font-bold">R146.50</span>
        </div>
	<button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
	  Checkout
	</button>
     </div>
  </div>
  );
}

export default CartPage;
