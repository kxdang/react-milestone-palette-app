import React from "react";
import "./App.css";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  console.log(generatePalette(seedColors[4]));
  return (
    <div>
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
