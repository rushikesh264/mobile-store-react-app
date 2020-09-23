import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Shopcart from '../Shopcart.png'
import styled from 'styled-components'
import { ButtonContainer } from './Buttonstyle'
export default class Navbar extends Component {
  render() {
    return (
      <>
        <NavWrapper className="navbar navbar-expand-lg navbar-primary  px-sm-5" >
            
            <Link to="/" className="nav-link" >
                <span style={{fontSize:"30px",fontweight:"bolder"}}><img src={Shopcart} height="50"width="50" alt="Shopcart" className="navbar-brand"/> Mobileshop</span>
            </Link>
            
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                        <span className="mr-2">
                            <i className="fa fa-shopping-cart "/>
                        </span>
                        Cart
                </ButtonContainer>           
            </Link>
        </NavWrapper>
      </>
    );
  }
}

const NavWrapper = styled.nav`
    background-color:rgba(190,120,250,0.9);
    box-shadow:1px 1px 2px 1px black !important;
    .nav-link{
        color:white !important;
        font-weight:bold;
        font-size:1.2rem;
    }
`

