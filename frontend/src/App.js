import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import AddEvent from "./components/AddEvent.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import ListEventComponent from "./components/ListEventComponent.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      
      <div className="container">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/events" element={<ListEventComponent />} />
            <Route exact path="/add-event" element={<AddEvent />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
