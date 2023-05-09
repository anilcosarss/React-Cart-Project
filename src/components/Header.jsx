import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./styles.css"
import { CartContext } from '../Context'

function Header() {
  const {cart,setCart} = useContext(CartContext)
  return (
    <div>
      <span className='header'>React Cart Project</span>
      <ul className="nav">
        <li>
          <Link to="/"> Home Page</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header