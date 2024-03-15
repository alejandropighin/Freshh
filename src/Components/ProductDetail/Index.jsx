import React from 'react'
import './styles.css'
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShopingCardContext } from "../../Context/Index";





const ProductDetail = () => {

const context = useContext(ShopingCardContext);

  
  
 

  return (
    <aside
      className={`${
        context.detailVisibility ? "flex" : "hidden"
      } product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black"
            onClick={context.closeProductDetails}
          />
        </div>
      </div>
      <figure className="px-6">
        <img
          src={context.productToShow.image}
          alt=""
          className="w-full h-full rounded-lg"
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl ">
          ${context.productToShow.price}
        </span>
        <span className="font-medium text-md ">
         {context.productToShow.title}
        </span>
        <span className="font-light text-sm ">
         {context.productToShow.description}
        </span>
      </p>
    </aside>
  );
}

export default ProductDetail