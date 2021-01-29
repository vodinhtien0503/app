import React from 'react';
import * as Discount from './../constants/Discount'
 import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';

class CartResult extends React.Component{
constructor(props){
  super(props)
  this.state={
   discount:'',
   city:1
}
}
formatprice=(amount)=>{
    return (amount).toLocaleString('vi-VN'); 
}

onChange=(e)=>{
  var target=e.target
  var name=target.name
  var value=target.value
  this.setState({
    [name]:value
  })
}


    render() {
       var{cart}= this.props
      var{discount,city}=this.state
      console.log(city)
        return (
             
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 pt-0 info-rev">
                 <p >THÔNG TIN NHẬN HÀNG</p>
                 <p><select className="city" name="city" onChange={this.onChange} value={city}>
                 <option value={1}>Hồ Chí Minh</option>
                 <option value={2}>Hà Nội</option>
                 </select></p> 
                 <p className="time-tranmiss padl-1">{parseInt(city)===1?"Giao hàng từ 2-3 ngày":"Giao hàng từ 4-6 ngày"}</p> 
                 <p >THÔNG TIN ĐẶT HÀNG</p>
                 <p><b>Tạm tính:</b><b className="fr">{this.formatprice(this.showTotal(cart))} VNĐ</b></p>
                 <p><b >Mã Giảm Giá:</b><input name='discount' value={discount} type="text"onChange={this.onChange} className="fr code-decrease "></input></p>
                 <p><b className="price">Tổng tiền:</b><b className="fr price ">{this.formatprice(this.showTotalAmount(cart))} VNĐ</b></p>
                 <p ><NavLink to={"/inforpay"}><button type="button" 
                 className="btn btn-danger btn-buy-cart
                  "><span className="fa fa-cart"></span>TIẾN HÀNH THANH TOÁN</button></NavLink></p>
               </div>  
        );
    }


    showTotal=(cart)=>{
      var total=0;
     if(cart.length>0){
      for(var i=0;i<cart.length;i++){
        total+=cart[i].product.price*cart[i].quantity
      }
     }
      return total
    }
    showTotalAmount=(cart)=>{
      var total=0;
      var{discount}=this.state
     if(cart.length>0){
      for(var i=0;i<cart.length;i++){
        switch(cart[i].product.discount){
          case Discount.discount_10:
          if(discount===Discount.discount_10){
          total+=cart[i].product.price*cart[i].quantity*90/100
           }
           else{
            total+=cart[i].product.price*cart[i].quantity
           }
          break
          case Discount.discount_20:
          if(discount===Discount.discount_20){
          total+=cart[i].product.price*cart[i].quantity*80/100
           }
           else{
            total+=cart[i].product.price*cart[i].quantity
           }          break
          case '': total+=cart[i].product.price*cart[i].quantity
          break

        }
     }
   }
      return total
    }
}
export default CartResult;