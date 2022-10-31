import React, { useEffect, useState } from 'react';
import CardsList from "./CardsList";
import Search from './Search';
import CardForm from './CardForm';

function CardsContainer(){
    const [cards, setCards]=useState([])
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(()=>{
        fetch("http://localhost:3000/cards")
        //run json server, local host instead
        .then(r=>r.json())
        .then((cardsObj)=>{
            setCards(cardsObj);
            console.log(cardsObj) 
        })
    },[]);
    const cardsToDisplay = cards.filter((card)=>card.name.toLowerCase().includes(searchTerm.toLowerCase()));
    function handleAddCard(newCard) {
        setCards([...cards, newCard]);
      }
    return (
        <div>
            <CardForm onAddCard={handleAddCard}/>
            <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm}/>
            <CardsList cards={cardsToDisplay}/>
        </div>
    )
    }
export default CardsContainer; 