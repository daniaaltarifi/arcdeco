import React, { useState, useEffect } from 'react'
import '../Style/Footer.css'
import axios from 'axios';
function Footer() {
    const [add, setAdd] = useState([]);
    const [allContact, setAllContact] = useState([]); 
    const [allSocial,setAllSocial]=useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/footer");
                const data = response.data;
                setAdd(data);
            } catch (error) {
                console.log(`Error getting Blog from frontend: ${error}`);
            }
        };
        const fetchExtraContact = async () => {
            try {
              const response = await axios.get("http://localhost:8080/extracontact");
              const data = response.data;
              setAllContact(data);
            } catch (error) {
              console.log(`Error getting data from frontend: ${error}`);
            }
          };
          const fetchSocial = async () => {
            try {
              const response = await axios.get("http://localhost:8080/socialfooter");
              const data = response.data;
              setAllSocial(data);
            } catch (error) {
              console.log(`Error getting Footer Home from frontend: ${error}`);
            }
          };
        fetchData();
        fetchExtraContact();
        fetchSocial()
    }, []);
    return (
        <div>
            <hr className='line_footer' />
            <div className="container mt-5 mb-5">
                {add.map((data) => (
                    <div key={data.id}>
                        {data.phone ?(

                        <div className="row">
                            <div className="col">
                                <p className='contact'>Phone:{data.phone}</p>

                            </div>
                        </div>
                        ): ("")}
                        {data.email &&(

                        <div className="row">
                            <div className="col">
                                <p className='contact'>

                                    Email: {data.email}
                                </p>
                            </div>
                        </div>
                        )}
                        {data.address &&(

                        <div className="row">
                            <div className="col">
                                <p className='contact'>
                                    Address: {data.address}

                                </p>
                            </div>
                        </div>
                        )}
                           </div>
                                           ))}

                        {allContact.map((fullcontact) =>(
                        <div className="row" key={fullcontact.id}>
                            <div className="col">
                                <p className='contact'>
                                    {fullcontact.contact}

                                </p>
                            </div>
                        </div>
                        ))}
                            <div className="row mt-2">
                        {allSocial.map((social) =>(

                            <div className="col-1 col_social">
                                <div className='contact_footer'>
                                    {social.socialmedia && social.link ? (

                                        <a href={social.link}>

                                            <img src={`http://localhost:8080/` + social.socialmedia} className='contact_icon ' alt="..." width={"30vh"} height={"30vh"}/>
                                        </a>
                                    ) : ""}
                                    {/* {data.social2 && data.link2 ?(

                                    <a href={data.link2}>

                                        <img src={`http://localhost:8080/` + data.social2} className='contact_icon ' alt="..." width={"30vh"} height={"30vh"}/>
                                    </a>
                                    ): ""}
                                    {data.social3&& data.link3 ?(

                                    <a href={data.link3}>

                                        <img src={`http://localhost:8080/` + data.social3} className='contact_icon ' alt="..." width={"30vh"} height={"30vh"}/>
                                    </a>
                                    ):""} */}
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>

         
        </div>
    )
}

export default Footer