import React from "react";
import Card from "./Card";

function CardsList({cards}){
    console.log(cards)
    return (
        cards.map((card)=>(
        <Card card={card}/>
        ))
    )  
}

export default CardsList;