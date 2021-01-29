import React from 'react';

class CartItem extends React.Component{
constructor(props){
  super(props)
  this.state={
    qty:this.props.item.quantity,
    pay:this.props.item.quantity*this.props.item.product.price,
    price:this.props.item.product.price
  }
}




onChange=(e)=>{
     var target=e.target;
        var name=target.name;
        var value =target.value;
        value=parseInt(value)
        var{pay,price}=this.state;
        pay=price*value
        if(value>=1){
        this.setState({
          [name]:value,
          pay:pay
         });
      }else{
        this.setState({
          [name]:''
        })
      }
  }
  decrease=(product)=>{
    var {qty,pay} =this.state
   var price=product.price
   console.log(price)
    qty=parseInt(qty)
    price=parseInt(price)
    var result=0
    if(qty>1){
    qty=qty-1
    result=price*qty
    this.setState({
        qty:qty,
        pay:result
    })
    var{onUpdateProductInCart}=this.props;
    onUpdateProductInCart(product,qty)

}
  }
  increase=(product)=>{
    var {qty,pay} =this.state;
    var price=product.price
       console.log(price)
     qty=parseInt(qty)

    price=parseInt(price)
    var result=0
    if(qty>0){
    qty=qty+1
    result=price*qty
    this.setState({
        qty:qty,
        pay:result
    })
}
var{onUpdateProductInCart}=this.props;
    onUpdateProductInCart(product,qty)
  }
  formatprice=(amount)=>{
    return (amount).toLocaleString('vi-VN'); 
}

onDelete=(product)=>{
  console.log(product)
  var{onDeleteProductInCart}=this.props;
  onDeleteProductInCart(product)
}


    render() {
      var{qty,pay}=this.state;
      console.log(qty)
      var{item}=this.props
        return (
             
               	<tr className="itemcart">
               	 <td>
                 <button 
                 type="button" 
                 class="btn btn-danger"
                 onClick={()=>{if(window.confirm('Xóa sản phẩm ?')){this.onDelete(item.product)};}}
                 ><span className="fa fa-trash"></span>Xóa</button></td>
               	 <td className="prd"> 
               	 <img className="img-table" src={item.product.img} alt=""></img>
               	 <div className="des">
               	  <p className="title">{item.product.title}</p>
                  <p><b>{item.product.code}</b>-<b>Thương hiệu:<span>ACB</span></b></p>
                  <p className="price">{this.formatprice(item.product.price)} VNĐ</p>
                  </div>

               	 </td>
               	 <td className="qty-table">
               	 	<button type="button" 
                  className="btn btn-default btn-decrease"
                  onClick={()=>this.decrease(item.product)}
                  ><i className="fa fa-minus"></i></button>
                <input className="update-qty-table" 
                type="text" 
                placeholder="1"
                name="qty"
                value={qty}
                onChange={this.onChange}
                ></input>
                <button type="button" 
                className="btn btn-default btn-increase"
                onClick={()=>this.increase(item.product)}
                ><i className="fa fa-plus"></i></button>
               	 </td>
               	 <td>{this.formatprice(pay)} VNĐ</td>
               	 <td><span>Còn hàng</span></td>

               	</tr>
             
        );
    }
}
export default CartItem;