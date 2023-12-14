import React, { useState, useEffect } from 'react'
import '../Style/AboutUs.css'
import axios from 'axios';
function AboutUs() {
    const [add, setAdd] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/about");
                const data = response.data;
                setAdd(data);
            } catch (error) {
                console.log(`Error getting data from frontend: ${error}`);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="vertical-text">
                <span>ABOUT&nbsp;US
                </span>
            </div>
            <div className="container ">

                {add.map((data) => (

                    <div key={data.id}>


                        <div className='row'>

                            <div className='col m-0 p-0'>
                                <p className='title_aboutus' data-aos="fade-up" data-aos-duration="2000">
                                    {data.title}
                                </p>
                            </div>
                            {/* <div className='col-lg-1'>

                            </div> */}
                        </div>
                        <div className="row">
                            {/* <div className='col-lg-1'>
                            </div> */}
                            <div className="col-lg-6 col-md-6 col-sm-6 ">
                                <div className='aboutUs_cont' data-aos="fade-up" data-aos-duration="2000">
                                    <p className='aboutUs_subtitle' >
                                        {data.paragraphleft}
                                    </p>

                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 ">
                                <div className='aboutUs_cont' data-aos="fade-up" data-aos-duration="2000">
                                    <p className='aboutUs_subtitle' >
                                        {data.paragraphright}

                                    </p>

                                </div>
                            </div>

                        </div>

                        <div className='row'>
                            {/* <div className='col-lg-1'>

                            </div> */}
                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                                <img src={`http://localhost:8080/` + data.imageleft} className="img-fluid about_img1" alt="..." data-aos="fade-right" data-aos-duration="1500" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 goabout_cont">
                                <img src={`http://localhost:8080/` + data.imageright} className="img-fluid about_img2" alt="..." data-aos="fade-right" data-aos-duration="1500" />
                                <p className='goToAbout_btn'>Go to About <hr /></p>

                            </div>
                            {/* <div className='col-lg-1'>

                            </div> */}
                        </div>


                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutUs