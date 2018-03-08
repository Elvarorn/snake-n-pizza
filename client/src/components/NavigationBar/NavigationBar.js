import React from 'react';
import { PropTypes } from 'prop-types';
import NavigationBarLinkWrapper from '../NavigationBarLinkWrapper/NavigationBarLinkWrapper';
import { NavLink } from 'react-router-dom';

const NavigationBar = ({ logoImageUrl }) => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <div className="navbar-image">
                    <img src={ logoImageUrl } alt="" width="1200" height="350" />
                </div>
                <NavigationBarLinkWrapper>

                    <NavLink
                        exact
                        to="/"
                        activeClassName="active"
                        className="nav-link">Menu</NavLink>

                    <NavLink
                        to="/Offers"
                        activeClassName="active"
                        className="nav-link">Offers</NavLink>

                    <NavLink
                        to="/AboutUs"
                        activeClassName="active"
                        className="nav-link">About us</NavLink>

                    <NavLink
                        to="/Cart"
                        activeClassName="active"
                        className="nav-link">Cart</NavLink>
                </NavigationBarLinkWrapper>

            </div>
        </nav>
    );
};

NavigationBar.propTypes = {
    logoImageUrl: PropTypes.string.isRequired
};

export default NavigationBar;
