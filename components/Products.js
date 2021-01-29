import React from 'react';
import ProductSpecial from './ProductSpecial'; 
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';


class Products extends React.Component{

constructor(props){
  super(props);
}
render(){
    var product= this.props.showProductItem;
    var productspecial= this.props.showProductSpecial;
 
return(
          <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 p-0">
          <div className="product ">
          <h4>SẢN PHẨM BÁN CHẠY</h4>
           <div className="row">
    
            {product}
          </div>
          </div>

          <div className="product-special ">
          <h4>SẢN PHẨM NỔI BẬT</h4>
           <div className="row">
            {productspecial}  
            </div>    
          </div> 
          </div>
      


  )
}

    

}

export default Products;