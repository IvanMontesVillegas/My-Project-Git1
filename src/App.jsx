import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home/Home';

import './App.css'
import Login from './views/Sing-in/Sing-in';
import CountsClick from './components/CountsClick/CountsClick';
import AboutUs from './views/About-us/About-us';


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sing-in" element={<Login />}/>
        <Route path="/contador" element={<CountsClick />}/>
        <Route path="/acerca-de-nosotros" element={<AboutUs />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
