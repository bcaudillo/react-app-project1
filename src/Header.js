import React from "react";
import Search from "./Search";

function Header({onSearch}){
    return(
        <header>
            <h1>Tarot Encyclopedia</h1>
            <Search onSearch={onSearch}/>

        </header>
    )
}

export default Header; 