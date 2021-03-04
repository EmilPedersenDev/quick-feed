import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import "./assets/style/App.scss";

import Navigation from "./views/Navigation";
import Home from "./views/Home";
import Team from "./views/Team";
import Manager from "./views/Manager";
import Clients from "./views/Clients";
import AdProvider from "./services/AdProvider";

function App() {
  const AzureAdProvider = new AdProvider();
  const isLoggedIn = useSelector((state) => state.authReducer.isAuthenticated);

  useEffect(() => {
    AzureAdProvider.getAllAccounts();
  }, []);

  function login() {
    AzureAdProvider.login();
  }

  return (
    <Router>
      <div className="App">
        {!isLoggedIn ? (
          <React.Fragment>
            <Navigation login={login} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Navigation />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/team" component={Team} />
              <Route path="/manager/:id" component={Manager} />
              <Route path="/clients" component={Clients} />
            </Switch>
          </React.Fragment>
        )}
      </div>
    </Router>
  );
}

export default App;
