import React from 'react';
import './App.css';
import Header1 from './components/Header1';
import HeaderSearch from './components/HeaderSearch';
import LogoCompany from './components/LogoCompany';
import Carousel from './components/Carousel';
import Products from './components/Products';
import Footer from './components/Footer';
import FormRegister from './components/FormRegister';
import ListCategories from './components/ListCategories';
class Register extends React.Component{

  render() {
    return (
    <div className="body">
           <Header1/> 
          <HeaderSearch/>
          <div className="main">
         <LogoCompany/>
         <div className="container-sm">
          <FormRegister/> 
         </div>
         <Footer/>
    </div>
    </div>
    );
  }
}
export default Register;