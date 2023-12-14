// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "./Component/Home";
import Menu from "./Component/Menu";
import NewPage from "./Component/NewPage";
import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

function App() {
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const updateFavicon = () => {
      axios.get('http://localhost:8080/favicon')
        .then(response => {
          const newFaviconUrl = response.data[0]?.icon; // Get the first favicon's URL
          setIcon(newFaviconUrl);
          document.title = response.data[0]?.name || 'Arcdeco';
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };

    updateFavicon();
  }, []);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" href={`http://localhost:8080/` + icon} /> {/* Set the favicon dynamically */}
      </Helmet>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:path" element={<NewPage />} />

        </Routes>
      </BrowserRouter>
      {/* <Home/> */}
    </div>
  );
}

export default App;
