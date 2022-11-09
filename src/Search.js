import React,{useState} from  "react";
import CardsList from "./CardsList";


function Search({cards, setSpread,isTarotCard}){
    const [searchTerm, setSearchTerm] = useState("");
   
    function handleRemoveSpread(id) {
        const newSpread = cards.filter((card) => card.id !== id);
        setSpread(newSpread);
      }
      console.log(cards)




    const cardsToDisplay = cards.filter((card)=>card.name.toLowerCase().includes(searchTerm.toLowerCase()));

    function handleChange(event) {
        setSearchTerm(event.target.value);
      }
    return(
        <div>
            <form className="searchbar" onChange={handleChange}>
                <input
                    type="text"
                    id="search"
                    placeholder="search for card"
                    value={searchTerm}
                    onChange={(event)=>{handleChange(event)}}
                />
            </form>
            <CardsList cards={cardsToDisplay}  handleRemoveSpread={handleRemoveSpread} isTarotCard={isTarotCard}/>

        </div>
        
    )
}

export default Search; 