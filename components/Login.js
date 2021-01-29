	import React from 'react';
	import {BrowserRouter as NavLink} from 'react-router-dom'

	class Login extends React.Component{

		render() {
			return (
	               <div className="modal-login" id="modal-id" aria-hidden="true" data-backdrop="active" > 
	               		<div className="modal-content">
	               			<div className="modal-header">
	               				<h2>Đăng Nhập</h2>
	               				<span type="button" className="close" id="close">&times;</span>
	               			</div>
	               			<div className="modal-body">
	               			 <form>
	               			   <div className="form-group">
	                           <lable>Tên tài khoản:</lable>
	                            <input className="namelogin" type="text" placeholder="trumyeu216@gmail.com" name="name"></input>
	                            </div>
	                            <div className="form-group">
	                             <lable>Mật khẩu:</lable>
	                            <input className="namepass" type="password" name="pas"></input>
	                            </div>
	                </form>	
	               			</div>
	               			<div className="modal-footer">
	               			     <div className="login-with">
	               			     <h5>Đăng nhập với</h5>
                                <a href="" className="link-login-gg "><span className="fab fa-google"></span></a><span>OR</span>
                                <a href="" className="link-login-fb "><span className="fab fa-facebook"></span></a>
                                </div>
	               				<button type="button" className="btn btn-danger">Đăng nhập</button>
	               			    <NavLink to={'/register'}><button type="button" className="btn btn-default">Đăng ký</button></NavLink>

	               			</div>
	               		</div>
				
				 </div>
			);
		}
	}
	export default Login;