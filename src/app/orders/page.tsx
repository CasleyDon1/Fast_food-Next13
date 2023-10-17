import React from "react";

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
	<thead>
	  <tr className="text-left">
	    <th className="hidden md:block">Order Id</th>
	    <th>Date</th>
	    <th>Price</th>
	    <th className="hidden md:block">Products</th>
	    <th>Status</th>
	  </tr>
	</thead>
	<tbody>
	  <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">28r722927e63</td>
	    <td className="py-6 px-1">15.10.2023</td>
	    <td className="py-6 px-1">R137.76</td>
	    <td className="hidden md:block py-6 px-2">Veggie Pizza(1), Burger(2), Coca Cola 2l(2)</td>
	    <td className="py-6 px-1">On the way (approx 7min)</td>
	  </tr>
	  <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">28r722927e63</td>
            <td className="py-6 px-1">15.10.2023</td>                  <td className="py-6 px-1">R137.76</td>
            <td className="hidden md:block py-6 px-2">Veggie Pizza(1), Burger(2), Coca Cola 2l(2)</td>                            <td className="py-6 px-1">On the way (approx 7min)</td>                                                             </tr>
	</tbody>
      </table>
    </div>
  );
}

export default OrdersPage;
