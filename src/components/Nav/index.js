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
import Link from '../Link/LinkAcceuil';
import LinkAcceuil from '../Link/LinkAcceuil';
import LinkFavories from '../Link/LinkFavories';
import LinkSeries from '../Link/LinkSeries';
import LinkTintin from '../Link/LinkTintin';
import LinkHerge from '../Link/LinkHerge';
import LinkTrendies from '../Link/LinkTrendies';







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
                        <LinkAcceuil name='ACCUEIL' />
                        <LinkFavories name='FAVORIES' />
                        <LinkSeries name='SERIES' />
                        <LinkTintin name='TINTIN' />
                        <LinkHerge name='HERGE' />
                        <LinkTrendies name='TRENDIES' />


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