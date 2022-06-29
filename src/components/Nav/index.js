import React from 'react';
import './nav.scss';
import { useState } from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import SearchBar from '../SearchBar/index';
import LinkGift from '../Link/LinkGift';
import LinkNotif from '../Link/LinkNotif';
import LogoNetflix from '../Logo/LogoNetflix';
import PictureLogo from '../Picture/PictureLogo';
import LinkAvatarIcon from '../Link/LinkAvatarIcon';
import LinkAcceuil from '../Link/LinkAcceuil';
import LinkFavories from '../Link/LinkFavories';
import LinkSeries from '../Link/LinkSeries';
import LinkTintin from '../Link/LinkTintin';
import LinkHerge from '../Link/LinkHerge';
import LinkTrendies from '../Link/LinkTrendies';
import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
    Redirect,
    Link,
} from "react-router-dom"
import { color } from '@mui/system';







function Nav() {

    const [navBlack, setNavBlack] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleLogo, setToggleLogo] = useState(true);


    const transitionNav = () => {
        window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false)
    };

    useState(() => {
        document.addEventListener("scroll", transitionNav);

    });

    const displayNav = () => {
        setToggleLogo(true)
    };


    useState(() => {
        document.addEventListener("scroll", displayNav);
    });

    const handleClick = () => {
        console.log(toggleMenu)
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    };

    const colorRgbAcceuil = {
        color: "244, 188, 47"
    };

    const colorRgbFavories = {
        color: "238, 161, 36"
    };

    const colorRgbSeries = {
        color: "235, 133, 37"
    };

    const colorRgbTintin = {
        color: "244, 95, 15"
    };

    const colorRgbHerge = {
        color: "254, 64, 17"
    };

    const colorRgbTrendies = {
        color: "243, 10, 10"
    };





    


    return (
        <div className='container'>
            <div className='nav_logo'>
                <LogoNetflix />
            </div>


            <div
                className={`nav ${navBlack || toggleMenu ? 'nav--black' : 'nav-transparent_link'
                    } ${toggleMenu && 'show'}`}>
                <div className='nav_logoNav'>
                    <LogoNetflix />
                </div>


                <button className='nav_burger' onClick={handleClick}>
                    <MenuIcon />
                </button>

                <nav>
                    <div className='nav_linka'>
                        <Link style={{ color: `rgb(${colorRgbAcceuil.color})` }} to="/acceuil">ACCEUIL</Link>
                        <Link  style={{ color: `rgb(${colorRgbFavories.color})` }} to="/favories">FAVORIES</Link>
                        <Link style={{ color: `rgb(${colorRgbSeries.color})` }} to="/series">PERSONNAGE SERIES</Link>
                        <Link  style={{ color: `rgb(${colorRgbTintin.color})` }} to="/tintin">TINTIN</Link>
                        <Link  style={{ color: `rgb(${colorRgbHerge.color})` }} to="/herge">HERGE</Link>
                        <Link  style={{ color: `rgb(${colorRgbTrendies.color})` }} to="/trendies">TOP RATED</Link>


                    </div>
                    <div className='nav_actions'>
                        <SearchBar />
                        <LinkGift />
                        <LinkNotif />
                        <LinkAvatarIcon />
                    </div>

                </nav>
            </div>

        </div>
    );
}

export default Nav;