import "./assets/style/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./views/Navigation";
import Home from "./views/Home";
import Team from "./views/Team";
import Manager from "./views/Manager";
import Clients from "./views/Clients";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/team" component={Team} />
          <Route path="/manager/:id" component={Manager} />
          <Route path="/clients" component={Clients} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
