import React from 'react';
import {ButtonContainer} from '../Buttonstyle';
import {Link} from 'react-router-dom';
import ImgEmpty from '../../assets/EmptyCartImg.png';
export default function EmptyCart() {
  return (
      <div className="my-50">
            <div className="container my-5 py-5  ">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        <img src={ImgEmpty} width="50%" height="70%"/>
                    </div>
                    <div className="col-10 mx-auto text-center text-title ">
                        <Link to="/">
                             <ButtonContainer style={{background:"rgba(250,170,0,0.8)"}}>Continue Shopping</ButtonContainer>
                        </Link>
                    </div>
                </div>
      
            </div>
      </div>
    
  );
}
 