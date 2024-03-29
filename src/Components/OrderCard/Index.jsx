import React from 'react'
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShopingCardContext } from "../../Context/Index";


const OrderCard = props => {

     const context = useContext(ShopingCardContext);

    const { id,title, imageUrl, price, handleDelete } = props;

  let renderXmarkIcon 
  if (handleDelete) {
    renderXmarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className="h-6 w-6 text-black" />
  }



  


  return (
    <div className="flex justify-between items-center ">
      <div className="flex items-center gap-2 px-6 mb-3">
        <figure className="w-20 h-20 ">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light ">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium ">{price}</p>
        {renderXmarkIcon}
      </div>
      
    </div>
  );
}

export default OrderCard;