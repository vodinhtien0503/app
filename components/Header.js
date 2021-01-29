import React from 'react';


class Header extends React.Component{



render(){

return(
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
         <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-dark justify-content-between  " role="navigation" >
      <a class="navbar-brand " href="#">Admin</a>
      <div>
      <ul class="navbar-nav" >
        <li class="nav-item dropdown">
          <a href="" class="nav-link dropdown-toggle" data-toggle="dropdown" id="navdropdownMenu" aria-haspopup="true" aria-expanded="false"></a>
          <div class="dropdown-menu" aria-labelledby="navdropdownMenu">
            <a class="dropdown-item" href="">Log out</a>
          </div>
        </li>
      </ul>
    </div>
    </nav>
    </div>



  )
}
}
export default Header;