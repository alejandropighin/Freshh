import React from "react";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShopingCardContext } from "../../Context/Index";

const OrdersCard = (props) => {
  const context = useContext(ShopingCardContext);

  const { totalPrice, totalProducts} = props;


  

  return (
    <div className="flex justify-between items-center border border-black">
      <p>
        <span>01.02.2023</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
};

export default OrdersCard;