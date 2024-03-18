// En tu archivo Index.Indexjsx
import React from "react";
import { createContext, useState,useEffect } from "react";

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

  //get product
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())

      .then((data) => setItems(data));
  }, []);

  //definimos filter
  const [filterItems, setFilterItems] = useState(null);

  //get product by title
  const [searchByTile, setSearchByTile] = useState(null);

  //get product by category
  const [searchByCategory, setSearchByCategory] = useState(null);
  //console.log(filterItems);
  //console.log(searchByCategory);

  const filterItemsByTitle = (items, searchByTile) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTile.toLowerCase())
    );
  };

  const filterItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };


 const filterBy = (searchType, items, searchByTile, searchByCategory) => {
   if (searchType === "BY_TITLE") {
     return filterItemsByTitle(items, searchByTile);
   }
   if (searchType === "BY_CATEGORY") {
     return filterItemsByCategory(items, searchByCategory);
   }
   if (!searchType) {
     return items;
   }
   if (searchType === "BY_TITLE&&CATEGORY") {
     return filterItemsByCategory(
       filterItemsByTitle(items, searchByTile),
       searchByCategory
     );
   }
 };

 useEffect(() => {
   if (searchByTile && !searchByCategory) {
     setFilterItems(
       filterBy("BY_TITLE", items, searchByTile, searchByCategory)
     );
   } else if (!searchByTile && searchByCategory) {
     setFilterItems(
       filterBy("BY_CATEGORY", items, searchByTile, searchByCategory)
     );
   } else if (searchByTile && searchByCategory) {
     setFilterItems(
       filterBy("BY_TITLE&&CATEGORY", items, searchByTile, searchByCategory)
     );
   } else {
     setFilterItems(items);
   }
 }, [items, searchByTile, searchByCategory]);







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
        setOrder,
        items,
        setItems,
        searchByTile,
        setSearchByTile,
        filterItems,
        setFilterItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShopingCardContext.Provider>
  );
};
