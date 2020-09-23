import React from 'react';
import Cont from '../assets/ContactUsImg.jpg'
function ContactUs() {
  return (
    <div className="container mx-auto  center mt-2">
        <div className="row align-items-center">
            <div className="col text-center ">
                <img class="center-block"  src={Cont}  alt="contactus" width="100%" height="100%"/>
            </div>
            <div className="col text-center mt-5 text-justify-center">
                <div className="row">
                    <h1>welcome to contact us page,,</h1>
                    <h2>Page is under development</h2>
                </div>
            </div>
        </div>

    </div>
  );
}

export default ContactUs;
