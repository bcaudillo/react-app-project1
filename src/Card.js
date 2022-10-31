import React from "react";

function Card({card}){
    if(card.id<79){
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
    else{
        return(
            <div>
                <h1>Spread</h1>
                <h3>Name:</h3>
                {card.name}
                <h3>Number of Cards:</h3>
                {card.number_of_cards}
                <h3>Spread Meaning:</h3>
                {card.spread_meaning}
            </div>
        )
    }
}

export default Card; 