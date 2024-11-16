import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home/Home';

import './App.css'
import Login from './views/Sing-in/Sing-in';


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sing-in" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
