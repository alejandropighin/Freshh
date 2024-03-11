import { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Index";
import Card from "../../Components/Card/Index";
import ProductDetail from "../../Components/ProductDetail/Index";


function Home() {

 const [items, setItems] = useState(null);

 useEffect(() => {
   
     fetch("https://fakestoreapi.com/products")
       .then((response) => response.json())

       .then((data) => setItems(data));
       
     
   
 }, [])
    
console.log(items);

    return (
      <Layout>
        home
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg ">
          {items?.map((item) => {
            return <Card key={item.id} data={item} />;
          })}
        </div>
        <ProductDetail />
      </Layout>
    );
}

export default Home;
