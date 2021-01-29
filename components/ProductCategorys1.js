import React from 'react';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import firebaseConnect from './../DB/firebaseConnect';
import firebase from 'firebase' ;


class ProductCategorys1 extends React.Component{

constructor(props){
  super(props);
  this.state={
    cate:[]
  }
}
 componentDidMount(){
        firebase.database().ref(`/Category/${this.props.id}/cate/${this.props.cateid}/cateItem/`).on("value", snapshot => {
        let DB = [];
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'students-list' path
            DB.push(snap.val());
        });
        this.setState({ cate: DB });
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
formatprice=(amount)=>{
    return (amount).toLocaleString('vi-VN'); 
}
onAddToCart=(product)=>{
  this.props.onAddToCart(product)
}

render(){
    var {products}= this.props;
    var {cate}=this.state;
    console.log("cate",cate)
 
return(
          <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 p-0">
          {this.showproducts(cate)}
          </div>
      


  )
}
showproducts(products){
    var result=null;
    if(products.length>0){
       result=products.map((product,index)=>{
        return(
          <div className="product ">
          <NavLink to={"/"+this.to_slug(product.itemName)+"/"+this.props.id+this.props.cateid+this.to_id(index)}><h4>{product.itemName}</h4></NavLink>
           <div className="row">
         { 
        product.product!=undefined?
        product.product.map((item,k)=>{
         return (<div className="product-item" key={k}>

            {item.new!=""?<p className="text-new">{item.new}</p>:""}
            {item.new!=""?<div className="new"></div>:""}
            <div className="img-product">
            <img className="img-item" src={item.img} alt=""></img>
            <div className="overlay">
            <p className="code">{item.code}</p>
            </div>
            </div>
            <NavLink to={"/productdetails/"+this.props.id+this.props.cateid+this.to_id(index)+k}><p className="title">{item.title}</p></NavLink>
            <p className="price">Giá: {this.formatprice(parseInt(item.price))} VNĐ</p>
            <button type="button"
             className="btn-buy"
             onClick={()=>this.onAddToCart(item)}
            >
            ĐẶT MUA</button>
           </div>
           );

       })
        :""
          }
        </div>
          </div>
          );
        })
      }

     return result;
    
}
}

export default ProductCategorys1;