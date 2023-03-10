import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./routes/home";
import Login from "./routes/login";
import Register from "./routes/register";


export default function app(){
  return(
  <div>
    <h1>TEST</h1>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  </BrowserRouter>

  
  </div>
  )
}