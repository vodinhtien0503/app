import React from 'react';
	class ManagerCagories extends React.Component{
	
		render() {
			return (
				 <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-15">
             <div className="input-group">
              <input id="key" type="text" placeholder="Nhập từ khóa" name="key"></input>
              <button type="button" className="btn btn-primary"><span className="fa fa-search"></span>Tìm</button>
             </div>
             </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-15">
              <div className="dropdown">
               <button type="button" className="btn btn-primary dropdown-toggle" 
               data-toggle="dropdown"
               id="dropdownmenu1"
                 aria-haspopup="true"
                 aria-expanded="false"
               >Sắp xếp</button>
               <ul className="dropdown-menu" aria-labelledby="dropdownmenu1">
                 <li>
                 <a className="dropdown-item">
                  <span>Tên A-Z</span>
                 </a>
                 </li>
                 <li>
                  <a className="dropdown-item">
                  <span>Tên Z-A</span>
                 </a>
                 </li>
                 <li>
                  <a className="dropdown-item">
                  <span>Trạng thái kích hoạt</span>
                 </a>
                 </li>
                 <li>
                  <a className="dropdown-item">
                  <span>Trạng thái ẩn</span>
                 </a>
                 </li>
               </ul>  
             </div>
             </div>
             </div>
			)
		}
	}
export default ManagerCagories;