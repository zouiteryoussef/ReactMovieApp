import React from "react";
import ReactDOM from "react-dom";
import MovieApp from "./Movie-App.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MovieApp />, rootElement);
