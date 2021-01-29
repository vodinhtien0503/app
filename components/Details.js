import React from 'react';
import firebaseConnect from './../DB/firebaseConnect';
import firebase from 'firebase' ;

class Details extends React.Component{
constructor(props){
    super(props)
    this.state={
        qty:1,
        city:1,
        product:{
            
        }
    }
}


formatprice=(amount)=>{
    return (amount).toLocaleString('vi-VN'); 
}

 componentDidMount(){
firebase.database()
.ref(`/Category/${this.props.id}/cate/${this.props.cateid}/cateItem/${this.props.cateitemid}/product/${this.props.productid}/`)
.on("value", snapshot => {
        
        this.setState({ product: snapshot.val() });
      });
       console.log(firebaseConnect)


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



onclick=()=> {
  window.$('#modal-id').modal('show');
}
 


onAddToCart=(product,qty)=>{
this.props.onAddToCart(product,qty)
          
  }

    render() {
        var {qty}=this.state
        var {product,city}=this.state;
        console.log(product)
        return (
              <div className="container-sm productdetails">
               <div className="row">
              <div className="header-details">
                <ul className="text_hide">
                 <li className="type-details"><a href="">Chi Tiết Sản Phẩm</a></li>  
                 <li className="type-details"><a href="">Tổng Quát</a></li>  
                 <li className="type-details"><a href="">Tài Liệu</a></li>   
                 <li className="type-details"><a href="">Sản phẩm</a></li>   
                </ul>
                </div>
                </div>
            <div className="main-details">
            <h4>{product.title}</h4>
            <div className="row">
               <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 p0">
                <img className="img-details" src={product.img} ></img>
               </div> 
               <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <p><b>Mã sản phẩm:</b><span className="text-pr">{product.code}</span></p>
                <p><b>Giá hãng:</b><span className="text-pr1">{this.formatprice(parseInt(product.price))}</span> VNĐ</p>
                <p><b>Chiết khấu:</b><span className="text-pr2">{product.discount=='ab'?10:0}</span>%</p>
                <p className="price"><b>Giá bán:</b><span className="text-pr3">{this.formatprice(parseInt(product.price))}</span> VNĐ</p>
                <p><button type="button" className="btn btn-primary" onClick={this.onclick}>Đăng nhập để có giá tốt</button></p>
                <p><b>Tình trạng</b><span className="status-pr">Còn hàng</span><span className="qty">{product.amount}</span></p>
                <p><button type="button" 
                className="btn btn-default btn-decrease"
                onClick={this.decrease}>
                <i className="fa fa-minus"></i></button>
                <input className="update-qty" 
                type="text" 
                placeholder="1"
                name="qty"
                value={qty}
                onChange={this.onChange}
                ></input>
                <button type="button"
                 className="btn btn-default btn-increase"
                 onClick={this.increase}>
                 <i className="fa fa-plus"></i></button></p>
                <p><button type="button" 
                className="btn btn-danger btn-shopping "
                onClick={()=>this.onAddToCart(product,qty)} 
                >
                <span className="fas fa-shopping-cart"></span>Đặt Mua</button>
                <button type="button" className="btn btn-success btn-like"><span className="fas fa-heart"></span>Yêu Thích</button></p>

               </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 tranmiss">
                 <p>THÔNG TIN VẬN CHUYỂN</p>
                 <p><select className="city" name="city" onChange={this.onChange} value={city}>
                 <option value={1}>Hồ Chí Minh</option>
                 <option value={2}>Hà Nội</option>

                 </select></p> 
                 <p className="time-tranmiss">{parseInt(city)===1?"Giao hàng từ 2-3 ngày":"Giao hàng từ 4-6 ngày"}</p> 
               </div>
            </div>
         </div>
         <div className="description">
             <h4>MÔ TẢ SẢN PHẨM</h4>
             <p>Biến tần ABCSB12312</p>
         </div>
        <h4>CÓ THỂ BẠN QUAN TÂM</h4>
         <div className="note">
           <div className="row note-item">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 pr-0 pl-0">
            <img className="img-small" src="./../ITEM.jpg" ></img>
            </div>
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 details-header">
            <p className="title">Máy Cắt ACB</p>
            <p className=""><b>ABC123</b></p>
            <p className="">Máy Cắt ACB</p>

            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 details-note">
               <p><b>Tình trạng</b><span className="status-pr">Còn hàng</span></p>
                <p><b>Giá hãng:</b><span >2.000.000</span> VNĐ</p>
                <p><b>Chiết khấu:</b><span >5</span>%</p>
                <p className="price"><b>Giá bán:</b><span >2.000.000</span> VNĐ</p>
                <p><a href="">Đăng nhập để có giá tốt</a></p>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 pr-0 pl-0 pt-1 result" >
            <p><button type="button" className="btn btn-default btn-decrease"><i className="fa fa-minus"></i></button>
                <input className="update-qty" type="text" placeholder="1"></input>
                <button type="button" className="btn btn-default btn-increase "><i className="fa fa-plus"></i></button></p>
     <p className="btn-buy1"><button type="button" className="btn btn-primary btn-buy "><span className=""></span>Đặt Mua</button></p>
  
            </div>

           </div>  
         </div>
         </div>
        );
    }
}
export default Details;