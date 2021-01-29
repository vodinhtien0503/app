import React from 'react';
import {connect} from 'react-redux';
 import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';

class ProductSpecial extends React.Component{

constructor(props){
  super(props);
  this.state={
    productItem:[]
  }
}


onCart=(e)=>{
     window.$(`#messspecial${this.props.index}`).modal('hide')

      
  }

formatprice=(amount)=>{
    return (amount).toLocaleString('vi-VN'); 

}

onClose=(e)=>{
 window.$(`#messspecial${this.props.index}`).modal('hide')


}
onAddToCart=(product)=>{
          this.props.onAddToCart(product)
          this.setState({
            productItem:product
          })
        window.$(`#messspecial${this.props.index}`).modal('show')


  }

render(){
 var {item}=this.props;

   console.log(this.state.productItem)   
return(   
           <div key={this.props.index} >
            <div className="product-item">
            {item.new!=""?<p className="text-new">{item.new}</p>:""}
            {item.new!=""?<div className="new"></div>:""}
            <div className="img-product">
            <img className="img-item" src={item.img} alt=""></img>
            <div className="overlay">
            <p className="code">{item.code}</p>
            </div>
            </div>
            <NavLink to={`/detail/${item.title}`}><p className="title">{item.title}</p></NavLink>
            <p className="price">Giá: {this.formatprice(item.price)} VNĐ</p>
            <button
            type="button" 
            className="btn-buy"
            onClick={()=>this.onAddToCart(item)}
            >ĐĂT MUA</button>
             <div className="messaddtocart" id={`messspecial${this.props.index}`}  aria-hidden="true" >   
            <div className="content">
                  
                        <span type="button" onClick={this.onClose} className="close">&times;</span>
                      
                      
                        <img className="img-mess" src={this.state.productItem.img} alt=""></img>
                        
                        <p >Sản phẩm : <span className="title">{this.state.productItem.title}</span> đã được thêm vào giỏ hàng</p>

                          <NavLink to={"/cart"}><button type="button" onClick={()=>this.onCart()}
                         className="btn btn-danger btn-oncart"><span className="fas fa-shopping-cart">
                           
                         </span> Vào giỏ hàng</button></NavLink>
                         <button type="button" onClick={this.onClose}
                         className="btn btn-primary btn-continue"><span className="fas fa-cart-plus">
                         </span> Tiếp tục mua </button>                         
                         
                    </div>        
         </div>
           </div>
          
          </div>
        


  )
}

}
export default ProductSpecial;