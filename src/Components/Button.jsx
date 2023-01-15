import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({btn, path}) => {
  return (
    <Link to={path}><button className='primary-btn'>
        {btn}
    </button> </Link>
  )
}

export default Button