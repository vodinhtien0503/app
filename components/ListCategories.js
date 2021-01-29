
import React from 'react';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import Callapi from './../ultils/apiCaller';
import SearchProduct from './../SearchProduct';
import firebaseConnect from './../DB/firebaseConnect';
import firebase from 'firebase';
class ListCategories extends React.Component{
   constructor(props){
   	super(props);
   	this.state={
   		data:[],
   	
   }
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
to_id(id){
  return id+1;
}
	render() {
     
		var elem=this.state.data.map((category,index)=>{
         return(
               <div className="ListCate" key={index}>
			  <div className="header-list">
			   <NavLink to={"/"+this.to_slug(category.categoryName)+"/"+this.to_id(index)}>{category.categoryName}</NavLink>
			   </div>
              
         <div>
              
               {
      
                category.cate!=undefined?
                 category.cate.map((item,i)=>{
               return(
                <div className="item-cate" key={i}>
                <NavLink className="link-cate"
                 to={"/"+this.to_slug(item.cateName)+"/"+this.to_id(index)+i}
                 >
                 {item.cateName}</NavLink>
                  <div className="content-link">
                 {
                   item.cateItem!=undefined?
                  item.cateItem.map((link,k)=>{
                 return(
                  <NavLink key={k} to={"/"+this.to_slug(link.itemName)+"/"+this.to_id(index)+i+k}
                > {link.itemName}
                </NavLink>
                );
                })
                :""
                }
              
                </div>
 
                </div>
                );
              })
            :""
          }  

          

      
         </div>

			 </div>  
         	);
		})
		return (
			 <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 pl-0 List">
			 {elem}
			 </div>      	
       
		);
	}
}
export default ListCategories;