import React from 'react';
import {Link} from 'react-router-dom';
import {ExternalLink} from 'react-external-link';
function Footer() {
  return (
    <div className="container-fluid pt-lg-5 mt-2 p-sm-1 bg-dark text-white ">
      <div className="row">
        <div className="col-15 mx-auto  py-4 col-lg-2 text-left ">
            <div className="row mx-auto p-1 m-1 ">
                <Link to="/" style={{textDecoration:"none"}}>
                    <h2 className="font-weight-bold text-white" ><i className="fa fa-shopping-bag mr-2"/>Mobile<span className="text-warning">shop</span></h2> 
                </Link>
            </div>
            <div className="row mx-auto p-1 m-1">
                <p><i className="fa fa-code fa-2x mr-2"/>Developer - Roshan <small> 425001 , Jalgaon Maharashtra(India)</small></p>
                
            </div>
            <div className="row mx-auto p-1 m-1 ">
                <ExternalLink href="https://www.facebook.com/">
                    <i className="fa fa-facebook px-2 fa-lg text-white"/>
                </ExternalLink>
                <ExternalLink href="https://twitter.com/login?lang=en">
                    <i className="fa fa-twitter px-2 fa-lg text-white"/>
                </ExternalLink>
                <ExternalLink href="https://www.instagram.com/?hl=en">
                    <i className="fa fa-instagram px-2 fa-lg text-white"/> 
                </ExternalLink>
               
            </div>
               
        </div>
        <div className="col-15 mx-auto py-4 col-lg-2 ">
            <Link to="/about" style={{textDecoration:"none",color:"white"}}>
                <h6 className="fg-light" >AboutUs</h6>   
            </Link>
            <Link to="/contact" style={{textDecoration:"none",color:"white"}}>
                <h6 className="fg-light">ContactUs</h6>          
            </Link>
            <h6>  <i className="fa fa-copyright"/> 2020-2021 , MobileShop.in</h6>
         
        </div>
      </div>
    </div>
  );
}

export default Footer;
