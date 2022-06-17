import './App.scss';
import Nav from '../Nav/index';
import Footer from '../Footer/index';
import PictureLogo from '../Picture/PictureLogo';
import Banner from '../Banner/index';
import Movies from '../movies/index';
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
        {/* banner */}
        <Banner />

        <div className='test'></div>

        {/* movies */}
        <Movies />

        {/* video */}

        {/* quick view */}

        {/* footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
