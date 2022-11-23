import React from "react";
import Spreads from "./Spreads";
import Card from "./Card";


function CardsList({ cards,handleRemoveSpread,isTarotCard}){
        return (
            cards.map(function(card){
                if(isTarotCard){
                    return <Card key={card.id} card={card} />        
            }else{
                return <Spreads card={card} key={card.id} handleRemoveSpread={handleRemoveSpread} />
            }
        }))
    }
      


export default CardsList;