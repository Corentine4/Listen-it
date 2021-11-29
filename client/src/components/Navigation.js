import React, { Component } from 'react';

// Import the navigation
import { NavLink } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                {/* Adding the navigation to the home page ("/") 
                activeClassName = particular CSS class */}
                <NavLink exact to="/" activeClassName="navigation-active">
                    Accueil
                </NavLink>
            </div>
        );
    }
}

export default Navigation;