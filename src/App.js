import React from "react";
import "./assets/style/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./views/Navigation";
import Home from "./views/Home";
import Team from "./views/Team";
import Manager from "./views/Manager";
import Login from "./views/Login";
import Clients from "./views/Clients";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "./actions";

function App() {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const dispatch = useDispatch();

  console.log(isLoggedIn);

  return (
    <Router>
      <div className="App">
        {!isLoggedIn ? (
          <Switch>
            <Route path="/" component={Login} />
          </Switch>
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
