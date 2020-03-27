import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  console.log(generatePalette(seedColors[4]));
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Palette list goes here</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={() => <h1>Individual Palette</h1>}
      />
    </Switch>
  );
}

export default App;
