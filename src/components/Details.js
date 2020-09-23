import React, { Component } from 'react';
import { ProductConsumer} from './Context'
import {Link} from  'react-router-dom';
import {ButtonContainer} from './Buttonstyle'
export default class Details extends Component {
  render() {
    return (
     <ProductConsumer>
      
       {(value)=>{

         const {id,company,img,info,price,title,inCart}=value.productdetail;
        return(
          <div className="container py-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
            </div>
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                 <img src={img} className="img-fluid" alt="product"/>
              </div> 
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>Model: {title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>Price : <span> <i className="fa fa-rupee"></i> </span>{price}</strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Description:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                        <ButtonContainer back>Back to Products</ButtonContainer>
                    </Link>
                    <ButtonContainer cart disabled={inCart?true:false}
                    onClick={()=>{value.addtocart(id);value.openModel(id);}}>
                      {inCart?"In Cart":"Add to Cart"}
                    </ButtonContainer>
                  </div>
              </div>            
            </div>
          </div>
        )
       }}
     </ProductConsumer>
    );
  }
}
