import React from "react"


function Spreads({card, handleRemoveSpread}){
    function handleDeleteClick() {
        fetch(`http://localhost:3000/spread/${card.id}`, {
          method: "DELETE",
        });
        handleRemoveSpread(card.id);
      }
    return(
        <div>
                <h1>Spread</h1>
                <h3>Name:</h3>
                {card.name}
                <h3>Number of Cards:</h3>
                {card.number_of_cards}
                <h3>Spread Meaning:</h3>
                {card.spread_meaning}
                <button onClick={handleDeleteClick} >
                    🗑
                </button>
        </div> 
    )
        
        
    
}


export default Spreads