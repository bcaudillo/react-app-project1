import React from "react";

function Card({card}){
        return(
            <div>
                <h1 key={card.id}>{card.name}</h1>
                <h3>Description:</h3> 
                {card.desc}
                <h3>Meaning Up: </h3>{card.meaning_up}
                <h3>Meaning Reversed:</h3>{card.meaning_rev}
                <h3>Type: </h3>
                {card.type}
                
            </div>
           
    
        )
    }


export default Card; 