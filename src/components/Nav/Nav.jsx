import React from 'react';
import './Nav.scss';
import { useState } from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import  Form  from '../Form/Form';
import  LinkGift from '../Link/LinkGift';
import  LinkNotif from '../Link/LinkNotif';
import  LogoNetflix from '../Logo/LogoNetflix';
import  PictureLogo from '../Picture/PictureLogo';
import  LinkAvatarIcon from '../Link/LinkAvatarIcon';
import Link from '../Link/Link';


function Nav() {

    const [navBlack, setNavBlack] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleLink, setToggleLink] = useState(false);


    const transitionNav = () => {
        window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false)
    };

    useState(() => {
        document.addEventListener("scroll", transitionNav);
        
    });

    const displayNav = () => {
        window.scrollY > 100 ? setToggleLink(true) : setToggleLink(false)
    };


    useState(() => {
        document.addEventListener("scroll", displayNav);
    });

    const handleClick = () => {
        console.log(toggleMenu)
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    };


        return (
    <div className={`nav ${navBlack || toggleMenu ? 'nav--black' : 'nav--transparent'
    } ${toggleMenu && 'show'}`}>
        <div className='nav_logo'>
            <LogoNetflix />
        <button className='nav_burger' onClick={handleClick}>
            <MenuIcon />
        </button>
        
        <nav className='nav_links'>
            <div className={`${toggleLink ? 'nav_linka' : 'nav-transparent_link'}`}>
                <Link name='FAVORIES'/>
                <Link name='SERIES'/>
                <Link name='FILMS'/>
                <Link name='TRENDIES'/>

 
            </div>
        </nav>

        </div>
        <div className='nav_actions'>
            <Link name='ACCUEIL'/>
            <Form />
            <LinkGift />
            <LinkNotif />
            <LinkAvatarIcon />
        </div>
    </div>
    );
}

export default Nav;