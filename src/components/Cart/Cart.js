import React, { Component } from 'react';
//import {ProductWrapper}  from '../ProductWrapper';
import {ProductConsumer} from '../Context';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotal from './CartTotal';

export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {
          value=>{
            const {cart}=value;
            if(cart.length>0)
            {
              return(
                <React.Fragment>
                    <CartColumns />
                    <CartList value={value}/>
                    <CartTotal value={value} history={this.props.history}/>
                </React.Fragment>
              )
            }
            else{
              return <EmptyCart />
            }
          }
        }
      </ProductConsumer>     
    );
  }
}
