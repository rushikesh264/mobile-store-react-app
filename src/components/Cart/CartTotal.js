import React from 'react';
import {Link} from 'react-router-dom'
// import Paypal from '../Paypal';
export default function CartTotal({value,history}) {
    const {cartSubTotal,cartTotal,cartTax,clearCart}=value;
  return (
    <div className="container">
        <div className="row">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto text-right text-capitalize col-sm-8 ">
                <Link to='/'>
                    <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button"
                    onClick={()=>clearCart()}>
                        Clear Cart
                    </button>
                </Link>
                <h5>
                    <span className="text-title">
                        Sub-Total:
                    </span>
                    <strong> <i className="fa fa-rupee"></i> {cartSubTotal}</strong>
                </h5>
                <h5>
                    <span className="text-title">
                        Tax:
                    </span>
                    <strong> <i className="fa fa-rupee"></i> {cartTax}</strong>
                </h5>
                <h5>
                    <span className="text-title">
                        Total:
                    </span>
                    <strong> <i className="fa fa-rupee"></i> {cartTotal}</strong>
                </h5>
                {/* <Paypal total={cartTotal} clearCart={clearCart} history={history}/> */}
            </div>
        </div>
      
    </div>
  );
}

