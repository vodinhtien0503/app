import React from 'react';
import './App.css';
import Header1 from './components/Header1';
import HeaderSearch from './components/HeaderSearch';
import LogoCompany from './components/LogoCompany';
import Footer from './components/Footer';
import CartContainer from './containers/CartContainer';
class Carts extends React.Component{
  
    render() {
        return (
        <div className="body">
           <Header1/> 
          <HeaderSearch/>
          <div className="main">
         <LogoCompany/>
        <CartContainer/>
         <Footer/>
        </div>
        </div>
        );
    }
}
export default Carts;