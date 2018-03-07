import React from 'react';
import { PropTypes } from 'prop-types';
import NavigationBarLinkWrapper from '../NavigationBarLinkWrapper/NavigationBarLinkWrapper';
import { BrowserRouter as Router ,NavLink } from 'react-router-dom';

const NavigationBar = ({ logoImageUrl }) => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
            <div className="navbar-image">
                <img src={ logoImageUrl } alt=""/>
            </div>
            <Router>
                <NavigationBarLinkWrapper>

                    <NavLink
                    to="/Menu"
                    activeClassName="active"
                    className="nav-link">Menu</NavLink>

                    <NavLink
                    to="/Offers"
                    activeClassName="active"
                    className="nav-link">Offers</NavLink>

                    <NavLink
                    to="/About us"
                    activeClassName="active"
                    className="nav-link">About us</NavLink>

                    <NavLink
                    to="/Cart"
                    activeClassName="active"
                    className="nav-link">Cart</NavLink>

                </NavigationBarLinkWrapper>
              </Router>
            </div>
        </nav>
    );
};

NavigationBar.propTypes = {
    logoImageUrl: PropTypes.string.isRequired
};

export default NavigationBar;
