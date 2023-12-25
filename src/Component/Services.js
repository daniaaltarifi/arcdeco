import React, { useState, useEffect } from 'react'
import '../Style/Services.css'
import axios from 'axios';
function Services() {
  const [add, setAdd] = useState([]);
  const [services, setServices] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/services");
        const data = response.data;
        setAdd(data);
      } catch (error) {
        console.log(`Error getting data from frontend: ${error}`);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/typeofservices");
        const data = response.data;

        // Use slice to get the first three items
        const firstThreeItems = data.slice(0, 3);

        setServices(firstThreeItems);
      } catch (error) {
        console.log(`Error getting data from frontend: ${error}`);
      }
    };

    fetchData();
  }, []);




  return (
    <div>
       <div className="vertical-text">
              <span>SERVICES
              </span>
            </div>
      <div className="container">
        {add.map((data) => (

          <div key={data.id}>
           
            <div className='row '>

              <div className='col-lg-11'>
                <p className='title_aboutus' data-aos="fade-up" data-aos-duration="2000">
                  {data.title}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3 mt-3">
                <div className='' data-aos="fade-up" data-aos-duration="2000">
                  <p className='aboutUs_subtitle' >
                    {data.content}                            </p>

                </div>
              </div>

            </div>
          </div>

        ))}
        </div>
        <div className="container-fluid">

        <div className='row'>
          {services.map((service) => (

            <div key={service.id} className='col-lg-4 col-sm-12 img-hover-zoom--slowmo p-0 m-0'>
              <div class="card card_services position-relative">
                <img src={`http://localhost:8080/` + service.image} className='service_img' alt="..." />
                <div class="card-img-overlay d-flex flex-column justify-content-end " data-aos="fade-up" data-aos-duration="3000">
                  <h2 class="card-title title_services" >{service.title}</h2>
                  <p class="card-text subtitle_services">{service.descriptionofservice}</p>
                </div>
              </div>
            </div>
          ))}


          {/* <div className='col-lg-4 col-sm-12 img-hover-zoom--slowmo p-0 m-0'>
            <div class="card card_services position-relative">
              <img src={require("../images/image_project_06.jpg")} className=' ' alt="..." height={"600px"} width={"500px"} />
              <div class="card-img-overlay d-flex flex-column justify-content-end" data-aos="fade-up" data-aos-duration="3000">
                <h2 class="card-title title_services">Interior</h2>
                <p class="card-text subtitle_services">The essence of interior design will always be about people and how they live.</p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-sm-12 img-hover-zoom--slowmo p-0 m-0'>
            <div class="card card_services position-relative">
              <img src={require("../images/services_01.jpg")} className='' alt="..." height={"600px"} width={"500px"} />
              <div class="card-img-overlay d-flex flex-column justify-content-end" data-aos="fade-up" data-aos-duration="3000">
                <h2 class="card-title title_services">Interior</h2>
                <p class="card-text subtitle_services">The essence of interior design will always be about people and how they live.</p>
              </div>
            </div>
          </div> */}

        </div>

      </div>
    </div>
  )
}

export default Services