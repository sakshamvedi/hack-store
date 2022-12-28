import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Adcard from './Components/Adcard';
import HomeBody from './Components/HomeBody';
import React from 'react';
import Footer from './Components/Footer';
import Account from './Components/Account';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={[<Navbar/>, <Adcard/> , <HomeBody/> , <Footer/>]} />
      <Route path='/Account' element ={[<Account/>]}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
