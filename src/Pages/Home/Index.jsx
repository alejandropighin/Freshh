import React, { useContext } from "react";
import Layout from "../../Components/Layout/Index";
import Card from "../../Components/Card/Index";
import ProductDetail from "../../Components/ProductDetail/Index";
import { ShopingCardContext } from "../../Context/Index";

function Home() {
  const context = useContext(ShopingCardContext);

  const renderView = () => {
  //  console.log(context.filterItems);
    
      if (context.filterItems && context.filterItems.length > 0) {
        return context.filterItems.map((item) => (
          <Card key={item.id} data={item} />
        ));
      } else {
        return <div>No hay coincidencias</div>;
      }
    
  };


  return (
    <Layout>
      <div className="flex items-center justify-center mb-2">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Productos Exclusivos
        </h1>
      </div>
      <input
        type="text"
        placeholder="Buscar productos"
        className="border border-black rounded-md px-4 py-2 w-full max-w-md mx-auto focus:outline-none focus:border-y-lime-600 mb-6"
        onChange={(event) => context.setSearchByTile(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg ">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
