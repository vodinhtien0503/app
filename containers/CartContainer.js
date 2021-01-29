import React from 'react';
import {connect} from 'react-redux';  
import PropTypes from'prop-types'
import Cart from './../components/Cart'
import CartItem from './../components/CartItem'
import CartResult from './../components/CartResult'
import {actDeleteProductInCart,actUpdateProductInCart} from './../actions/index'

import * as Message from './../constants/Message'

class CartContainer extends React.Component{

constructor(props){
  super(props);
}
render(){
 var{cart}=this.props
 console.log(cart)
return(

            <Cart 
             showCartItem={this.showCartItem(cart)}
             showCartResult={this.showCartResult(cart)}    
             />
              

  


  )
}
showCartItem=(cart)=>{
  var result=Message.MESS_CART_EMPTY;
  var {onDeleteProductInCart,onUpdateProductInCart}=this.props
  if(cart.length>0){
    result= cart.map((item,index)=>{
       
       return(
          <CartItem 
       
             key={index}
             item={item}
             index={index}
             onDeleteProductInCart={onDeleteProductInCart}
             onUpdateProductInCart={onUpdateProductInCart}
           />
        )

    })
  }
return result;
}


showCartResult= (cart)=>{
  var result=null;
  if(cart.length>0){
    return(
     <CartResult cart={cart}/>
      )
  }


    return result
}

}

CartContainer.propTypes={
  cart: PropTypes.arrayOf(PropTypes.shape({

  product:PropTypes.shape({
  id:PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img:  PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  new: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,


}).isRequired,
   quantity:PropTypes.number.isRequired

  })).isRequired
}

const mapStateToProps=state=>{
return{
     cart:state.cart
  }
}

const mapDispatchToProps=(dispatch,props)=>{
 return{
    onDeleteProductInCart:(product)=>{
      dispatch(actDeleteProductInCart(product))
    },
    onUpdateProductInCart:(product,quantity)=>{
      dispatch(actUpdateProductInCart(product,quantity))
    }
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);