import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import AddEvent from "./components/AddEvent.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import ListEventComponent from "./components/ListEventComponent.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import UpdateEvent from "./components/UpdateEvent.jsx";
import SignUpComponent from "./components/SignUpComponent.jsx";
import LoginComponent from "./components/LoginComponent.jsx";
import AuthService from "./services/AuthService.js";

function App() {
  function AuthRoute({ children }) {
    const isAuth = AuthService.isUserLoggedIn();

    if (isAuth) {
      return children;
    }
    return <Navigate to="/" />;
  }
  return (
    <div>
      <div className="container">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/events"
              element={
                <AuthRoute>
                  <ListEventComponent />
                </AuthRoute>
              }
            />
            <Route
              exact
              path="/add-event"
              element={
                <AuthRoute>
                  <AddEvent />
                </AuthRoute>
              }
            />
            <Route
              exact
              path="/edit-event/:id"
              element={
                <AuthRoute>
                  <UpdateEvent />
                </AuthRoute>
              }
            />
            <Route exact path="/sign-up" element={<SignUpComponent />} />
            <Route exact path="/login" element={<LoginComponent />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
