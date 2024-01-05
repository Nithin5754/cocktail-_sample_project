import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import logo from '../logo.svg'
import {About,Home} from '../pages/index'

const Navbar = () => {
  let navigate=useNavigate()
  return (
    <nav className='navbar'>
        <ul className='nav-center'> 
            <li className='logo'>nithin.com</li>
            <li>
                <ul  className='nav-links'>
                <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li >
                        <NavLink to={'/about'}>About</NavLink>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
