import React from 'react';
import './App.css';
import {connect} from 'react-redux';  
import Header1 from './components/Header1';
import HeaderSearch from './components/HeaderSearch';
import LogoCompany from './components/LogoCompany';
import Carousel from './components/Carousel';
import Products from './components/Products';
import Footer from './components/Footer';
import Details1 from './components/Details1';
import ListCategories from './components/ListCategories';
import {actAddToCart} from './actions/index'
import {BrowserRouter as Router,Route,NavLink,withRouter} from 'react-router-dom';

class Productdetails1 extends React.Component{

    render() {
        var {onAddToCart}=this.props
        return (
        <div className="body">
           <Header1/> 
          <HeaderSearch/>
          <div className="main">
         <LogoCompany/>
        <Details1
         title={this.props.match.params.title} 
         onAddToCart={onAddToCart}

        />
         <Footer/>
        </div>
        </div>
        );
    }
}

const mapDispatchToProps=(dispatch,props)=>{

  return{
    onAddToCart:(product,quantity)=>{
      dispatch(actAddToCart(product,quantity))
    }
  }
}

export default withRouter(connect(null,mapDispatchToProps)(Productdetails1));