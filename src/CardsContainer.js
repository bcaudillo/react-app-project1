import React, { useEffect, useState } from 'react';
import CardsList from "./CardsList";
import Search from './Search';

function CardsContainer(){
    const [cards, setCards]=useState([])
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(()=>{
        fetch("http://localhost:3000/cards")
        //run json server, local host instead
        .then(r=>r.json())
        .then((cardsObj)=>{
        setCards(cardsObj); 
        })
    },[]);
    const cardsToDisplay = cards.filter((card)=>card.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div>
            <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm}/>
            <CardsList cards={cardsToDisplay}/>
        </div>
    )
    }
export default CardsContainer; 