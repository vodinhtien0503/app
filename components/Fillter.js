import React from 'react';
class Fillter extends React.Component{
 constructor(props){
  super(props);
 }

sendData=(e)=>{
  var target=e.target;
        var value =target.value;
  this.props.parentCallback(value)
}
sendDataCode=(e)=>{
  var target=e.target;
  var value =target.value;
  this.props.parentCallbackCode(value)
}


	render() {
		return (
         <div className="fillter"> 
         <div className="row fillter-sm">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 pr-0 pl-0"> </div>
           <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 pr-0 pl-0"></div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 pr-0 pl-0">
            <select name=" " id="" className="fillter-price" onChange={this.sendData}>
            <option className="placeholder" value=" " disabled selected>Lọc theo giá</option>
            <option value={1} >Dưới 1 triệu</option>
            <option value={2} >Từ 1 đến 5 triệu</option>
            <option value={3} >Từ 5 đến 10 triệu</option>
            <option value={4} >Trên 10 triệu</option>
            <option value={5} >Tất cả</option>

            </select>
           </div>
         
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 pr-0 pl-0">
          <input className="fillter-code" type=" text" placeholder="Nhập mã sản phẩm" onChange={this.sendDataCode}></input>
           </div>

         </div>
         </div>
		);
	}
}
export default Fillter;