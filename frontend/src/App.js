import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Header from "./components/Header.jsx";
import ListEventComponent from "./components/ListEventComponent.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<ListEventComponent />}></Route>
            <Route
              exact
              path="/events"
              element={<ListEventComponent />}
            ></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
