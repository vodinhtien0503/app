import React from 'react';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';

class MenuCategories extends React.Component{



render(){

return(
          
   <div class="row" id="nav">
        <nav class="d-none d-md-block bg-dark sidebar mt-40"  >
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="">
                </a>
              </li>
             
                 <li class="nav-item">
               <a class="nav-link" href="" target="">
                  Trang chủ
                </a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="" target="">
                  Quản lí sản phẩm
                </a>
              </li>
              <li class="nav-item"> 
               <NavLink to="/table" class="nav-link">Quản lí danh mục</NavLink>
              </li>
              <li class="nav-item">
               <a class="nav-link" href="" target="">
                  Quản lí đặt hàng
                </a>
              </li>
              <li class="nav-item">
               <a class="nav-link" href="" target="">
                  Quản lí giao dịch
                </a>
              </li>
               
            </ul>
        </nav>
        </div>


  )
}
}
export default MenuCategories;