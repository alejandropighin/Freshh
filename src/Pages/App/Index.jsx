import { useRoutes,BrowserRouter } from "react-router-dom";

import Home from "../Home/Index";
import MyAcount from "../MyAcount/Index";
import MyOrder from "../MyOrder/Index";
import NotFound from "../NotFound/Index";
import SingIn from "../SingIn/Index";
import "./App.css";
import Navbar from "../../Components/Navbar";


const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/MyAcount", element: <MyAcount /> },
    { path: "/MyOrder", element: <MyOrder /> },
    { path: "/SingIn", element: <SingIn /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
}


const App = ()=> {

  



  return (
    <BrowserRouter>
      
      <AppRoutes />
      <Navbar />
      
    </BrowserRouter>
  );
}

export default App;
