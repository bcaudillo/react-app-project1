import React, { useEffect, useState } from 'react';
import CardsList from "./CardsList"

function CardsContainer(){
    const [cards, setCards] =useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/cards")
        //run json server, local host instead
        .then(r=>r.json())
        .then((cardsObj)=>{
        setCards(cardsObj); 
        })
    },[]);
   

    return (
        <CardsList cards={cards}/>
    )
    }
export default CardsContainer; 