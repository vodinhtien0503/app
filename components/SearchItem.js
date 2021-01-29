import React from 'react';
import {connect} from 'react-redux'
 import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
class SearchItem extends React.Component{

constructor(props){
  super(props)
  this.state={
    productItem:[],
    key:''
  }
}

formatprice=(amount)=>{
    return (amount).toLocaleString('vi-VN'); 
}

onClose=(index)=>{
 window.$(`#mess${index}`).modal('hide')


}
onAddToCart=(product,index)=>{
   console.log("pr",product)
        this.props.onAddToCart(product,1)
          this.setState({
            productItem:product
          })
        window.$(`#mess${index}`).modal('show')

  }

  onCart=(index)=>{
     window.$(`#mess${index}`).modal('hide')

  }
  componentDidMount(){
       this.setState({
        key:this.props.Key
       })
  }

   componentDidUpdate(){
    var{key}=this.state
     if(key!==this.props.Key){
       this.setState({
        key:this.props.Key
       })
     }
    }
  





	render() {
    var {key}=this.state
    var{products}=this.props
    var elem=products.filter(search=>search.title.toLowerCase().includes(key)||search.code.toLowerCase().includes(key)).map((item,index)=>{
      return(
                <div className="product-item" key={index}>

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
            <button type="button"
             className="btn-buy"
              onClick={()=>this.onAddToCart(item,index)}
            >
            ĐẶT MUA</button>
            <div className="messaddtocart" id={`mess${index}`}  aria-hidden="true" >   
            <div className="content">
                  
                        <span type="button" onClick={()=>this.onClose(index)} className="close">&times;</span>
                      
                      
                        <img className="img-mess" src={this.state.productItem.img} alt=""></img>
                        
                        <p >Sản phẩm : <span className="title">{this.state.productItem.title}</span> đã được thêm vào giỏ hàng</p>

                        <NavLink to={"/cart"}><button type="button" onClick={()=>this.onCart(index)}
                         className="btn btn-danger btn-oncart"><span className="fas fa-shopping-cart">
                           
                         </span> Vào giỏ hàng</button></NavLink>
                         <button type="button" onClick={()=>this.onClose(index)}
                         className="btn btn-primary btn-continue"><span className="fas fa-cart-plus">
                         </span> Tiếp tục mua </button>
                        

            
                    </div>        
         </div>
           </div>
 
        )
    })
		return (
    <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12 pl-30">
         <h4>KẾT QUẢ TÌM KIẾM</h4>
    <div className="row">
         {elem}
         </div>
         </div>
		);
	}
}

const mapStateToProps=state=>{
return{
     products:state.products,
  }
}

export default connect(mapStateToProps,null)(SearchItem);