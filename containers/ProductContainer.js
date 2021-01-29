import React from 'react';
import {connect} from 'react-redux';  
import PropTypes from'prop-types'
import Products from './../components/Products'
import ProductItem from './../components/ProductItem'
import ProductSpecial from './../components/ProductSpecial'
import {actAddToCart} from './../actions/index'

import * as Message from './../constants/Message'

class ProductContainer extends React.Component{

constructor(props){
  super(props);
}
render(){
 var{products,productspecials}=this.props
 console.log(products)
  console.log(productspecials)

return(

            <Products
             showProductItem={this.showProductItem(products)}
             showProductSpecial={this.showProductSpecial(productspecials)}    
             />
              

  


  )
}
showProductSpecial=(product)=>{
  var result=null;
  var {onAddToCart}=this.props
  if(product.length>0){
    result= product.map((item,index)=>{
       
       return(
          <ProductSpecial 
       
             key={index}
             item={item}
             index={index}
             onAddToCart={onAddToCart}
           />
        )

    })
  }
return result;
}


showProductItem= (product)=>{
  var result=null;
  var {onAddToCart}=this.props
  if(product.length>0){
     result= product.map((item,index)=>{
       
       return(
          <ProductItem 
       
             key={index}
             item={item}
             index={index}
             onAddToCart={onAddToCart}
           />
        )

    })
  }


    return result
}

}

ProductContainer.propTypes={
  product: PropTypes.arrayOf(

  PropTypes.shape({
  id:PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img:  PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  new: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  discount:PropTypes.string.isRequired


}).isRequired,
)

}

const mapStateToProps=state=>{
return{
     products:state.products,
     productspecials:state.productspecials
  }
}

const mapDispatchToProps=(dispatch,props)=>{

  return{
    onAddToCart:(product)=>{
      dispatch(actAddToCart(product,1))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer);