import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from './Context';
import {ButtonContainer} from './Buttonstyle';
import styled from 'styled-components';

export default class Modal extends Component {
  render() {
    return (
        <ProductConsumer>
            {(value)=>{
                const {closeModel}=value;
                const {img,title,price}=value.modelData;
                if(!value.modelOpen)
                {
                    return null;
                }
                else{
                    return(
                        <ModelContainer>
                            <div className="container">
                               <div className="row">
                                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center  p-5">
                                    <h5>Item added to cart</h5>
                                    <img src={img} className="img-fluid" alt="product"/>         
                                    <h5>{title}</h5>
                                    <h5 className="text-muted">price : Rs {price}</h5>
                                    <Link to='/'>
                                        <ButtonContainer back onClick={()=>closeModel()}>
                                            To Store
                                        </ButtonContainer>
                                    </Link>
                                    <Link to='/cart'>
                                        <ButtonContainer  cart onClick={()=>closeModel()}>
                                            To Cart
                                        </ButtonContainer>
                                    </Link>
                                </div>
                               </div>
                            </div>
                        </ModelContainer>
                    )
                }
            }}
        </ProductConsumer>
    );
  }
}

const ModelContainer=styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background-color:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
    #modal{
        background:white;
    }

`
