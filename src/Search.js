import React,{useState} from  "react";

function Search({onSearch}){
    const [searchTerm, setSearchTerm]=useState("")
    
    
    function handleSubmit(event){
        event.preventDefault();
        onSearch(searchTerm); 
    }
    return(
        <form className="searchbar" onSubmit={handleSubmit}>
            <input
                type="text"
                id="search"
                placeholder="search for card"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">🔍</button>
        </form>
    )
}

export default Search; 