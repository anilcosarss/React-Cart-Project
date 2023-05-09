import React, { useContext, useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
import { CartContext } from '../Context';

function Cart({}) {
  const [total,setTotal] = useState();

  const {cart,setCart} = useContext(CartContext)

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price),0));
  }, [cart]);



  return (
    <div>
      <span style={{fontSize:30}}>My Cart</span>
      <br />
      <span style={{fontSize:30}}>Total: {total}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct
          prod={prod}
          key={prod.id}
          cart={cart}
          setCart={setCart}/>
        ))

        }</div>
    </div>
  )
}

export default Cart;