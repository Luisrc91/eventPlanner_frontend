import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router } from "react-router-dom";
import SignUp from './Pages/User/UserSignup'
import UserLogin from './Pages/User/UserLogin';
import NewBand from './Pages/Bands/NewBand';
import EditBands from './Pages/Bands/EditBands';


function App() {
  return (
    <BrowserRouter>

      < SignUp/>
      < UserLogin/>
      <NewBand  />
      <EditBands />
    </BrowserRouter>
    
  );
}

export default App;
