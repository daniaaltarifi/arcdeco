import React, { useEffect, useState } from 'react'
import intro from '../Videos/intro.mp4'
import '../Style/Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Menu from './Menu';
import AboutUs from './AboutUs';
import Cases from './Cases';
import Test from './Test';
import Services from './Services';
import Partner from './Partner';
import Footer from './Footer';
import axios from 'axios'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
AOS.init();
function Home() {
    const [add, setAdd] = useState([]);
    const [footer, setFooter] = useState([]);
    const [mainslider, setMainslider] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/home");
                const data = response.data;
                setAdd(data);
            } catch (error) {
                console.log(`Error getting Blog from frontend: ${error}`);
            }
        };

        fetchData();
        const fetchMainslider = async () => {
            try {
              const response = await axios.get("http://localhost:8080/mainslider");
              const data = response.data;
              setMainslider(data);
              console.log("add",add)
            } catch (error) {
              console.log(`Error getting Blog from frontend: ${error}`);
            }
          };
          fetchMainslider();
        const fetchFooter = async () => {
            try {
                const response = await axios.get("http://localhost:8080/footerhome");
                const data = response.data;
                setFooter(data);
            } catch (error) {
                console.log(`Error getting Blog from frontend: ${error}`);
            }
        };

        fetchFooter();
    }, []);
    const allowedImageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const allowedVideoExtensions = ['mp4', 'mov', 'avi', 'mkv'];
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        // speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 5000,
        nextArrow: false, // Disable the next arrow
        prevArrow: false, // Disable the previous arrow


    };
    const [slideCount, setSlideCount] = useState(0);



    return (
        <>
            {/* <div className='video-container'> */}
            <Menu />
            <div>

                {/* <!-- Swiper --> */}


                {/* <div className="one-time"> */}
                    <Slider {...settings} style={{overflowX:"hidden"}}>
                        {mainslider.map((data, index) => (
                            <div key={data.id} >

                                {allowedImageExtensions.includes(data.images.split('.').pop().toLowerCase()) ? (
                                    <div className='image-container'>
                                        <img
                                            src={`http://localhost:8080/` + data.images}
                                            alt={`Contact Video`}
                                            className='img_home'
                                        />
                                    </div>
                                ) : allowedVideoExtensions.includes(data.images.split('.').pop().toLowerCase()) ? (
                                    <video autoPlay muted loop className='video_play'>
                                        <source src={`http://localhost:8080/` + data.images} type="video/mp4" />
                                    </video>
                                ) : null}
                                                        <div className='video-overlay'></div> {/* for background gray above the video */}

                            </div>
                        ))}
                    </Slider>

                {/* </div> */}
                {add.map((data, index) => (
                    <div key={data.id}>

                        {index === currentSlide && ( // Display text only for the current slide
                            <>
                                <div className='title_video ps-4'>
                                    <p className='text_title'>{data.title}</p>

                                </div>
                                <div className='box_intro'>
                                    <div className='intro_parag'>
                                        <p className='subtitle'>{data.subtitle}</p>
                                        <p className='paragraph_intro'>
                                            {data.content}

                                        </p>

                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}

                <div className='contact_video'>
                    {footer.map((footericon, index) => (
                        <React.Fragment key={index}>
                            {footericon.socialmedia && footericon.link ? (
                                <a href={footericon.link} className='w-100'>
                                    <img
                                        src={`http://localhost:8080/${footericon.socialmedia}`}
                                        className='contact_icon'
                                        alt={`Contact Icon ${index}`}
                                        height={"75%"}
                                        width={"70%"}
                                    />
                                </a>
                            ) : null}
                        </React.Fragment>
                    ))}
                </div>









            </div>
            {/* </div> */}
            <div className='whiteSpace'>

            </div>
            <AboutUs />
            <div className='whiteSpace'>

            </div>
            <Cases />
            <div className='whiteSpace'>

            </div>
            <Services />
            <div className='whiteSpace'>

            </div>
            <Partner />
            <div className='whiteSpace'>
            </div>
            <Footer />
        </>

    )
}

export default Home