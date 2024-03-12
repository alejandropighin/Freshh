// En tu archivo Index.Indexjsx
import React from "react";
import { createContext, useState } from "react";

export const ShopingCardContext = createContext();

export const ShopingCardProvider = ({ children }) => {

  //increment cuantity 
  const [count, setCount] = useState(0)
  
  //products detail open/close
  const [detailVisibility, setDetailVisibility] = useState(false);
  const openProductDetails = ()=> setDetailVisibility(true);
  const closeProductDetails = () => setDetailVisibility(false);


  //product detail . show product
  const [productToShow, setProductToShow] = useState({});
  


  return (
    <ShopingCardContext.Provider
      value={{
        count,
        setCount,
        openProductDetails,
        closeProductDetails,
        detailVisibility,
        productToShow,
        setProductToShow
      }}
    >
      {children}
    </ShopingCardContext.Provider>
  );
};
