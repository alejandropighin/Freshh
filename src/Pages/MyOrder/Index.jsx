import { useContext } from "react";
import { ShopingCardContext } from "../../Context/Index";
import OrderCard from "../../Components/OrderCard/Index";
import Layout from "../../Components/Layout/Index";

function MyOrder() {
  const context = useContext(ShopingCardContext);
  console.log(context.order);

  const lastOrder = context.order[context.order.length - 1];
  const lastOrderProducts = lastOrder ? lastOrder.products : [];

  const orderProducts = context.order?.products; // Assuming you only have one order

  return (
    <Layout>
      my order
      <div className="flex flex-col w-80  ">
        {lastOrderProducts ? (
          lastOrderProducts.map(
            (
              product 
            ) => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
              />
            )
          )
        ) : (
          <p>No hay productos en este pedido.</p>
        )}
      </div>
    </Layout>
  );
}

export default MyOrder;
