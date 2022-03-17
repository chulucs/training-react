import {useState} from 'react';

import {NavLink} from 'react-router-dom';

import classes from './Header.module.css';

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    window.addEventListener('scroll', () => {
        if (window.scrollY < 100) {
            setNavbar(false);
        } else {
            setNavbar(true);
        }
    });
    
    return <div className={navbar ? `${classes['main-header']} ${classes.active}` : `${classes['main-header']}`}>
        <h1>FETNLIX</h1>
        <ul>
            <li><NavLink className={(navData) => navData.isActive ? classes.active : "" } to='/'>Início</NavLink></li>
            <li><NavLink className={(navData) => navData.isActive ? classes.active : "" } to='/favorites'>Favoritos</NavLink></li>
        </ul>
    </div>
}

export default Header;