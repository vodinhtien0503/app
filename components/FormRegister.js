import React from 'react';
class Infor extends React.Component{

	render() {
		return (
		 <div className="row">
     <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 pr-0 pl-0"></div> 
     <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 pr-0 pl-0">
      <div className="form-register">
     <h4>ĐĂNG KÝ</h4>
      <p><lable>Email<span className="red">*</span></lable><input className="border-bot" type="text" placeholder="Võ Đình Tiến"></input></p>
      <p><lable>Mật Khẩu<span className="red">*</span></lable><input className="border-bot" type="password" placeholder="Võ Đình Tiến"></input></p>
      <p><lable>Nhập lại mật khẩu<span className="red">*</span></lable><input className="border-bot" type="password" placeholder="Võ Đình Tiến"></input></p>
      </div>
     <button type="button" className="btn btn-primary">Xác nhận</button> 
     <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 pr-0 pl-0"></div>  
 
     </div>
     </div>
		);
	}
}
export default Infor;