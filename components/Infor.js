import React from 'react';
class Infor extends React.Component{

	render() {
		return (
		 <div className="row">
     <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 pr-0 pl-0"></div> 
     <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 pr-0 pl-0">
      <div className="infor-order">
     <h4>THÔNG TIN ĐẶT HÀNG</h4>
      <p><lable>Họ và Tên<span className="red">*</span></lable><input className="border-bot" type="text" placeholder="Võ Đình Tiến"></input></p>
      <p><lable>Email<span className="red">*</span></lable><input className="border-bot" type="text" placeholder="Võ Đình Tiến"></input></p>
      <p><lable>Địa chỉ<span className="red">*</span></lable><input className="border-bot" type="text" placeholder="Võ Đình Tiến"></input></p>
      <p><lable>Điện thoại<span className="red">*</span></lable><input className="border-bot" type="text" placeholder="Võ Đình Tiến"></input></p>
      <p><lable>Nội dung</lable><textarea></textarea></p>
      </div>
      <div className="infor-receive">
      <h4>THÔNG TIN NHẬN HÀNG</h4>
      <p><lable>Họ và Tên<span className="red">*</span></lable><input className="border-bot" type="text" placeholder="Võ Đình Tiến"></input></p>
      <p><lable>Địa chỉ<span className="red">*</span></lable><input className="border-bot" type="text" placeholder="Võ Đình Tiến"></input></p>
      <p><lable>Điện thoại<span className="red">*</span></lable><input className="border-bot" type="text" placeholder="Võ Đình Tiến"></input></p>
      <p><lable>Tỉnh/Thành phố<span className="red">*</span></lable><select >
       <option value="">Tỉnh/thành phố</option>
      </select></p>
       <p><lable>Quận/huyện</lable><select >
       <option value="">Quận/huyện</option>
      </select></p>
     </div> 
     <button type="button" className="btn btn-primary">Xác nhận</button> 
     <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 pr-0 pl-0"></div>  
 
     </div>
     </div>
		);
	}
}
export default Infor;