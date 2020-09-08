import React from "react";
import "./App.scss";
import Footer from "./components/Layout/Footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Buttons from "./pages/Buttons/Buttons";
import Home from "./pages/Home/Home";
import Sidebar from "./components/Layout/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Router>
        <Sidebar />
        <main>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/buttons">
              <Buttons />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
