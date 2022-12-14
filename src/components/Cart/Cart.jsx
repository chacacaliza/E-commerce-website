import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart } from '../../redux/action'
import { Link } from 'react-router-dom';
import "./CartStyle.css"

const Cart = () => {

    const state = useSelector((state) => state.HandleCart);
    const dispatch = useDispatch();

    const handleDelete = (item) => {
        dispatch(deleteCart(item));
    }

    const cartItems = (cartItem) => {
        return (
            <div className="col" key={cartItem.id}>
                <div className="topCol">
                    <button onClick={() => handleDelete(cartItem)}>X</button>
                </div>
                <div className="middleCol">
                    <div className="left">
                        <img src={cartItem.image} alt={cartItem.title} />
                    </div>
                    <div className="right">
                        <h3>{cartItem.title}</h3>
                        <span>{cartItem.price}</span>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="col">
                <h2> Your Cart is Empty!</h2>
            </div>
        );
    }

    const buttonCheckout = () => {
        return (
            <div className="col">
                <Link to="/checkout" className='checkout'>Proceed to Checkout</Link>
            </div>
        );
    }

  return (
    <div className='cart'>
        <div className="container">
            <div className="row">
                {state.length === 0 && emptyCart()}
                {state.length !== 0 && state.map(cartItems)}
                {state.length !== 0 && buttonCheckout()}
            </div>
        </div>
    </div>
  )
}

export default Cart
