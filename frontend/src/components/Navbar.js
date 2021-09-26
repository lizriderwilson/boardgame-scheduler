import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <div className="font-bold text-yellow-500">
    <NavLink to="/" exact className="mx-4">
      Home
    </NavLink>
    <NavLink to="/games" exact className="mx-4">
      Games
    </NavLink>
    <NavLink to="/tables" exact className="mx-4">
      Tables
    </NavLink>
    <NavLink to="/users" exact className="mx-4">
      Users
    </NavLink>
  </div>
)

export default Navbar