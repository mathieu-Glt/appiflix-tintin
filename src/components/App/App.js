import './App.scss';
import Nav from '../Nav/index';
import Footer from '../Footer/index';
import PictureLogo from '../Picture/PictureLogo';
import Banner from '../Banner/index';
import Movies from '../movies/index';
import Acceuil from '../Acceuil/index';
import Favories from '../Favories/index';
import Series from '../Series/index';
import Tintin from '../Tintin/index';
import Herge from '../Herge/index';
import { useState, useEffect } from "react";
import requests from "../../configApi/Request";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Redirect,
} from "react-router-dom"


function App() {

  /*const [movieDatabase, setMovieDatabase] = useState([]);

  useEffect(() => {
    async function fetchDatabase() {
      const request = await axios.get(requests.fetchAllTintinDatabase);
      console.log(request.data.results);

      setMovieDatabase(request.data.result)
    }
    fetchDatabase();
  }, []);

  console.log(movieDatabase);
  const tintinPicture = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg",
    "5.jpg", "6.jpg", "7.jpg", "8.jpg",
    "9.jpg", "10.jpg", "11.jpg", "12.jpg",
    "13.jpg", "14.jpg", "15.jpg", "16.jpg",
    "17.jpg", "18.jpg", "19.jpg", "20.jpg",
    "21.jpg", "22.jpg", "23.jpg", "24.jpg"
  ];*/



  return (
    <div className="App">
      <Router>
        {/* navbar */}
        <Nav />
        <PictureLogo />

        <div className='banner'>
          {/* banner */}
          <Banner />
        </div>

        <div className='movies'>
          {/* movies */}

        </div>

        <div className='test'></div>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/acceuil" element={<Acceuil />} />
          <Route path="/favories" element={<Favories />} />
          <Route path="/series" element={<Series />} />
          <Route path="/tintin" element={<Tintin />} />
          <Route path="/herge" element={<Herge />} />





        </Routes>


        {/* video */}

        {/* quick view */}

        {/* footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
