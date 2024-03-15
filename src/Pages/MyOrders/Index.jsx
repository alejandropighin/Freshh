import React from 'react'
import { useContext } from "react";
import Layout from "../../Components/Layout/Index";
import  OrdersCard  from "../../Components/OrdersCard/Index";
import { ShopingCardContext } from "../../Context/Index";
import { Link } from "react-router-dom";


const MyOrders = () => {


 const context = useContext(ShopingCardContext);



  return (
    <Layout>
      my orders{" "}
      {context.order.map((order,Index) => {
        <Link key={Index} to={`/myorder/${order.id}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>;})}
    </Layout>
  );
}

export default MyOrders