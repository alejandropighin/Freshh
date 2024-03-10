import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const activeStyle = 'underline underline-offset-4'


  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3 ">
        <li className="font-semibold text-lg ">
          <NavLink
            to="/"
           
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/all"
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/oters"
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Oters
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className='text-black/60'>alejandroPighin2016@gmail.com</li>
        <li>
          <NavLink
            to="/MyOrder"
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            MyOrder
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/MyAcount"
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            MyAcount
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/SingIn"
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            SingIn
          </NavLink>
        </li>
        carrito
      </ul>
    </nav>
  );
}

export default Navbar;