import { useContext } from "react";
import { ShopingCardContext } from "../../Context/Index";
import OrderCard from "../../Components/OrderCard/Index";
import Layout from "../../Components/Layout/Index";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

function MyOrder() {
  const context = useContext(ShopingCardContext);

  // Obtener el índice de la URL
  const currentPath = window.location.pathname;
  let index = parseInt(
    currentPath.substring(currentPath.lastIndexOf("/") + 1),
    10
  );
  //cambiamos buscamos es ultimo producto cargado
  if (currentPath.substring(currentPath.lastIndexOf("/") + 1) === "last") {
    index = context.order ? context.order.length - 1 : 0;
  }

  // Obtener los productos del pedido en el índice especificado
  const orderProducts = context.order[index]
    ? context.order[index].products
    : [];

  return (
    <Layout>
      <div className="flex item-center justify-center relative w-80  mb-5">
        <Link to="/myorders" className="absolute left-0">
          <FiChevronLeft />
        </Link>
        <h1> my order</h1>
      </div>

      <div className="flex flex-col w-80  ">
        {orderProducts.length > 0 ? (
          orderProducts.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
            />
          ))
        ) : (
          <p>No hay productos en este pedido.</p>
        )}
      </div>
    </Layout>
  );
}

export default MyOrder;
