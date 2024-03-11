import React from 'react'
import { useContext } from 'react';
import { ShopingCardContext } from '../../Context/Index';
import { FaPlus } from "react-icons/fa";

const Card = (data) => {
   
  const context = useContext(ShopingCardContext);


  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5 ">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.image}
          alt="headphones"
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-amber-100 w-6 h-6 m-2 rounded-full p-1"
          onClick={() => context.setCount(context.count + 1)}
        >
          <FaPlus className="text-lg " />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light truncate mr-2">
          {data.data.title}
        </span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  );
}

export default Card;