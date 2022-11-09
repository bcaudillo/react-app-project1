import React from "react";
import {NavLink} from  "react-router-dom"


function NavBar(){
    return(
         <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/tarotcards">All Tarot Cards</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/spread">Spread</NavLink>         
            </nav>
        
    )
}

export default NavBar;
