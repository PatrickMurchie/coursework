import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./routes/home"; 
import Login from "./routes/login";
import Register from "./routes/register";
import Navbar from './routes/navBar';


export default function app(){
  return(
  <div>
    <h1>Qughet</h1>
    <Navbar />

    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>


    {/* Styling for the login form */}
    <style>{`
    h1 {
      display: flex;
      flex-direction: column;
      align-items: center;
  margin-top: 20px;
  font-size: 50px
}

`}</style>
</div>
  );
}