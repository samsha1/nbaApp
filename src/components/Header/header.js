import React from 'react';
import style from './header.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sideNav';

const Logo = () => (
        <Link to="/" className={style.logo}>
            <img src="/images/nba_logo.png"  alt="nba logo"/>
        </Link>
    )

const NavBar = (props) => (

    <div>
        <FontAwesome name="bars" className={style.bars} onClick = {props.onOpenNav}/>
    </div>

    )

const Header = (props) => {
  return (
        <header className={style.header}>
                <SideNav {...props}/> 
            <div className={style.headerOpt}>
                <NavBar {...props} />
                <Logo/>
            </div>
        </header>

  )
}

export default Header;
