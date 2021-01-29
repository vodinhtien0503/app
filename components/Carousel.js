import React from 'react';

class Carousel extends React.Component{

	render() {
		return (
			 <div className="container-sm banner">
         <div className="row">
         <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 pl-0 qr-1">
         <img className="qr" src="./../qc.jpg" alt=""></img>
         </div>
         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 p-0 carousel slide" data-ride="carousel" id="carouselExampleSlidesOnly">
          <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block " src="./../logo.jpg" alt="First slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block " src="./../PANER.jpg" alt="Second slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block" src="./../banner1.jpg" alt="Third slide"></img>
    </div>
  </div>
         </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 pr-0  qr-1">
                 <img className="qr" src="./../qc.jpg" alt=""></img>
         </div>
         </div>
         </div>
		);
	}
}
export default Carousel;