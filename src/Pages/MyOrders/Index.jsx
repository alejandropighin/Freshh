import React, { useContext } from "react";
import Layout from "../../Components/Layout/Index";
import OrdersCard from "../../Components/OrdersCard/Index";
import { ShopingCardContext } from "../../Context/Index";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const context = useContext(ShopingCardContext);

  return (
    <Layout>
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          My Orders
        </h1>
      </div>

      <div className="flex flex-col justify-between gap-3">
        {context.order.map((order, index) => (
          <Link key={index} to={`/myorder/${index}`}>
            <OrdersCard
              key={index}
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
              className=""
            />
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default MyOrders;
