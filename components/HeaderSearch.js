import React from 'react';
import Login from './Login';
import {connect} from 'react-redux';  
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
class HeaderSearch extends React.Component{
  constructor(props){
    super(props)
    this.state={
      key:''
    }
  }

componentDidMount(){
var modal=document.getElementById("modal-id");
var a=document.getElementById("modal-login");
var close=document.getElementsByClassName("close")[0]
a.onclick=function () {
  modal.style.display="block";
}
close.onclick=function () {
  modal.style.display="none";
}

window.onclick = function(event) {
  event.preventDefault();
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

onChange=(e)=>{
  var target=e.target
  var name=target.name
  var value=target.value
  this.setState({
    [name]:value
  })
}

render(){
    var {cart}=this.props
    var{key}=this.state
    console.log(key)
return(
         <div className="container-sm header-search fixed-top clearfix ">
          <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 p-0 logo">
          <NavLink to="/"><img className="logo-fit" src="./../SECO.png" alt=""></img></NavLink>
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 p-0 company"> 
          <i>COMPANY STD</i>
          </div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 search">
           <input className="search-1" type=" text" name="key" value={this.state.key} onChange={this.onChange} placeholder="Nhập từ khóa: tên hoặc mã sản phẩm"></input>
           </div>
           <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 btn-search">
           <NavLink to={`/search/${key}`}> <button type="button" className="btn btn-default btn-search-1"><span></span>Tìm kiếm</button></NavLink>
            </div>
            
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 link-login">
            <div className="top">
            <a className="text-login" id="modal-login" href='' > Đăng Nhập</a>
            <Login></Login>
            <NavLink to={'/register'} className="text-signup" > Đăng Ký</NavLink>
             </div> 
             <div className="inline">
             <NavLink to="/cart"><span className="cart"><i className="fas fa-shopping-cart"></i></span></NavLink>
              <h6 className="text-cart"> GIỎ HÀNG CỦA BẠN</h6>
              <p className="items">{cart.length} sản phẩm</p>
             </div>
          
          </div>
          </div>
          </div>
      


  )
}
}
const mapStateToProps=state=>{
return{
     cart:state.cart
  }
}
export default   connect(mapStateToProps,null)(HeaderSearch);