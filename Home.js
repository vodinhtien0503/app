import React from 'react';
import './App.css';
import Header1 from './components/Header1';
import HeaderSearch from './components/HeaderSearch';
import LogoCompany from './components/LogoCompany';
import Carousel from './components/Carousel';
import ProductContainer from './containers/ProductContainer';
import Footer from './components/Footer';
import ListCategories from './components/ListCategories';
class Home extends React.Component{

	render() {
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
         <ProductContainer/>
         </div>
         </div>
         <Footer/>
		</div>
		</div>
		);
	}
}
export default Home;