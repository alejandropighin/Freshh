import React from "react";
import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShopingCardContext } from "../../Context/Index";
import OrderCard from "../OrderCard/Index"

const CheckOutSideMenu = () => {
  const context = useContext(ShopingCardContext);

  console.log("product to show", context.productToShow);
  console.log("CART: " + context.carProducts);

  return (
    <aside
      className={`${
        context.isCheckOutSideMenuOpen ? "flex" : "hidden"
      } checkoud-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black"
            onClick={context.closeIsCheckOutSideMenuOpen}
          />
        </div>
      </div>
      <div className="px-6 mb-4 ">
        {context.carProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckOutSideMenu;
