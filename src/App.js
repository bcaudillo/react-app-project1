import './App.css';
import React,{useState} from 'react';
import NavBar from './NavBar';
import CardsContainer from './CardsContainer';
import Header from './Header';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return(

    <div className="App">
        <Header onSearch={setSearchTerm}/>
        <NavBar />
        <CardsContainer />
     
    </div>
  )
}

export default App;
