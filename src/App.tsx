import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import EventsView from "./Pages/EventsView";
import EditBands from "./Pages/Bands/EditBands";
import EditEvent from "./Pages/EventPages/EditEvent";
import EditPlaces from "./Pages/Places/EditPlaces";
import UserLogin from "./Pages/User/UserLogin";
import SignUp from "./Pages/User/UserSignup";
// import EventForm from './Pages/EventPages/NewEvent';
// import EditEvent from './Pages/EventPages/EditEvent';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsView />} />
        <Route path="/editBand" element={<EditBands bandId={0} />} />
        <Route path="/editEvent" element={<EditEvent eventId={0} />} />
        <Route path="/editPlaces" element={<EditPlaces />} />
        <Route path="/logIn" element={<UserLogin/>} />
        <Route path="/signUp" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
