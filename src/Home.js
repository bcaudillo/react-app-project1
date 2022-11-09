import React from 'react';
import CardForm from './CardForm';
import About from './About';


function Home({setSpread}){
        function handleAddCard(newSpread) {
          setSpread((spread)=>[...spread, newSpread]);
        }
    return (
        <div>
            <About />
            <CardForm 
            handleAddCard={handleAddCard}/>
        </div>
    )
    }

export default Home; 