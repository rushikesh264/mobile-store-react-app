import React from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar';
import ProductLIst from './components/ProductLIst';
import Notfound from './components/Notfound';
import {Route,Switch} from 'react-router-dom';
import Details from './components/Details';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Aboutus from './components/Aboutus';
import ContactUs from './components/ContactUs';
function App() {
  return (
   <React.Fragment>
     <Navbar />
     <Switch>
        <Route exact path="/" component={ProductLIst}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/about" component={Aboutus}/>
        <Route path="/contact" component={ContactUs}/>
        <Route component={Notfound}/>
     </Switch>
     <Footer />
     <Modal />


   </React.Fragment>
   
  );
}

export default App;
