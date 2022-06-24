import React from 'react';
import './App.css';
import logo from './imagens/bannercafe4.png';
import Nav from './components/Nav.js';
import Inicio from './components/Inicio.js'
import Cardapio from './components/Cardapio.js'
import Contato from './components/Contato.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
        <BrowserRouter>
          <div className="App">

            <a href="https://api.whatsapp.com/send?l=pt_BR&amp;phone=5561992607877" target="_blank" rel="noreferrer">  (61) 996260-7877 | </a>
            <a href="mailto:beto.manica@gmail.com">contato@gmail.com | </a>
            <a href="https://instagram.com" target="_blank"  rel="noreferrer">Instagram | </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"> Facebook</a>
            
            <img className='Logo' src={logo} alt="logo"></img>
          <br />        
        <Nav />
          <header className="App-header">
          <Routes>
              <Route exact path="/" element={<Inicio />} />    
              <Route exact path="/Inicio" element={<Inicio />} />                            
              <Route path="/Cardapio" element={<Cardapio />} />
              <Route path="/Contato" element={<Contato />} />
              <Route component={Inicio} />      
          </Routes>
          </header>
          </div>
      </BrowserRouter>
      
)}



export default App;
