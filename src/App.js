import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Pets from "./Pets/Pets";

import Home from "./Home";

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      {"  "}
      <Link to="/pets">Pets</Link>
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pets" component={Pets} />
    </Switch>
  </div>
);

export default App;
