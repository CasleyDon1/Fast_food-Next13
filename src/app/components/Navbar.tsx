import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Link from "next/link";
import Image from "next/image";	

const Navbar = () => {

 const user = false

  return (
    <div className="h-12 p-4 text-red-500 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      <div className="hidden md:flex gap-4 flex-1">
	<Link href="/">Homepage</Link>
	<Link href="/menu">Menu</Link>
	<Link href="/">Contact</Link>
      </div>
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">
	  Don's Spot
	</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
       <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1">
	<Image src="/phone.png" alt="" width={20} height={20}/>
	<span>011 672 9911</span>
       </div>
      <div className="hidden md:flex gap-4 items-center rounded-md">
        {!user ? (
	<Link href="/login">Login</Link>
	) : (
        <Link href="/orders">Orders</Link>)}
        <CartIcon />
      </div>
    </div>
  </div>
  );
}

export default Navbar;
