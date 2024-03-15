import { useRoutes, BrowserRouter } from "react-router-dom";
import {ShopingCardProvider} from "../../Context/Index";
import Home from "../Home/Index";
import MyAcount from "../MyAcount/Index";
import MyOrder from "../MyOrder/Index";
import MyOrders from "../MyOrders/Index";
import NotFound from "../NotFound/Index";
import SingIn from "../SingIn/Index";
import "./App.css";
import Navbar from "../../Components/Navbar";
import CheckOutSideMenu from "../../Components/CheckOutSideMenu/Index";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/MyAcount", element: <MyAcount /> },

    { path: "/MyOrder", element: <MyOrder /> },
    { path: "/MyOrders", element: < MyOrders /> },
    { path: "/MyOrder/last", element: <MyOrder /> },
    { path: "/SingIn", element: <SingIn /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <ShopingCardProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckOutSideMenu/>
      </BrowserRouter>
    </ShopingCardProvider>
  );
};

export default App;
