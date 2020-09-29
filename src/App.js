import React from "react";
import "./App.scss";
import Footer from "./components/Layout/Footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Sidebar from "./components/Layout/Sidebar/Sidebar";
import routes from "./routes";

function App() {
  return (
    <div className="app">
      <Router>
        <Sidebar />
        <main>
          <Switch>
            <Redirect exact from="/" to="/home" />
            {routes.map((r, index) => (
              <Route exact key={index} path={r.url}>
                {r.component}
              </Route>
            ))}
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
