import React from 'react';
import CartResult from './CartResult'
import {actDestroyCart} from './../actions/index'
import {connect} from 'react-redux'
class Cart extends React.Component{
constructor(props){
  super(props)
  this.state={
    
  }
}
onDestroy=()=>{
  var {DestroyCart}=this.props
  DestroyCart()
}


    render() {
      var Item =this.props.showCartItem
      var Result= this.props.showCartResult
        return (
              <div className="container-sm carts">
            <div className="">
            <h4>GIỎ HÀNG CỦA BẠN</h4>
            <div className="row">
              <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9  pl-0">
              <p><button 
              type="button"
               class="btn-clear"
               onClick={()=>{if(window.confirm('Xóa Đơn Hàng ?')){this.onDestroy()};}}
               ><span className="fa fa-trash"></span>HỦY ĐƠN HÀNG</button></p>
               <div className="table-responsive">
               <table className="table table-bordered">
               <thead>
                <tr>
               	<th>No</th>
               	<th>Sản phẩm</th>
               	<th>Số lượng</th>
               	<th>Thành tiền</th>
               	<th>Ghi chú</th>
               	</tr>
               </thead>
               <tbody>
               	{Item}
               </tbody>
               </table>
               </div>
              </div>
               {Result}
            </div>
        </div>
         </div>
        );
    }
}

const mapDispatchToProps=(dispatch,props)=>{

  return{
    DestroyCart:()=>{
      dispatch(actDestroyCart())
    }
  }
}

export default connect(null,mapDispatchToProps)(Cart);