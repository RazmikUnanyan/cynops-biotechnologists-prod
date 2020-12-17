import React from 'react';
import {NavLink} from "react-router-dom";
import '../../scss/header.scss'
import Burger from "./Burger";
import logo from "../../assets/img/logo.png";


const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
            <NavLink exact to="/" className="header__logo"><img src={logo} alt=""/></NavLink>
            <Burger/>
            </div>
        </header>
    );

};

export default Header
