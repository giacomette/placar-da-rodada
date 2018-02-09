import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Classification from "./screens/Classification"
import CreateGame from "./screens/CreateGame"
import Games from "./screens/Games"

import {Container} from "semantic-ui-react"

class App extends Component {

  render() {
    return (
      <Container>
        <Switch>
          <Route exact path="/" component={Classification} />
          <Route exact path={`/game/create`} component={CreateGame} />
          <Route exact path={`/games`} component={Games} />
       </Switch>
      </Container>
    );
  }
}

export default App;
