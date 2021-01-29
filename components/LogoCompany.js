import React from 'react';

class LogoCompany extends React.Component{

	render() {
		return (
			 <div className="container-sm logo-company">   
			 <div className="row">
              <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4"><p className="iso">THƯƠNG HIỆU</p></div>
              <div className="col-sm-1 col-xs-1 col-md-1 col-lg-1 pr-0 "><img className="img-company" src="./../ABB.jpg" alt=""></img></div>
              <div className="col-sm-1 col-xs-1 col-md-1 col-lg-1 pr-0 "><img className="img-company" src="./../SCHNEIDER.jpg" alt=""></img></div>
              <div className="col-sm-1 col-xs-1 col-md-1 col-lg-1 pr-0 "><img className="img-company" src="./../FUJI.jpg" alt=""></img></div>
              <div className="col-sm-1 col-xs-1 col-md-1 col-lg-1 pr-0 " ><img className="img-company" src="./../POWER.png" alt=""></img></div>
              <div className="col-sm-1 col-xs-1 col-md-1 col-lg-1 pr-0 " ><img className="img-company" src="./../MIT.png" alt=""></img></div>

              <div className="col-sm-3 col-xs-3 col-md-3 col-lg-3"></div>


			 </div>      	
          </div>
		);
	}
}
export default LogoCompany;