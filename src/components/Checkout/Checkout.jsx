import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import "./CheckoutStyle.css"

function myfun() {
  alert('Pembelian Product Berhasil')
}

const Checkout = () => {

  const state = useSelector((state) => state.HandleCart);

  var total = 0;
  const itemList = (item) => {

    total = +total + +item.price;

    return (
      <div className="totalContent">
        <p>{item.title}</p>
        <span>Rp {item.price}</span>
      </div>
    )
  }

  return (
    <>
      {/* <h1 className="mb-3">Checkout Page</h1> */}
      <div className='checkoutItems container'>
        <div className="row">
          <div className="col">
            <div className="formGroup">
              <label htmlFor="name">First Name</label>
              <input type="text" id='name' />
            </div>
            <div className="formGroup">
              <label htmlFor="name">Last Name</label>
              <input type="text" id='name' />
            </div>
            <div className="formGroup">
              <label htmlFor="address">Address</label>
              <input type="text" id='address' />
            </div>
            <div className="formGroup">
              <label htmlFor="phone">Phone</label>
              <input type="text" id='phone' />
            </div>

          
            <div className="my-3">
              <div className="form-check">
                <input
                  id="cod"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required=""
                />
                <label className="form-check-label" htmlFor="cod">
                  COD
                </label>
              </div>
              <div className="form-check">
                <input
                  id="cod"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required=""
                />
                <label className="form-check-label" htmlFor="ovo">
                  Ovo
                </label>
              </div>
              <div className="form-check">
                <input
                  id="ovo"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required=""
                />
                <label className="form-check-label" htmlFor="Dana">
                  Dana
                </label>
                <div className="form-check"></div>
              </div>
            </div>

            
          </div>
          <div className="col">
            <div className="totalCart">
              <h2>Your Cart <span>{state.length}</span></h2>
              <div className="totalInfo">
                {state.map(itemList)}
              </div>
              <div className="total">
                <p>Total </p> <span> Rp {total}</span>
              </div> <br />

              <Link to={`/`} className='contained-btn'>
              <button className='contained' onClick={myfun}>
                Continue to checkout
              </button> </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout


