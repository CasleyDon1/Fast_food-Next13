import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 flex items-center justify-between text-red-500">
      <Link href="/" className="font-bold text-xl">Don's Spot</Link>
      <p>All rights reserved</p>
    </div>
  );
}

export default Footer;