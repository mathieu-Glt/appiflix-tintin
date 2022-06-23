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




import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Redirect,
} from "react-router-dom"


function App() {
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
          <Movies />

        </div>

        <div className='test'></div>
        <Routes>
          <Route path="/Acceuil" element={<Acceuil />} />
          <Route path="/Favories" element={<Favories />} />
          <Route path="/Series" element={<Series />} />
          <Route path="/Tintin" element={<Tintin />} />
          <Route path="/Herge" element={<Herge />} />

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
