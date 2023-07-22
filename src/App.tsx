
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import '../src/css/app.css'
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import EventsView from "./Pages/EventsView";
import EditEvent from "./Pages/EventPages/EditEvent";
import UserLogin from "./Pages/User/UserLogin";
import SignUp from "./Pages/User/UserSignUp";
import UserPage from "./Pages/User/UserPage";
import EventForm from "./Pages/EventPages/NewEvent";
// import EventForm from './Pages/EventPages/NewEvent';
// import EditEvent from './Pages/EventPages/EditEvent';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsView />} />
        <Route path="/addEvents" element={<EventForm />} />
        <Route path="/editEvent" element={<EditEvent eventId={0} />} />

        <Route path="/logIn" element={<UserLogin />} />
        <Route path="/signUp" element={<SignUp />} />

        <Route path="/profile" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
