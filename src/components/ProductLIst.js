import React, { Component } from 'react';
import Products from './Products';
import {ProductConsumer} from './Context'
export default class ProductLIst extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <ProductConsumer>
                             {Data=>Data.products.map((dd,index)=>{
                                     return <Products key={index} product={dd}></Products>
                             })}
                        </ProductConsumer>
                    </div>
                </div>
            </div>
        </React.Fragment>
     
    );
  }
}
