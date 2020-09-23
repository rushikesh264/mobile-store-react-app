import React from 'react';
import Abo from '../assets/AboutUsImg.jpg'
function Aboutus() {
  return (
   
     <div className="container mx-auto  center m-5 p-5">
        <div className="row align-items-center">
            <div className="col text-center ">
                <img class="center-block"  src={Abo} alt="aboutus" width="100%" height="100%"/>
            </div>
            <div className="col text-center mt-5 text-justify-center">
                <div className="row">
                    <h1>welcome to AboutUs page,,</h1>
                    <h2>Page is under development</h2>
                  
                </div>
            </div>
        </div>

    </div>
  );
}

export default Aboutus;
