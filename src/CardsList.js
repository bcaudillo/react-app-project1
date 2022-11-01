import React from "react";
import Card from "./Card";

function CardsList({cards}){
    
    return (
        cards.map((card)=>(
        <Card key={card.id} card={card} />
        ))
    )  
}

export default CardsList;