import React, { useContext } from "react";
import { ShopingCardContext } from "../../Context/Index";

const OrdersCard = (props) => {
  const context = useContext(ShopingCardContext);
  //console.log(context.items)

  const { totalPrice, totalProducts } = props;

  return (
    <div className="bg-neutral-950 rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
        <p className="text-white text-sm">Date: 01.02.2023</p>
        <div className="flex items-center space-x-2">
          <p className="text-white text-sm p-2">
            Total Products: {totalProducts}
          </p>
          <p className="text-sm text-white">
            Total : <span className="text-green-600 text-base">${totalPrice}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="text-gray-600 hover:text-red-500 focus:outline-none"
          onClick={() => context.deleteOrder()}
        ></button>
      </div>
    </div>
  );
};

export default OrdersCard;
