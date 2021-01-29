import React from 'react';
import './App.css';
import Header1 from './components/Header1';
import HeaderSearch from './components/HeaderSearch';
import LogoCompany from './components/LogoCompany';
import Carousel from './components/Carousel';
import SearchItem from './components/SearchItem';
import Footer from './components/Footer';
import ListCategories from './components/ListCategories';
import {actAddToCart} from './actions/index';
import {connect} from 'react-redux';
import { BrowserRouter as  Route,NavLink,withRouter} from 'react-router-dom';
class SearchResult extends React.Component{


	render() {
    console.log(this.props.match.params.key)
    var {onAddToCart}=this.props
		return (
		<div className="body">
           <Header1/> 
          <HeaderSearch/>
          <div className="main">
         <LogoCompany/>
         <Carousel/>
         <div className="container-sm">
         <div className="row">
         <SearchItem onAddToCart={onAddToCart} Key={this.props.match.params.key} />
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
export default withRouter(connect(null,mapDispatchToProps)(SearchResult));