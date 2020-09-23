import React, { Component } from 'react';
import { ProductConsumer } from './Context';
import { Link } from 'react-router-dom';

import {ProductWrapper} from './ProductWrapper';
export default class Products extends Component {
  render() {
    const {id,title,img,price,inCart}=this.props.product
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
          <div className="card">
              <ProductConsumer>
                {(value)=>
                        <div className="img-container p-5" onClick={()=>{value.showDetails(id);}}>
                         <Link to="/details">
                             <img src={img} alt="prod" className="card-img-top" />
                         </Link>
                         <button 
                           className="cart-btn" 
                           disabled={inCart?true:false} 
                           onClick={()=>{value.addtocart(id);value.openModel(id);}}
                           >
                             {inCart ?
                               (<p className="text-capitalize mb-0" disabled>
                                  
                                   in cart
                               </p>
                               )
                               :
                               (<i className="fa fa-cart-plus"/>
                               )
                             }  
                         </button>
                     </div> 
                }

              </ProductConsumer>
             
              {/* footer card */}
              <div className="card-footer d-flex justify-content-between">
                <p className="align-self-center mb-0">
                    {title}
                </p>
                <h5 className="text-blue mb-0">
                    <span className="mr-1"> <i className="fa fa-rupee"></i> </span>
                    {price} 
                </h5>
              </div>
          </div>

      </ProductWrapper>
    );
  }
}

