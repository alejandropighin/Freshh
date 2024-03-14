import React from 'react'
import { useContext } from 'react';
import { ShopingCardContext } from '../../Context/Index';
import { FaPlus } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";

const Card = (data) => {
   
  const context = useContext(ShopingCardContext);


  //utilizamos una funcion para mostrar el slider & setear el producto
  //detail es data.data simplemente pasado como parametro
  const showProducts = (detail) => {
    context.openProductDetails();
    context.setProductToShow(detail);
  }

  const addProductToCar = (event, detail) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCarProducts([...context.carProducts, detail]);
    context.closeProductDetails();
    context.openIsCheckOutSideMenuOpen();
    };

  const renderIcon = (id) => {

    const isInCard = context.carProducts.filter(product => product.id === id).length > 0;

    if (isInCard) {
      return (
        <FcApproval className="text-black absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 m-2 rounded-full " />
      );
    }
    else
    { 
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 m-2 rounded-full p-1"
          onClick={(event) => addProductToCar(event, data.data)}
        >
          <FaPlus className=" " />
        </div>
      );
    }
  
  
  
  }  
  
  

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProducts(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5 ">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.image}
          alt="headphones"
        />

        {renderIcon(data.data.id)}
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