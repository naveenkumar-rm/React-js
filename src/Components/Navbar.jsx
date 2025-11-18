import React from 'react'
import { NavLink } from 'react-router-dom'   // ← FIX HERE

const Navbar = () => {
  return (
    <div>
      <NavLink
        to="/game"
        style={({ isActive }) => ({
          color: isActive ? 'blue' : 'red'
        })}
      >
        Stonepaper
      </NavLink>

       <NavLink
        to="/Electricitybillcalculator"
        style={({ isActive }) => ({
          color: isActive ? 'blue' : 'red'
        })}
      >
        Electricitybillcalculator
      </NavLink>

       <NavLink
        to="/Salarytaxcalculator"
        style={({ isActive }) => ({
          color: isActive ? 'blue' : 'red'
        })}
      >
        Salarytaxcalculator
      </NavLink>
       <NavLink
        to="/Librarymanagement"
        style={({ isActive }) => ({
          color: isActive ? 'blue' : 'red'
        })}
      >
        Librarymanagement
      </NavLink>
    </div>
  )
}

export default Navbar
