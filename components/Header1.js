import React from 'react';
import $ from 'jquery';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
class Header1 extends React.Component{
 

 to_slug=(str)=>
{
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;
}


	render() {
		return (
             <div className="header-link fixed-top">
           <div className="row">
           	<div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 link-left">
              <ul className="clearfix navleft">
                <li>
             <a href="" ><span className="fas fa-home"></span></a>
              </li>
            <li className="dropdown">
             <a href="" className="dropdown-toggle " 
             id="navdropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  >GIỚI THIỆU</a>
              <div class="dropdown-menu about" aria-labelledby="navdropdownMenu">
             <a class="dropdown-item" href="">Giới thiệu</a>
             <a class="dropdown-item" href="">Xưởng sản xuất</a>
             <a class="dropdown-item" href="">Thông tin tuyển dụng</a>
            </div>
            </li>
              <li className="dropdown">
             <a href="" className="dropdown-toggle " 
             id="navdropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"   >DỊCH VỤ</a>
              <div class="dropdown-menu service" aria-labelledby="navdropdownMenu1">
             <a class="dropdown-item" href="">Sản xuất tủ bảng điện</a>
             <a class="dropdown-item" href="">Tiết kiêm năng lượng</a>
            <a class="dropdown-item" href="">Dịch vụ kỹ thuật</a>
             <a class="dropdown-item" href="">Thực hiện dự án</a>

        
            </div>
            </li>
            <li className="dropdown">
             <a href="" className="dropdown-toggle" 
             id="navdropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  >SẢN PHẨM</a>
              <div class="dropdown-menu products" aria-labelledby="navdropdownMenu2">
             <NavLink to={"/"+this.to_slug('Phân phối điện hạ thế')+"/1"} class="dropdown-item" >Phân phối điện hạ thế</NavLink>
             <NavLink to={"/"+this.to_slug('Điều khiển và tự động hóa')+"/2"} class="dropdown-item" >Điều khiển và tự động hóa</NavLink>
             <NavLink to={"/"+this.to_slug('Thiết bị trung thế')+"/3"} class="dropdown-item">Thiết bị trung thế</NavLink>
             <NavLink to={"/"+this.to_slug('Cáp điện,Thanh cải, Phụ kiện đấu nối')+"/4"} class="dropdown-item" >Cáp điện,Thanh cải, Phụ kiện đấu nối</NavLink>
             <NavLink to={"/"+this.to_slug('Thiết bị chiếu sáng')+"/5"} class="dropdown-item" >Thiết bị chiếu sáng</NavLink>
             <NavLink to={"/"+this.to_slug('Bộ lưu điện UPS')+"/6"} class="dropdown-item" >Bộ lưu điện UPS</NavLink>
            </div>
            </li>
             <li className="dropdown">
             <a href="" className="dropdown-toggle" 
             id="navdropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  >TIN TỨC</a>
              <div class="dropdown-menu news" aria-labelledby="navdropdownMenu3">
             <a class="dropdown-item" href="">Bản tin SECO</a>
             <a class="dropdown-item" href="">Khuyến mãi</a>
             <a class="dropdown-item" href="">Dự án tiêu biểu</a>
            </div>
            </li>
             <li className="dropdown">
             <a href="" className="dropdown-toggle" 
             id="navdropdownMenu5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  >HỖ TRỢ</a>
              <div class="dropdown-menu support" aria-labelledby="navdropdownMenu5">
             <a class="dropdown-item" href="">Hỗ trợ kỹ thuật</a>
             <a class="dropdown-item" href="">Hướng dẫn mua hàng trực tuyến</a>
             <a class="dropdown-item" href="">Phương thức thanh toán</a>
             <a class="dropdown-item" href="">Chính sách bảo mật thông tin</a>
             <a class="dropdown-item" href="">Chính sách bảo hành</a>
             <a class="dropdown-item" href="">chính sách giao hàng</a>

            </div>
            </li>
            <li className="dropdown">
             <a href=""  >LIÊN HỆ</a>
            
            </li>
            
              </ul>
             </div>   
           	<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 link-right">
            <ul className="clearfix navright">
             <li><a className="google" ><span className="fab fa-google"></span></a></li>
              <li><a className="fb" ><span className="fab fa-facebook"></span></a></li>
              <li className="vietnam"><a><i>VIETNAMESE</i></a></li>
            </ul>
             </div>
           </div>
           </div>

		);
	}
}
export default Header1;