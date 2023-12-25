import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Style/Cases.css'
function Test() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        nextArrow: false, // Disable the next arrow
        prevArrow: false, // Disable the previous arrow
      };
    

  return (
    <div>
    <div className="one-time">
      <Slider {...settings} >
        <div>
          <img src={require("../images/image_project_06.jpg")} alt="Slide 1" width={"100%"} />
        </div>
        <div>
          <img src={require("../images/services_01.jpg")} alt="Slide 2" />
        </div>
        <div>
          <img src="image3.jpg" alt="Slide 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
      <button type="button" data-role="none" class="slick-arrow slick-next" style={{display:"none"}}> Next</button>        </div>
    </div>
  );
}

export default Test;
