// En tu archivo Index.jsx
import React from "react";
import { createContext, useState } from "react";

export const ShopingCardContext = createContext();

export const ShopingCardProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    console.log('count: ', count)

  return (
    <ShopingCardContext.Provider value={{ count, setCount }}>
      {children}
    </ShopingCardContext.Provider>
  );
};
