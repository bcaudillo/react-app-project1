import React from  "react";

function Search({searchTerm,onChangeSearch}){
    
    
    function handleChange(event) {
        onChangeSearch(event.target.value);
      }
    return(
        <form className="searchbar" onChange={handleChange}>
            <input
                type="text"
                id="search"
                placeholder="search for card"
                value={searchTerm}
                onChange={(event)=>{handleChange(event)}}
            />
            <button type="submit">🔍</button>
        </form>
    )
}

export default Search; 