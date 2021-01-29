import React from 'react';
import './App.css';
import Header1 from './components/Header1';
import HeaderSearch from './components/HeaderSearch';
import LogoCompany from './components/LogoCompany';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import ListCategories from './components/ListCategories';
import Home from './Home';
import Carts from './Carts';
import Productdetails from './Productdetails';
import Productdetails1 from './Productdetails1';
import Categorylv from './Categorylv';
import Categorylv1 from './Categorylv1';
import Register from './Register';
import SearchProduct from './SearchProduct';
import SearchResult from './SearchResult';

import InforPay from './InforPay';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import firebaseConnect from './DB/firebaseConnect';
import firebase from 'firebase';
class App1 extends React.Component{
 
constructor(props){
	super(props)
	this.state={
    data:[],
	}
}

    to_slug=(str)=>
{
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;
}


	componentDidMount(){
    firebase.database().ref("Category").on("value", snapshot => {
        let DB = [];
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'students-list' path
            DB.push(snap.val());
        });
        this.setState({ data: DB });
      });
       console.log(firebaseConnect)
	}

	render() {
		    console.log("data",this.state.data)

		var elem= this.state.data.map((category,index)=>{

	     return(
               <Route key={index} path={"/"+this.to_slug(category.categoryName)+"/:id"} exact component={Categorylv}></Route>
               
       
               

	     	);
		})
		
		 var elem1=this.state.data.map((category,index)=>{
		 	 if(category.cate!==undefined){
		 	 	return(
              category.cate.map((item,i)=>{
              	console.log(item.cateName)
                 return(
               <Route key={i} path={"/"+this.to_slug(item.cateName)+"/:id:idcate"} exact component={Categorylv1}></Route>

                  );
                })
              )
          }
               else{
                return '';
               }

		 })
		  var elem2=this.state.data.map((category,index)=>{
		 	 if(category.cate!==undefined){
		 	 	return(
              category.cate.map((item,i)=>{
              	console.log(item.cateName)
              	if(item.cateItem!==undefined){
                  
              		return(
                     item.cateItem.map((cateitem,k)=>{

                     	return(
                	    <Route path={`/${this.to_slug(cateitem.itemName)}/:id:idcate:idcateitem`} exact component={SearchProduct}/>
                        
                     		)
                     })

              			)
              	}
                else{
                	return '';
                } 
                })
              );
          }
               else{
                return '';
               }

		 })
		 console.log("data1",elem2)
		return (
		<Router>
	    <Route path="/" exact component={Home}/>
		<Route path="/cart" exact component={Carts}/>
		<Route path="/productdetails/:id:idcate:idcateitem:idproduct" exact component={Productdetails}/>
		{elem}
		{elem1}
		{elem2}
	    <Route path="/inforpay" exact component={InforPay}/>
      <Route path="/register" exact component={Register}/>
      <Route path="/search/:key" exact component={SearchResult}/>
      <Route path="/detail/:title" exact component={Productdetails1}/>



  






		</Router>
		);
	}
}
export default App1;