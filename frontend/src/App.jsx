import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import AddEvent from "./components/AddEvent.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import ListEventComponent from "./components/ListEventComponent.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdateEvent from "./components/UpdateEvent.jsx";
import SignUpComponent from "./components/SignUpComponent.jsx";
import LoginComponent from "./components/LoginComponent.jsx";

function App() {
  return (
    <div>
      
      <div className="container">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<LoginComponent />} />
            <Route exact path="/events" element={<ListEventComponent />} />
            <Route exact path="/add-event" element={<AddEvent />} />
            <Route exact path="/edit-event/:id" element={<UpdateEvent />} />
            <Route exact path="/sign-up" element={<SignUpComponent />} />
            <Route exact path="/login" element={<LoginComponent />} />
            
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
