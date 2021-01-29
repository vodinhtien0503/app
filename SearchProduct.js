import React from 'react';
import './App.css';
import Header1 from './components/Header1';
import HeaderSearch from './components/HeaderSearch';
import LogoCompany from './components/LogoCompany';
import Carousel from './components/Carousel';
import Products from './components/Products';
import Footer from './components/Footer';
import ItemSearch from './components/ItemSearch';
import Fillter from './components/Fillter';
import ListCategories from './components/ListCategories';
import ProductCategorys from './components/ProductCategorys'
import {actAddToCart} from './actions/index'
import {connect} from 'react-redux'; 
import firebaseConnect from './DB/firebaseConnect';
import {BrowserRouter as Router,Route,NavLink,withRouter} from 'react-router-dom';
import firebase from 'firebase';


class SearchProduct extends React.Component{
 constructor(props){
  super(props);
  this.state={
    filterprice:'',
    filtercode:'',
    data:[]
  }
 }


 componentDidMount(){
                 firebase.database().ref(`Category/${this.props.match.params.id}/cate/${this.props.match.params.idcate}/cateItem/${this.props.match.params.idcateitem}`).on("value", snapshot => {
        let DB = [];
        snapshot.forEach(snap=>{
             DB.push(snap.val());
          })   
        this.setState({ data: DB });
      });
       console.log(firebaseConnect)
      }
    


Receive=(datafilter)=>{

  this.setState({
    filterprice:datafilter
  })
}

ReceiveCode=(datafilter)=>{

  this.setState({
    filtercode:datafilter
  })
}


	render() {
  console.log('data',this.state.data)
  console.log(this.state.filterprice)
  var{data}=this.state
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
         <ListCategories/>
          <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 pr-0 pl-0">
          <h4>{data.[1]}</h4>
          <Fillter parentCallback={this.Receive} parentCallbackCode={this.ReceiveCode}/>
          <ItemSearch
           FilterPrice={this.state.filterprice} 
            FilterCode={this.state.filtercode}
            onAddToCart={onAddToCart}
            Description={data[1]}
            />
          </div>
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
      dispatch(actAddToCart(product,quantity))
    }
  }
}

export default withRouter(connect(null,mapDispatchToProps)(SearchProduct));