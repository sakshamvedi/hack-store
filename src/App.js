import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Adcard from './Components/Adcard';
import HomeBody from './Components/HomeBody';
import Register from './Components/Register';
import React from 'react';
import Footer from './Components/Footer';
import Account from './Components/Account';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Components/Product';
import Cart from './Components/Cart';
import Events from './Components/Events';
import CreateEvent from './Components/CreateEvent';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={[<Navbar/>, <Adcard/> , <HomeBody/> , <Footer/>]} />
      <Route path='/Account' element ={[<Account/>]}/>
      <Route path='/register' element = {[<Register/>]}/>
      <Route path='/events' element = {[<Navbar/>,<Events/>]}/>
      <Route path='/cart' element = {[<Navbar/>,<Cart/> ,<Footer/>]}/>
      <Route path='/product' element  = {[<Navbar/> ,<Product/> ,<Footer/> ]}/>  
      <Route path='/create' element  = {[<CreateEvent/>]}/>  
      
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
