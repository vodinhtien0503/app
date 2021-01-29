import React from 'react';
import './App.css';
import Header1 from './components/Header1';
import {connect} from 'react-redux';  
import HeaderSearch from './components/HeaderSearch';
import LogoCompany from './components/LogoCompany';
import Carousel from './components/Carousel';
import Products from './components/Products';
import Footer from './components/Footer';
import ListCategories from './components/ListCategories';
import ProductCategorys1 from './components/ProductCategorys1'
import {actAddToCart} from './actions/index'
import {BrowserRouter as Router,Route,NavLink,withRouter} from 'react-router-dom';

class Categorylv1 extends React.Component{
 constructor(props){
  super(props);
 }



 
	render() {
  console.log(this.props.match.params.id)
    console.log(this.props.match.params.idcate)
       var{onAddToCart}=this.props
		return (
		<div className="body">
           <Header1/> 
          <HeaderSearch/>
          <div className="main">
         <LogoCompany/>
         <Carousel/>
         <div className="container-sm">
         <div className="row">
         <ListCategories/>
         <ProductCategorys1 
         id={this.props.match.params.id}
          cateid={this.props.match.params.idcate}
          onAddToCart={onAddToCart}
         />
         </div>
         </div>
         <Footer/>
		</div>
		</div>
		);
	}
}

const mapDispatchToProps=(dispatch,props)=>{

  return{
    onAddToCart:(product,quantity)=>{
      dispatch(actAddToCart(product,1))
    }
  }
}

export default withRouter(connect(null,mapDispatchToProps)(Categorylv1));