import React, { Component } from 'react';

export default class CartColumns extends Component {
  render() {
    return (
    <div className="container-fluid text-center d-none d-lg-block my-3 p-2">
        <div className="row my-10">
          <div className="col-10 mx-auto col-lg-2">
            <strong className="text-uppercase ">Products</strong>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <strong className="text-uppercase">Name</strong>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <strong className="text-uppercase">Price</strong>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <strong className="text-uppercase">Qty</strong>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <strong className="text-uppercase">remove</strong>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <strong className="text-uppercase">Total</strong>
          </div>
      </div>
     </div>
      
    );
  }
}
