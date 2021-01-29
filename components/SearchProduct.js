import React from 'react';
import './App.css';
import Header1 from './components/Header1';
import HeaderSearch from './components/HeaderSearch';
import LogoCompany from './components/LogoCompany';
import Carousel from './components/Carousel';
import Products from './components/Products';
import Footer from './components/Footer';
import ItemSearch from './components/ItemSearch';
import ListCategories from './components/ListCategories';
import ProductCategorys from './components/ProductCategorys'
class SearchProduct extends React.Component{
 constructor(props){
  super(props);
 }
 componentDidMount(){
  window.location.reload();
 }
	render() {
  console.log(this.props.match.params)
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
          <ItemSearch/>
         </div>
         </div>
         <Footer/>
		</div>
		</div>
		);
	}
}
export default SearchProduct;