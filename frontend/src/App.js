import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Header from "./components/Header.jsx";
import ListEventComponent from "./components/ListEventComponent.jsx";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <ListEventComponent />
      </div>
    </div>
  );
}

export default App;
