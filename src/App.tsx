import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
// import EventForm from './Pages/EventPages/NewEvent';
// import EditEvent from './Pages/EventPages/EditEvent';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
