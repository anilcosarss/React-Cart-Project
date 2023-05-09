import React, { useContext } from 'react';
import "./styles.css";
import { CartContext } from '../Context';


function SingleProduct({ prod}) {

    const {cart,setCart} = useContext(CartContext)

    return (
        <div className='products'>
            <div className="product">
                <img src={prod.image} alt={prod.name} />
                <div className="productDesc">
                    <span style={{ fontWeight: 700 }}>{prod.name}</span>
                    <span>₹ {prod.price.substring(0, 3)}</span>
                </div>
                {cart.includes(prod) ? (

                    <button
                        className="add"
                        onClick={() => {
                            setCart(cart.filter((c) => c.id !== prod.id));

                        }}>Remove from Cart
                    </button>
                ) :
                    <button
                        className="add"
                        onClick={() => {
                            setCart([...cart, prod]);
                        }}>Add To Cart
                    </button>
                }


            </div>
        </div>
    )
}

export default SingleProduct