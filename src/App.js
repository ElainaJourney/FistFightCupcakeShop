import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ArtPrompts from "./pages/prompts/prompts.component";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/prompts" component={ArtPrompts} />
    </div>
  );
}

export default App;
