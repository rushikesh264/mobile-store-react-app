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
function App() {
  return (
   <React.Fragment>
     <Navbar />
     <Switch>
        <Route exact path="/" component={ProductLIst}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Notfound}/>
     </Switch>
     <Footer />
     <Modal />


   </React.Fragment>
   
  );
}

export default App;
