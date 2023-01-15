import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => {
    setIsOpen(!isOpen)
    // console.log(isOpen);
  }

  return (
    <header>
      <h1>Climate call</h1>

      <nav
        className= {
          isOpen ? 'menu' : null
        }
      >
        <NavLink className='nav-link' to='/'>Home</NavLink>
        <NavLink className='nav-link' to='/volunteer'>Volunteer</NavLink>
        <NavLink className='nav-link' to='/team'>Our Team</NavLink>
        <NavLink className='nav-link' to='/about'>About Us</NavLink>
        <Button btn={'Sign Up'} path='/join'/>
      </nav>

      <i className={
        isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
      } onClick={openMenu}></i>

    </header>
  )
}

export default Header