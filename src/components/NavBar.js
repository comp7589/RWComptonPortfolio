import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";


class NavBar extends Component {
    render() {
        return (
            <nav>

                <a href="/">Ryan Compton</a>
                <div>
                    <ul>
                        <li>
                            <NavLink
                                className="navbar"
                                activeClassName="active"
                                isActive={() => window.location.pathname === "/about"}
                                to="/about"
                            >
                            About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                            className="navbar"
                            activeClassName="active"
                            isActive={() => window.location.pathname === "/portfolio"}
                            to="/portfolio"
                            >
                            Portfolio
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                            className="navbar"
                            activeClassName="active"
                            isActive={() => window.location.pathname === "/contact"}
                            to="/contact"
                            >
                            Contact
                            </NavLink>
                        </li>
                   
                   
                    </ul>



                </div>


            </nav>
        );
    }


};

export default NavBar;