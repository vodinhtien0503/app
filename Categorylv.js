import React from 'react';
import './App.css';
import Header1 from './components/Header1';
import HeaderSearch from './components/HeaderSearch';
import LogoCompany from './components/LogoCompany';
import Carousel from './components/Carousel';
import Products from './components/Products';
import Footer from './components/Footer';
import ListCategories from './components/ListCategories';
import ProductCategorys from './components/ProductCategorys'
import {BrowserRouter as Router,Route,NavLink,withRouter} from 'react-router-dom';

class Categorylv extends React.Component{
 constructor(props){
  super(props);
 }



 
	render() {
  console.log(this.props.match.params.id)
    

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
         <ProductCategorys  cateid={this.props.match.params.id}/>
         </div>
         </div>
         <Footer/>
		</div>
		</div>
		);
	}
}
export default withRouter(Categorylv);