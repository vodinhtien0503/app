import React from 'react';
import {connect} from 'react-redux'; 
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import $ from 'jquery'
class ItemSearch extends React.Component{
 constructor(props){
  super(props);
  this.state={
    qty:1,
    filterprice:''
  }
}


componentDidMount(){
var modal=document.getElementById("modal-id");
var close=document.getElementsByClassName("close")[0]
close.onclick=function () {
  window.$('#modal-id').modal('hide');

    window.$('body').removeClass('modal-open');
     window.$('.modal-backdrop').remove();
}

window.onclick = function(event) {
  event.preventDefault();
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

}


componentDidUpdate(){
  if(this.state.filterprice!==this.props.FilterPrice){
  this.setState({
    filterprice:this.props.FilterPrice
  })
}
}


onclick=()=> {
  window.$('#modal-id').modal('show');
}



  onChange=(e)=>{
     var target=e.target;
        var name=target.name;
        var value =target.value;
        this.setState({
          [name]:value
         });
  }
  decrease=(e)=>{
    var {qty} =this.state;
    if(qty>1){
    qty=qty-1
    this.setState({
        qty:qty
    })
}
  }
  increase=(e)=>{
    var {qty} =this.state;
    if(qty>0){
    qty=qty+1
    this.setState({
        qty:qty
    })
}
  }

  formatprice=(amount)=>{
    return (amount).toLocaleString('vi-VN'); 
}


onAddToCart=(product,quantity)=>{
  this.props.onAddToCart(product,quantity)
}

 
	render() {
           console.log(this.props.FilterCode)
           var {qty}=this.state;
           var {Description}=this.props
        console.log(this.state.filterprice)
        var elem1=this.showItem(this.props.products).map((product,index)=>{

        return(

            <div className="note-small">
           <div className="row note-item">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 pr-0 pl-0">
            <img className="img-small" src="./../ITEM.jpg" ></img>
            </div>
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 details-header">
            <NavLink to={`/detail/${product.title}`}><p className="title">{product.title}</p></NavLink>
            <p className=""><b>{product.code}</b></p>
            <p className="">{Description}</p>

            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 details-note">
               <p><b>Tình trạng</b><span className="status-pr">Còn hàng</span></p>
                <p><b>Giá hãng:</b><span >{this.formatprice(parseInt(product.price))}</span> VNĐ</p>
                <p><b>Chiết khấu:</b><span>{product.discount=='ab'?10:20}</span>%</p>
                <p className="price"><b>Giá bán:</b><span >{this.formatprice(parseInt(product.price))}</span> VNĐ</p>
                <p><a href="" onClick={this.onclick}>Đăng nhập để có giá tốt</a></p>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 pr-0 pl-0 pt-1 result" >
            <p className="center">
            <button type="button" 
            className="btn btn-default btn-decrease-small"
            onClick={this.decrease}
            >
            <i className="fa fa-minus"></i></button>
                <input 
                className="update-qty-small"
                 type="text" placeholder="1"
                  onChange={this.onChange}
                   name="qty" 
                   value={qty}>
                </input>
                <button type="button" 
                className="btn btn-default btn-increase-small "
                onClick={this.increase}
                >
                <i className="fa fa-plus"></i></button></p>
     <p className="btn-buy1-small">
     <button type="button" 
     className="btn btn-primary btn-buy "
     onClick={()=>this.onAddToCart(product,qty)}
     >
     <span className=""></span>Đặt Mua</button></p>
  
            </div>

           </div>  
         </div>

          )

        })
		return (
        <div>
          {elem1}
        </div>
		);
	}


showItem=(product)=>{
      var result=null;
      var{filterprice}=this.state
      var code=this.props.FilterCode
     if(product.length>0){
        switch(parseInt(filterprice)){
          case 1:
          if(code==''){
          result=product.filter(item=>item.price<1000000)
          }
          else{
          result=product.filter(item=>item.price<1000000&&item.code.toLowerCase().inlcudes(code))
          } 
          break
          case 2:
          if(code==''){
          result=product.filter(item=>item.price<=5000000)
          }
          else{
          result=product.filter(item=>item.price<=5000000&&item.code.toLowerCase().includes(code))
          } 
          break
          case 3:
            if(code==''){
           result=product.filter(item=>item.price<=10000000&&item.price>=5000000)
          }
          else{
          result=product.filter(item=>item.price<=10000000&&item.price>=5000000&&item.code.toLowerCase().includes(code))
          } 
          break
          case 4: 
           if(code==''){
           result=product.filter(item=>item.price>10000000)
          }
          else{
          result=product.filter(item=>item.price>10000000&&item.code.toLowerCase().includes(code))
          }
          break
          case 5: 
           if(code==''){
           result=product
          }
          else{
          result=product.filter(item=>item.code.toLowerCase().includes(code))
          }
          break
          default:
           if(code==''){
           result=product
          }
          else{
          result=product.filter(item=>item.code.toLowerCase().includes(code))
          }
          break

        
     }
   }
      return result
    }


}



 


const mapStateToProps=state=>{
return{
     products:state.products,
  }
}

export default connect(mapStateToProps,null)(ItemSearch);