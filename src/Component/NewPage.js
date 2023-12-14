import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';

function NewPage() {
    const [data, setData] = useState([]);

    const { path } = useParams();

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/newpage/${path}`);
            setData(response.data);
          } catch (error) {
            console.log(`Error getting data from backend: ${error}`);
          }
        };
    
        fetchData();
      }, []);
    
  if (!data || Object.keys(data).length === 0) {
    return <div>No data found</div>;
  }


  return (
    <div>
        <Menu/>
      <p style={{ color: "#fff",marginTop:"8%" }}>{data.title}</p>
    </div>
  );
}

export default NewPage;
