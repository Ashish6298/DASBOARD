// import logo from "./logo.svg";
import {Route, Link, BrowserRouter,Routes } from 'react-router-dom';
import Pre from "./Components/pages/Pre";
import Med from "./Components/pages/Med"
import "./App.css";
import Menu from "./Components/Menu";
import Container from "./Components/Container";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <Menu />
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Container />}/>
      <Route path="/pre" element={<Pre />}/>
      <Route path="/med" element={<Med />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
