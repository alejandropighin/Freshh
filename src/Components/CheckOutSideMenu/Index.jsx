import React from "react";
import "./styles.css";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ShopingCardContext } from "../../Context/Index";
import OrderCard from "../OrderCard/Index"
import { totalPrice } from "../../utils";

const CheckOutSideMenu = () => {
  const context = useContext(ShopingCardContext);

  const handleDelete = (id) => { 
    const filteredProducts = context.carProducts.filter(product => product.id != id)
    context.setCarProducts(filteredProducts);
  }

  const handleCheckOut = (id) => { 
    const orderToAdd = {
      date: "01.02.2023",
      products: context.carProducts,
      totalProducts: context.carProducts.length,
      totalPrice: totalPrice(context.carProducts),

    }

    context.setOrder([...context.order, orderToAdd]);
    context.setCarProducts([]);
  }

  


  return (
    <aside
      className={`${
        context.isCheckOutSideMenuOpen ? "flex" : "hidden"
      } checkoud-side-menu scrollable-cards flex-col fixed right-0  border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6 ">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black"
            onClick={context.closeIsCheckOutSideMenuOpen}
          />
        </div>
      </div>
      <div className=" flex-1 ">
        {context.carProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6  mb-6 ">
        <p className="flex  justify-between items-center mb-2 ">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(context.carProducts)}
          </span>
        </p>
        <Link to='/myorder/last'>
          <button
            onClick={() => handleCheckOut()}
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            Check Out
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckOutSideMenu;
