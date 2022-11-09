import './App.css';
import NavBar from "./NavBar"
import React,{useEffect,useState} from 'react';
import Search from './Search';
import {Switch, Route} from "react-router-dom"
import Home from './Home';
import About from './About';


function App() {
  const [cards, setCards]=useState([])
  const [spread,setSpread]=useState([])
    
    useEffect(()=>{
        fetch("http://localhost:3000/cards")
        //run json server, local host instead
        .then(r=>r.json())
        .then((cardsArray)=>{
            setCards(cardsArray);
        })
        fetch("http://localhost:3000/spread")
        //run json server, local host instead
        .then(r=>r.json())
        .then((spread)=>{
            setSpread(spread);
        })
    },[]);
  return(
    <div>
      <h1>Tarot Encyclopedia</h1>
      <NavBar />
      <Switch>
          <Route exact path="/">
            <Home setSpread={setSpread} />
          </Route>
          <Route path="/tarotcards">
            <Search cards={cards} setSpread={setSpread} isTarotCard={true}/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path ="/spread">
            <Search cards={spread} setSpread={setSpread} isTarotCard={false}/>
          </Route>
      </Switch>
    </div>
  );
}

           
            
            
export default App;
