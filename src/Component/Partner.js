import React, { useState, useEffect } from 'react'
import axios from 'axios';
function Partner() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
  
    axios.get('http://localhost:8080/partner')
      .then((response) => {
        const data = response.data;
        setImageUrls(data);
      })
      .catch((error) => console.error('Error fetching image URLs:', error));
  }, []);
  return (
    <div>
      <div class="container text-center">
          <div>
            <div class="row">
        {imageUrls.map((imageUrl, index) => (
              <div key={imageUrl.id} class="col-lg-3" data-aos="fade-up" data-aos-duration="3000">
                <img key={index} src={`http://localhost:8080/` + imageUrl.images} class="img-fluid" style={{height:"200px",width:"300px",objectFit:"cover"}} alt={`Image ${index}`} />

              </div>
            ))}
            </div>
          </div>
        {/* <div class="row">
    <div class="col" data-aos="fade-up" data-aos-duration="3000">
    <img src={require("../images/brand-01.png")} class="img-fluid" alt="..." height={"350px"} width={"350px"}/>
    </div>
    <div class="col"data-aos="fade-up" data-aos-duration="3000">
    <img src={require("../images/brand-05.png")} class="img-fluid" alt="..." height={"350px"} width={"350px"}/>
    </div>
    <div class="col"data-aos="fade-up"  data-aos-duration="3000">
    <img src={require("../images/brand-03.png")} class="img-fluid" alt="..." height={"350px"} width={"350px"}/>
    </div>
    <div class="col" data-aos="fade-up" data-aos-duration="3000">
    <img src={require("../images/brand-07.png")} class="img-fluid" alt="..." height={"350px"} width={"350px"}/>
    </div>
  </div>
  <div class="row">
    <div class="col" data-aos="fade-up" data-aos-duration="3000">
    <img src={require("../images/brand-01.png")} class="img-fluid" alt="..." height={"350px"} width={"350px"}/>
    </div>
    <div class="col"data-aos="fade-up" data-aos-duration="3000">
    <img src={require("../images/brand-05.png")} class="img-fluid" alt="..." height={"350px"} width={"350px"}/>
    </div>
    <div class="col"data-aos="fade-up"  data-aos-duration="3000">
    <img src={require("../images/brand-03.png")} class="img-fluid" alt="..." height={"350px"} width={"350px"}/>
    </div>
    <div class="col" data-aos="fade-up" data-aos-duration="3000">
    <img src={require("../images/brand-07.png")} class="img-fluid" alt="..." height={"350px"} width={"350px"}/>
    </div>
  </div> */}
      </div>

    </div>
  )
}

export default Partner