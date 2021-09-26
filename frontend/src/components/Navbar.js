import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <div>
    <NavLink to="/" exact>
      Home
    </NavLink>
    <NavLink to="/games" exact>
      Games
    </NavLink>
    <NavLink to="/tables" exact>
      Tables
    </NavLink>
    <NavLink to="/users" exact>
      Users
    </NavLink>
  </div>
)

export default Navbar