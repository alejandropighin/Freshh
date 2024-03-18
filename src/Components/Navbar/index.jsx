import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShopingCardContext } from '../../Context/Index'
import { FaOpencart } from "react-icons/fa";

const Navbar = () => {

  
  const context = useContext(ShopingCardContext);
  const activeStyle = 'underline underline-offset-4'
  

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3 ">
        <li className="font-semibold text-lg ">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/all"
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothing"
            onClick={() => context.setSearchByCategory("clothing")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            men's clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jewelery"
            onClick={() => context.setSearchByCategory("jewelery")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory("electronics")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            electronics
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/oters"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Oters
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">alejandroPighin2016@gmail.com</li>
        <li>
          <NavLink
            to="/MyOrders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            MyOrders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/MyAcount"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            MyAcount
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/SingIn"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            SingIn
          </NavLink>
        </li>
        <li className="flex gap-2">
          <FaOpencart className="text-lg" />
          <div>{context.carProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;