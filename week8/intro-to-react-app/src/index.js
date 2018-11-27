import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";

import "./styles.css";


function App() {
  return (
    <div className="App">
      <Header>OLD HEADER</Header>
      <Header>NEW HEADER</Header>
      <h1>Hello CodeSandbox</h1>
      <h2>hello class</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
