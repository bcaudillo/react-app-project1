import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Route } from 'react-router-dom';
import Search from './Search';
import CardForm from './CardForm';
import CardsList from './CardsList';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Route exact path="/">
      <App/>
    </Route>
    <Route  path="/form">
      <CardForm/>
    </Route>
    <Route path="/search">
      <Search/>
    </Route>
    <Route path="/list">
      <CardsList/>
    </Route>
  </BrowserRouter>,
  document.getElementById("root")
);


