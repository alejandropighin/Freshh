// En tu archivo Index.Indexjsx
import React from "react";
import { createContext, useState } from "react";

export const ShopingCardContext = createContext();

export const ShopingCardProvider = ({ children }) => {
  //increment cuantity
  const [count, setCount] = useState(0);

  //products detail open/close
  const [detailVisibility, setDetailVisibility] = useState(false);
  const openProductDetails = () => setDetailVisibility(true);
  const closeProductDetails = () => setDetailVisibility(false);

  //CheckOut side menu open/close
  const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false);
  const openIsCheckOutSideMenuOpen = () => setIsCheckOutSideMenuOpen(true);
  const closeIsCheckOutSideMenuOpen = () => setIsCheckOutSideMenuOpen(false);

  //product detail . show product
  const [productToShow, setProductToShow] = useState({});

  //Shopping car . Add product to car
  const [carProducts, setCarProducts] = useState([]);

  //Shopping Order . Add order 
  const [order, setOrder] = useState([]);

  return (
    <ShopingCardContext.Provider
      value={{
        count,
        setCount,
        openProductDetails,
        closeProductDetails,
        detailVisibility,
        productToShow,
        setProductToShow,
        carProducts,
        setCarProducts,
        isCheckOutSideMenuOpen,
        setIsCheckOutSideMenuOpen,
        openIsCheckOutSideMenuOpen,
        closeIsCheckOutSideMenuOpen,
        order,
        setOrder

      }}
    >
      {children}
    </ShopingCardContext.Provider>
  );
};
