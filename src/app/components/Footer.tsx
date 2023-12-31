import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 flex items-center justify-between text-red-500">
      <Link href="/" className="font-bold text-xl">Dons Spot</Link>
      <p>All rights reserved</p>
    </div>
  );
}

export default Footer;
