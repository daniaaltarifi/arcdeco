import React, { useEffect, useState } from 'react'
import '../Style/Cases.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
function ProgressBar({ slideCount, currentSlide }) {
    const progress = ((currentSlide + 1) / slideCount) * 100; // Updated calculation
    return (
        <div className="progress-bar mt-5">
            <div style={{ width: `${progress}%` }}></div>
        </div>
    );
}

function Cases() {
    const [add, setAdd] = useState([]);
    const [cases, setCases] = useState([]);

    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/slider')
            .then((response) => {
                const data = response.data;
                setAdd(data);
                setSlideCount(data.length); // Update slideCount when add changes
            })
            .catch((error) => console.error('Error fetching image URLs:', error));
    }, []); // Empty dependency array, runs only once

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/cases");
                const data = response.data;
                setCases(data);
            } catch (error) {
                console.log(`Error getting data from frontend: ${error}`);
            }
        };

        fetchData();
    }, []);
    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        nextArrow: false, // Disable the next arrow
        prevArrow: false, // Disable the previous arrow
    };
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideCount, setSlideCount] = useState(0);

    const handleBeforeChange = (current, next) => {
        setCurrentSlide(next);
    };

    useEffect(() => {
        setSlideCount(add.length);
    }, []);
    return (
        <div>
            <div className="vertical-text">
                <span>CASES
                </span>
            </div>
            <div className="container ">
                {cases.map((data) => (
                    <div key={data.id}>
                        <div className='row'>
                            <div className='col'>
                                <p className='title_aboutus' data-aos="fade-up" data-aos-duration="2000">
                                    {data.title}
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3 mt-3">
                                <div className='' data-aos="fade-up" data-aos-duration="2000">
                                    <p className='desc_cases' >
                                        {data.content}                            </p>

                                </div>
                            </div>
                        </div>

                    </div>
                ))}

                {/* <!-- Swiper --> */}
                {add.length> 0 &&(

                <div className="one-time">
                    <Slider {...settings} beforeChange={handleBeforeChange}>

                        {add.map((imageUrl, index) => (
                            <div key={index} className="slider_image_container">
                                <img
                                    src={`http://localhost:8080/` + imageUrl.images}
                                    className="img-fluid slider_img"
                                    alt={`Image ${index}`}
                                />
                            </div>
                        ))}


                    </Slider>
                    <ProgressBar slideCount={slideCount} currentSlide={currentSlide} />

                </div>
                )}



            </div>
        </div>
    )
}

export default Cases